import type { NextPage } from "next";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import React from "react";
import TopMenu from "../src/components/main/TopMenu";
import InstagramEmbed from "react-instagram-embed";

const Feeds: NextPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <div className="w-full pb-16">
          <div className="flex flex-col w-full h-full px-6 py-6 bg-gradient-to-b from-primary to-tertiary ">
            {/* Top Menu */}
            <TopMenu />

            <div className="flex flex-col justify-center py-5">
              <h2 className="text-4xl font-semibold text-white">Feeds</h2>
            </div>
            <div className="App">
              <InstagramEmbed
                url="https://www.instagram.com/stei21itb/"
                clientAccessToken="123|456"
                maxWidth={500}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Feeds;
