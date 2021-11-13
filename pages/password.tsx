import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import LoginHeader from "../src/components/main/LoginHeader";
import { checkCode, setPassword } from "../src/utils/api";

interface Props {
  code: any;
  valid: boolean;
  error?: string;
  full_name?: string;
  email?: string;
}

type FormData = {
  password: string;
  password2: string;
};
const Password: NextPage<Props> = ({
  valid,
  error,
  code,
  full_name,
  email,
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const handleForm: SubmitHandler<FormData> = ({ password, password2 }) => {
    if (password !== password2) {
      setError("password", {
        message: "Two passwords must be same.",
        type: "same",
      });
      return;
    }
    setPassword({ password, password2, code }).then(() => {
      toast.success("Berhasil mengganti password. Silahkan log in.");
      router.push(`/login${email ? "?email=" + email : ""}`);
    });
  };
  return (
    <>
      <Header title="Set Password" />
      <Layout>
        <LoginHeader />
        <div className="flex flex-col justify-center w-full bg-white">
          <div className="px-12 sm:px-24 lg:mt-16 xl:px-24">
            {!error ? (
              <>
                <h2 className="text-4xl font-bold text-center text-primary">
                  Ganti Password
                </h2>
                <p className="text-center">{full_name}</p>
                <p className="text-center">{email}</p>
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
              </>
            ) : (
              <h1 className="text-4xl font-bold text-center text-primary">
                {error}
              </h1>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

Password.getInitialProps = async (ctx) => {
  const { code } = ctx.query;
  return await checkCode(code as string)
    .then(() => {
      let full_name = "";
      let email = "";
      try {
        const b = Buffer.from((code as string).split(":")[0], "base64");
        const data = JSON.parse(b.toString());
        full_name = data.full_name;
        email = data.email;
      } catch (err) {}
      return { valid: true, code, full_name, email };
    })
    .catch((error) => ({
      valid: false,
      error: error?.response?.data?.error,
      code,
    }));
};

export default Password;
