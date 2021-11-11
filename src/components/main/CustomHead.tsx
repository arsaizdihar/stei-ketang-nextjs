import Head from "next/head";
import React from "react";

interface Props {
  title?: string;
  description?: string;
}
const defaultDescription = "Laman resmi STEI'21";
const CustomHead: React.FC<Props> = ({ title, description }) => {
  const titleFinal = title
    ? title + " | STEI'21 Official Voting Website"
    : "STEI'21 Official Website";
  return (
    <Head>
      <title>{titleFinal}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleFinal} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta
        name="twitter:image"
        content={process.env.NEXT_PUBLIC_BASE_URL + "logo.png"}
      />
      <meta name="og:card" content="summary_large_image" />
      <meta name="og:title" content={titleFinal} />
      <meta name="og:description" content={description || defaultDescription} />
      <meta
        name="og:image"
        content={process.env.NEXT_PUBLIC_BASE_URL + "logo.png"}
      />
      <link rel="icon" href="/logo.ico" />
    </Head>
  );
};

export default CustomHead;
