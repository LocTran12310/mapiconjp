import Head from "next/head"
import React from "react";
import { BASE_CONSTANTS } from "../../../constants/base.constants";
import GoogleTagManager from "./GoogleTagManager";

interface SEOProps {
  openGraphType: string;
  url: string;
  title: string;
  description: string;
  image: string;
  siteName: string;
}

const socialTags = ({
  openGraphType,
  url,
  title,
  description,
  image,
  siteName,
}: SEOProps) => {
  const metaTags = [
    { name: "og:type", content: openGraphType },
    { name: "og:url", content: url },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "og:image", content: image },
    { name: "og:image:width", content: "600" },
    { name: "og:image:height", content: "315" },
    { name: "og:site_name", content: siteName }
  ];

  return metaTags;
};

const HeadHtml = (props: SEOProps) => {
  const { title, description } = props;

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description}/>
        <link rel="canonical" href={`${BASE_CONSTANTS.BASE_URL}`}/>
        <link rel="icon" href="/fav.ico" />

        {socialTags(props).map(({ name, content }) => {
          return (<meta key={name} property={name} content={content}/>)
        })}
      </Head>
      <GoogleTagManager/>
    </React.Fragment>
  )
};

HeadHtml.defaultProps = {
  openGraphType: "website",
  url: BASE_CONSTANTS.BASE_URL,
  title: "MAPICON（マピコン）｜消防設備点検アプリ",
  description: "MAPICON（マピコン）は、消防設備点検を効率化するDXアプリです。MAPICONのアプリを消防設備点検で利用することで、点検報告書を自動作成します。今すぐアプリをダウンロード！",
  image: `${BASE_CONSTANTS.BASE_URL}/images/ogp.png`,
  siteName: "MAPICON",
};

export default HeadHtml;