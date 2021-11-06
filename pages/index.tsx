import type { NextPage } from "next";
import  Header from "../src/components/main/CustomHead";
import  Layout from "../src/components/main/Layout";
const Home: NextPage = () => {
  return <>
  <Header title="Home"/>
  <Layout>
    <h1 className="font-light text-black font-primary">Isi Web</h1>
  </Layout>
  </>;
};

export default Home;
