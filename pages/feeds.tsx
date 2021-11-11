import type { NextPage } from "next";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Header from "../src/components/main/CustomHead";
import Layout from "../src/components/main/Layout";
import TopMenu from "../src/components/main/TopMenu";
import NoLoginRedirect from "../src/components/other/NoLoginRedirect";

const Feeds: NextPage = () => {
  return (
    <>
      <NoLoginRedirect />
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
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="stei21itb"
              ></TwitterTimelineEmbed>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Feeds;
