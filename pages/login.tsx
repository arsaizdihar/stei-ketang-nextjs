import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { FormEventHandler, useState } from "react";
import { mutate } from "swr";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import LoginHeader from "../src/components/main/LoginHeader";
import useMe from "../src/hooks/useMe";
import { login } from "../src/utils/api";

const Login: NextPage = () => {
  const [inputState, setInputState] = useState({ email: "", password: "" });
  const router = useRouter();
  const { user } = useMe();
  if (user) router.push("/dashboard");

  const handleLogin: FormEventHandler = (e) => {
    e.preventDefault();
    login(inputState.email, inputState.password).then((data) => {
      mutate("me/").then(() => router.push("/dashboard"));
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
              <form onSubmit={handleLogin} noValidate>
                <div>
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    value={inputState.email}
                    onChange={(e) =>
                      setInputState({ ...inputState, email: e.target.value })
                    }
                  ></input>
                </div>
                <div className="mt-8">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={inputState.password}
                    onChange={(e) =>
                      setInputState({ ...inputState, password: e.target.value })
                    }
                  ></input>
                </div>
                <div className="mt-10">
                  <button className="w-full p-4 text-lg font-semibold tracking-wide text-gray-100 duration-700 shadow-lg rounded-xl bg-primary font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600">
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
