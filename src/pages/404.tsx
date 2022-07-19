/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import HeadHtml from "../components/layouts/common/HeadHtml";

const Page404 = () => {
  return (
    <React.Fragment>
      <HeadHtml />
      <div className="flex flex-col bg-main-teal w-[100vw] h-[100vh] justify-center items-center ">
        <Link href="/">
          <img src="/images/logo-white.png" alt="" className="max-w-[260px] max-h-[50px]"/>
        </Link>
        <div className="flex justify-center items-center mt-[40px]">
          <h1 className="text-[24px] text-white mr-[20px] py-[10px] pr-[23px] border-r-[1px] border-r-white/[.3]">404</h1>
          <h2 className="text-[14px] text-white">This page could not be found.</h2>
        </div>
        <footer className="w-full text-center fixed bottom-0">
          <div className='w-[100%] bg-grey-background border-[1px] sm:block hidden'></div>
          <div className="text-[12px] text-white py-[20px]">
          © 2022 OMY, Inc. All Rights Reserved.
          </div>
        </footer>
      </div>
    </React.Fragment>
  )
};
export default Page404;