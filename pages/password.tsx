import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import LoginHeader from "../src/components/main/LoginHeader";
import { checkCode, setPassword } from "../src/utils/api";

interface Props {
  code: any;
  valid: boolean;
  error?: string;
}

type FormData = {
  password: string;
  password2: string;
};
const Password: NextPage<Props> = ({ valid, error, code }) => {
  const [inputState, setInputState] = useState({ password: "", password2: "" });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  console.log(error);
  console.log(errors);
  const handleForm: SubmitHandler<FormData> = ({ password, password2 }) => {
    if (password !== password2) {
      setError("password", {
        message: "Two passwords must be same.",
        type: "same",
      });
      return;
    }
    setPassword({ password, password2, code }).then(() =>
      router.push("/login")
    );
  };
  return (
    <>
      <Header />
      <Layout>
        <LoginHeader />
        <div className="flex flex-col justify-center w-full bg-white">
          <div className="px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24">
            <h2 className="text-4xl font-bold text-center text-primary">
              Ganti Password
            </h2>
            <div className="mt-12">
              <form noValidate onSubmit={handleSubmit(handleForm)}>
                <div className="mt-8">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password Baru"
                    {...register("password", {
                      required: true,
                      minLength: {
                        value: 8,
                        message: "Minimum length of password is 8",
                      },
                    })}
                  ></input>
                  {errors.password && (
                    <p className="input-error">{errors.password.message}</p>
                  )}
                </div>
                <div className="mt-8">
                  <input
                    className="input"
                    type="password"
                    placeholder="Konfirmasi Password Baru"
                    {...register("password2", { required: true })}
                  ></input>
                </div>
                <div className="mt-10">
                  <button className="w-full px-4 py-3 text-lg font-bold tracking-wide text-gray-100 duration-700 shadow-lg rounded-xl bg-primary font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600">
                    KONFIRMASI
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

Password.getInitialProps = async (ctx) => {
  const { code } = ctx.query;
  return await checkCode(code as string)
    .then(() => ({ valid: true, code }))
    .catch((error) => ({ valid: false, error: error?.response?.data, code }));
};

export default Password;
