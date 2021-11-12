import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { mutate } from "swr";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import LoginHeader from "../src/components/main/LoginHeader";
import useMe from "../src/hooks/useMe";
import { login } from "../src/utils/api";
type FormData = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const router = useRouter();
  const { user } = useMe();
  if (user) router.push("/dashboard");

  const handleLogin: SubmitHandler<FormData> = async ({ email, password }) => {
    toast.loading("Loggin in....", {});
    await login(email, password)
      .then(() => {
        toast.dismiss();
        mutate("me/").then((data) => {
          toast.info(`Selamat datang ${data.full_name}!`, {
            delay: 800,
            icon: false,
            autoClose: 2000,
          });
          router.push("/dashboard");
        });
      })
      .catch((err) => {
        toast.dismiss();
        if (err?.response?.status === 400 || err?.response?.status === 401) {
          setError("password", {
            message: "Invalid email or password",
            type: "password",
          });
        }
      });
  };
  return (
    <>
      <Header />
      <Layout>
        <LoginHeader />
        <div className="flex flex-col justify-center w-full bg-white">
          <div className="px-12 sm:px-24 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2 className="text-4xl font-bold text-center text-primary lg:text-left xl:text-5xl xl:text-bold">
              Log In
            </h2>
            <div className="mt-12">
              <form onSubmit={handleSubmit(handleLogin)} noValidate>
                <div>
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^16521[0-9]{3}@mahasiswa.itb.ac.id$/i,
                        message: "Invalid STEI email address.",
                      },
                    })}
                  ></input>
                  {errors.email && (
                    <p className="input-error">{errors.email.message}</p>
                  )}
                </div>
                <div className="mt-8">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  ></input>
                  {errors.password && (
                    <p className="input-error">{errors.password.message}</p>
                  )}
                </div>
                <div className="mt-10">
                  <button
                    className="w-full p-4 text-lg font-semibold tracking-wide text-gray-100 duration-700 shadow-lg rounded-xl bg-primary font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 disabled:bg-gray-400"
                    disabled={isSubmitting}
                  >
                    LOG IN
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

export default Login;
