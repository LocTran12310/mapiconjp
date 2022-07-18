/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Link from 'next/link';
import React, { FC } from 'react';
import Footer from './common/Footer';
import HeadHtml from './common/HeadHtml';

interface IProps {
  children: React.ReactElement;
  head?: React.ReactElement;
}

const tabs = [
  {id: 0, title: 'MAPICONの特徴', isSelected: false},
  {id: 1, title: '料金プラン', isSelected: false},
  {id: 2, title: 'よくあるご質問', isSelected: false},
  {id: 3, title: '資料請求・利用のお申込み', isSelected: true},
]

const LayoutMobile: FC<IProps> = ({ head, children }: IProps) => {
  const [toggle, setToggle] = React.useState(false);


  return (
    <React.Fragment>
      <HeadHtml />
      <header className='w-full fixed z-[999]'>
        <div className='bg-white shadow-md w-full relative'>
          <div className='container_app h-[80px] mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px]'>
            <div className='flex h-[100%] items-center justify-between'>
              <div>
                <img
                  src='/images/logo-color.png'
                  alt="logo"
                  className='object-contain'
                  width={200}
                  height={45}
                />
              </div>
              <div id="nav-icon4" className={`${toggle && 'open'} cursor-pointer`} onClick={() => setToggle(!toggle)}>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`${toggle ? 'visible opacity-100' : 'invisible opacity-0'} bg-white w-[100vw] h-[100vh] pt-[80px] fixed z-50 transition-[visibility] transition-[opacity]`}>
        <div className='container_app w-full h-full mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px]'>
          <div className='flex bg-main-orange h-[70px] mt-[30px] justify-center items-center rounded-md relative'>
            <div className='3xs:text-base text-lg text-white'>ご利用のお申込みはこちら</div>
            <div className='flex bg-white right-4 h-[24px] w-[24px] justify-center items-center rounded-full absolute'>
              <i className='transform rotate-45 -translate-x-0.5 border-main-orange border-t-[2px] border-r-[2px] p-[3px]'></i>
            </div>
          </div>
          <div className='bg-grey-background border-[1px] mt-[30px]'></div>
          {tabs.map((tab, index) => {
            if (index != tabs.length - 1)
              return (
                <Link key={tab.id} href={`#tab${tab.id}`} scroll={true} >
                  <a className='cursor-pointer group' onClick={() => setToggle(false)}>
                    <div className='flex justify-between relative pt-[20px]' >
                      <div className='text-[0.9rem] group-hover:text-main-orange'>{tab.title}</div>
                      <div className='flex w-[24px] h-[24px] justify-center items-center'>
                        <i className='transform rotate-45 -translate-x-0.5 border-[#B5B5B5] group-hover:border-main-orange border-t-[3px] border-r-[3px] p-[4px] rounded-[2px]'></i>
                      </div>
                    </div>
                    <div className='bg-grey-background border-[0.5px] mt-[15px]'/>
                  </a>
                </Link>
              );
            return <div key={tab.id}/>;
          })}
        </div>
      </div>
      {head}
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default LayoutMobile;