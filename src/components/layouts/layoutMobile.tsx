import Head from 'next/head';
import React, { FC } from 'react';

interface IProps {
  children: React.ReactElement;
  head?: React.ReactElement;
}

const LayoutMobile: FC<IProps> = ({ head, children }: IProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>MapiconJP</title>
      </Head>
      <header className='w-full'>
        <div className='w-full border-b border-grey-100'>
          <div className='container_app mx-auto px-[50px] pt-[25px] pb-[20px] xs:px-[20px] xs:py-[15px]'>
            <div className='flex items-center justify-between'>
              <div>ICON</div>
              <div>TITLE</div>
              <div>HEADER</div>
              <div>MOBILE</div>

            </div>
          </div>
        </div>
      </header>
      {head}
      <main>{children}</main>
      <footer>FOOTER</footer>
    </React.Fragment>
  )
}

export default LayoutMobile;