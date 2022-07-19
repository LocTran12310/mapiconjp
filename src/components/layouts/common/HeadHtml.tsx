import Head from "next/head";
import React from "react";
import { BASE_CONSTANTS } from "../../../constants/base.constants";
import GoogleTagManager from "./GoogleTagManager";

const HeadHtml = () => {
  const url: string = BASE_CONSTANTS.BASE_URL;
  const image: string = `${BASE_CONSTANTS.BASE_URL}/images/ogp.png`;

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MAPICON（マピコン）は、消防設備点検を効率化するDXアプリです。MAPICONのアプリを消防設備点検で利用することで、点検報告書を自動作成します。今すぐアプリをダウンロード！"/>
        <meta property="og:description" content="MAPICON（マピコン）は、消防設備点検を効率化するDXアプリです。MAPICONのアプリを消防設備点検で利用することで、点検報告書を自動作成します。今すぐアプリをダウンロード！" key="og:description"/>
        <meta property="og:type" content="website" key="og:type"/>
        <meta property="og:title" content="MAPICON（マピコン）" key="og:title"/>
        <meta property="og:url" content={url} key="og:url"/>
        <meta property="og:image" content={image} key="og:image"/>
        <meta property="og:image:width" content="600" key="og:image:width"/>
        <meta property="og:image:height" content="315" key="og:image:height"/>
        <meta property="og:site_name" content="MAPICON" key="og:site_name"/>

        <link rel="canonical" href={`${BASE_CONSTANTS.BASE_URL}`}/>
        <link rel="icon" href="/fav.ico" />

        <title>MAPICON（マピコン）｜消防設備点検アプリ</title>
      </Head>
      <GoogleTagManager/>
    </React.Fragment>
  )
};

export default HeadHtml;