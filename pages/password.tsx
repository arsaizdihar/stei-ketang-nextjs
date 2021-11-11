import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { FormEventHandler, useState } from "react";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import LoginHeader from "../src/components/main/LoginHeader";
import { checkCode, setPassword } from "../src/utils/api";

interface Props {
  code: any;
  valid: boolean;
  error?: string;
}
const Password: NextPage<Props> = ({ valid, error, code }) => {
  const [inputState, setInputState] = useState({ password: "", password2: "" });
  const router = useRouter();
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(code);
    setPassword({ ...inputState, code }).then(() => router.push("/login"));
  };
  return (
    <>
      <Header />
      <Layout>
        <LoginHeader />
        <div className="flex flex-col justify-center w-full bg-white">
          <div className="px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2 className="text-4xl font-bold text-center text-primary lg:text-left xl:text-5xl xl:text-bold">
              Ganti Password
            </h2>
            <div className="mt-12">
              <form noValidate onSubmit={handleSubmit}>
                <div className="mt-8">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password Baru"
                    value={inputState.password}
                    onChange={(e) =>
                      setInputState({ ...inputState, password: e.target.value })
                    }
                  ></input>
                </div>
                <div className="mt-8">
                  <input
                    className="input"
                    type="password"
                    placeholder="Konfirmasi Password Baru"
                    value={inputState.password2}
                    onChange={(e) =>
                      setInputState({
                        ...inputState,
                        password2: e.target.value,
                      })
                    }
                  ></input>
                </div>
                <div className="mt-10">
                  <button className="w-full p-4 text-lg font-semibold tracking-wide text-gray-100 duration-700 shadow-lg rounded-xl bg-primary font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600">
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
  console.log(code);
  const data = await checkCode(code as string);
  if (data.valid) {
    return { valid: true, code };
  }
  return { valid: false, error: data.error, code };
};

export default Password;
