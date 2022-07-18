import Head from "next/head";
import React from "react";
import { BASE_CONSTANTS } from "../../../constants/base.constants";
import GoogleTagManager from "./GoogleTagManager";

const HeadHtml = () => {
  return (
    <React.Fragment>
      <Head>
        <title>MAPICON（マピコン）｜消防設備点検アプリ</title>
        <meta name="description" content="MAPICON（マピコン）は、消防設備点検を効率化するDXアプリです。MAPICONのアプリを消防設備点検で利用することで、点検報告書を自動作成します。今すぐアプリをダウンロード！"/>
        <link rel="canonical" href={`${BASE_CONSTANTS.BASE_URL}`}/>
        <link rel="icon" href="/fav.ico" />
        <meta property="og:description" content="MAPICON（マピコン）は、消防設備点検を効率化するDXアプリです。MAPICONのアプリを消防設備点検で利用することで、点検報告書を自動作成します。今すぐアプリをダウンロード！"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="MAPICON（マピコン）"/>
        <meta property="og:url" content={`${BASE_CONSTANTS.BASE_URL}`}/>
        <meta property="og:image" content={`${BASE_CONSTANTS.BASE_URL}/images/OGP.png`}/>
        <meta property="og:site_name" content="MAPICON"/>
      </Head>
      <GoogleTagManager/>
    </React.Fragment>
  )
};

export default HeadHtml;