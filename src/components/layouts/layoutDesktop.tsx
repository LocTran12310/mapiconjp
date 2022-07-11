import Head from 'next/head';
import Image from 'next/image';
import React, { FC } from 'react';

export interface IProps {
  children: React.ReactElement
  head?: React.ReactElement
}

const LayoutDesktop: FC<IProps> = ({ head, children }: IProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>MapiconJP</title>
      </Head>
      <header className='w-full'>
        <div className='w-full relative shadow-md'>
          <div className='container_app bg-white h-[80px] mx-auto my-auto px-[150px]'>
            <div className='flex h-[100%] items-center justify-between'>
              <div>
                <Image
                  src="/images/logo-color.png"
                  alt="logo"
                  objectFit="contain"
                  width={200}
                  height={45}
                />
              </div>
              <div className='flex gap-x-[20px]'>
                <div className='text-main-grey text-sm font-[500]  py-[10px] rounded'>MAPICONの特徴</div>
                <div className='text-main-grey text-sm font-[500]  py-[10px] rounded'>料金プラン</div>
                <div className='text-main-grey text-sm font-[500]  py-[10px] rounded'>よくあるご質問</div>
                <div className='bg-main-orange text-white text-sm font-[500] px-[25px] py-[10px] rounded'>資料請求・利用のお申込み</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {head}
      <main>{children}</main>
      <footer className='w-full bg-sub-greybackground'>
        <div className='container_app h-[100px] mx-auto my-auto px-[150px] text-sm'>
          <div className='flex h-[100%] items-center justify-between'>
            <div className='flex gap-[30px] text-sub-grey'>
              <div>会社概要</div>
              <div>プライバシーポリシー</div>
              <div>お問い合わせ</div>
            </div>
            <div className='text-sub-grey'>© 2022 OMY, Inc. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default LayoutDesktop;