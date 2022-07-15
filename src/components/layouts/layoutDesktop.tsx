/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script'
import React, { FC } from 'react';

export interface IProps {
  children: React.ReactElement;
  head?: React.ReactElement;
}

const GTM_ID = 'GTM-55Z4P9G';

const initalTabs = [
  {id: 0, title: 'MAPICONの特徴', isSelected: false},
  {id: 1, title: '料金プラン', isSelected: false},
  {id: 2, title: 'よくあるご質問', isSelected: false},
  {id: 3, title: '資料請求・利用のお申込み', isSelected: true},
]

const LayoutDesktop: FC<IProps> = ({ head, children }: IProps) => {
  const [tabs, setTabs] = React.useState(initalTabs);
  const [navbar, setNavbar] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    setTabs(tabs);
    changeNavbar()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeNavbar)
  }, []);

  const onSetTab = (id: number) => {
    tabs.map((tab) => {
      tab.isSelected = false;
    });

    tabs[id].isSelected = true;
    setTabs([...tabs]);
  };

  const changeNavbar = () => {
    if (window.scrollY >= 1 || window.matchMedia('(max-width: 1024px)').matches) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>MAPICON（マピコン）｜消防設備点検アプリ</title>
        <meta name="description" content="MAPICON（マピコン）は、消防設備点検を効率化するDXアプリです。MAPICONのアプリを消防設備点検で利用することで、点検報告書を自動作成します。今すぐアプリをダウンロード！"/>
        <link rel="canonical" href="https://mapicon.jp/"/>

        <meta property="og:description" content="MAPICON（マピコン）は、消防設備点検を効率化するDXアプリです。MAPICONのアプリを消防設備点検で利用することで、点検報告書を自動作成します。今すぐアプリをダウンロード！"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://mapicon.jp/"/>
        <meta property="og:image" content="https://mapicon-dev.web.app/images/ogp.png"/>
        <meta property="og:site_name" content="MAPICON"/>
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
      </Script>
      <header className='w-full fixed z-[999]'>
        <div className={`${navbar && 'bg-white shadow-md'} w-full relative`}>
          <div className='container_app h-[80px] mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px]'>
            <div className='flex h-[100%] items-center justify-between'>
              <div>
                <img
                  src={`/images/${navbar ? 'logo-color.png' : 'logo-white.png'}`}
                  alt="logo"
                  className='object-contain'
                  width={200}
                  height={45}
                />
              </div>
              <div className='flex gap-x-[20px] md:hidden'>
                {tabs.map((tab) => {
                  return (
                    <Link key={tab.id} href={`#tab${tab.id}`} scroll={false}>
                      <div className={`${tab.isSelected ? 'bg-main-orange text-white px-[25px] py-[12px]' : navbar ? 'text-main-grey py-[10px]' : 'text-white py-[10px]'} text-sm font-[500] rounded cursor-pointer`} onClick={() => onSetTab(tab.id)}>{tab.title}</div></Link>
                  );
                })}
              </div>
              <div id="nav-icon4" className={`${toggle && 'open'} md:block hidden cursor-pointer`} onClick={() => setToggle(!toggle)}>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`${toggle ? 'md:block hidden' : 'hidden'} bg-white w-[100vw] h-[100vh] pt-[80px] fixed z-50 transition duration-300`}>
        <div className='container_app w-full h-full sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px]'>
          <div className='flex bg-main-orange h-[70px] mt-[30px] justify-center items-center rounded-md relative'>
            <div className='text-lg text-white'>ご利用のお申込みはこちら</div>
            <div className='flex bg-white right-4 h-[24px] w-[24px] justify-center items-center rounded-full absolute'>
              <i className='transform rotate-45 -translate-x-0.5 border-main-orange border-t-[2px] border-r-[2px] p-[3px]'></i>
            </div>
          </div>
          <div className='bg-grey-background border-[1px] mt-[30px]'></div>
          {tabs.map((tab, index) => {
            if (index != tabs.length - 1)
              return (
                <Link key={tab.id} href={`#tab${tab.id}`} scroll={false} >
                  <a>
                    <div className='flex justify-between relative pt-[20px] cursor-pointer group' onClick={() => setToggle(false)}>
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
      <footer className='w-full bg-sub-greybackground'>
        <div className='container_app mx-auto my-auto sm:px-[15px] md:px-[100px] xl:px-[150px] px-[150px] py-[35px] text-sm'>
          <div className='flex sm:flex-col h-[100%] sm:justify-start justify-between'>
            <div className='flex sm:flex-col gap-y-[15px] gap-x-[30px] text-sub-grey'>
              <div>会社概要</div>
              <div>プライバシーポリシー</div>
              <div>お問い合わせ</div>
            </div>
            <div className='w-[100%] bg-grey-background border-[1px] sm:block hidden mt-[40px] mb-[25px]'></div>
            <div className='text-sub-grey sm:text-center'>© 2022 OMY, Inc. All Rights Reserved.</div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default LayoutDesktop;