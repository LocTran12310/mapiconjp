/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../components/layouts';
import { BASE_CONSTANTS } from '../constants/base.constants';
const cards = [
  {
    title: "お試しプラン",
    initalCost: "0",
    monthlyCost: "0",
    subMonthlyCost: "無料",
    numOfInspectors: "1名",
    numOfBuildings: "2件",
    brief: "お試しでご利用したい方",
    bgColor: "bg-sub-green",
    txtColor: "text-sub-green"
  },
  {
    title: "ライトプラン",
    initalCost: "0",
    monthlyCost: "4,900",
    subMonthlyCost: "税込5,390円",
    numOfInspectors: "2名まで",
    numOfBuildings: "100件まで",
    brief: "個人事業主の方",
    bgColor: "bg-sub-blue",
    txtColor: "text-sub-blue"
  },
  {
    title: "ベーシックプラン",
    initalCost: "0",
    monthlyCost: "29,800",
    subMonthlyCost: "税込32,780円",
    numOfInspectors: "10名まで",
    numOfBuildings: "1,000件まで",
    brief: "従業員3名以上の企業",
    bgColor: "bg-sub-teal",
    txtColor: "text-sub-teal"
  },
  {
    title: "エンタープライズプラン",
    initalCost: "0",
    monthlyCost: "50,000",
    subMonthlyCost: "税込55,000円",
    numOfInspectors: "無制限",
    numOfBuildings: "無制限",
    brief: "消防設備等点検を全般的に効率したい企業",
    bgColor: "bg-main-orange",
    txtColor: "text-main-orange"
  },
];

const accordions = [
  {
    title: '登録と利用料は無料ですか？',
    content: '「お試しプラン」につきましては無料でご利用いただけます。ご利用の件数に応じて、有料プランへのご加入が必要となります。'
  },
  {
    title: '利用可能な消防設備を教えてください。',
    content: '消火器具、誘導灯及び誘導標識、自動火災報知設備の点検にご利用いただけます。順次新しい点検設備を追加します。'
  },
  {
    title: 'どんな報告書が作成できますか？',
    content: `現在下記の報告書をアプリから自動で作成いただけます。順次新しい報告書を追加します。
      <br/>【点検報告】様式1 点検結果報告書
      <br/>【点検報告】様式2 点検結果総括表
      <br/>【点検報告】様式3 点検者一覧表
      <br/>【点検表】様式1 消火器具 
      <br/>【点検表】様式11 自動火災報知設備	
      <br/>【点検表】様式16 誘導灯及び誘導標識`
  },
  {
    title: '有料プランへの加入手続きはどのようになりますか？',
    content: 'フォームより有料プランへの利用申込み後、有料アカウントの発行手続きを行います。'
  },
  {
    title: '利用できる端末を教えてください。',
    content: '現在ご利用できる端末はiOS（iPhone/iPad）になります。'
  }
];


const AccordionFAQ = ({ title, content }: typeof accordions[0]) => {
  const [isActive, setIsActive] = useState(false);
  const arrContents = content.split('<br/>')
  
  return (
    <div className='flex flex-col bg-grey-background rounded-md'>
      <div className='flex justify-between items-center px-[20px] py-[15px] cursor-pointer' onClick={() => {setIsActive(!isActive)}}>
        <div className='text-[0.9rem] font-bold'>{title}</div>
        <div className='flex bg-main-orange min-w-[30px] w-[30px] min-h-[30px] h-[30px] text-[1.25rem] text-white ml-[7.5px] justify-center items-center rounded-[3px] cursor-pointer'>{isActive ? 'ー' : '＋'}</div>
      </div>
      <div className={`${isActive ? 'max-h-[999px]': 'max-h-[0px]'} w-[100%] transition-[max-height] overflow-hidden`}>
        <div className='bg-sub-grey mx-[20px] border-[1px]'></div>
        <div className='px-[20px] py-[15px]'>
          {arrContents.map(e => {
            return (<div key={e} className='text-[0.9rem]'>{e}</div>);
          })}
        </div>
      </div>
    </div>
  );
}

const PlanCard = (props: {card: typeof cards[0]}) => {
  const card = props.card;
  return (
    <div className='flex flex-col bg-white min-w-[270px] max-w-[270px] items-center  rounded-lg overflow-hidden shadow-xl'>
      <div className={`flex ${card.bgColor} w-[100%] h-[70px] text-[1.15rem] text-white font-bold justify-center items-center`}>{card.title}</div>
      <div className='flex w-[100%] items-center px-[20px] py-[16px]'>
        <div className='w-[50%] font-semibold'>初期費用</div>
        <div className='flex items-center'>
            <span className={`text-[1.35rem] ${card.txtColor} font-bold px-[6px] leading-[20px]`}>{card.initalCost}</span>
            円
          </div>
      </div>
      <div className='w-[100%] border-[1px] border-dashed'></div>
      <div className='flex w-[100%] items-center px-[20px] py-[16px]'>
        <div className='w-[50%] font-semibold'>月額費用</div>
        <div className='flex flex-col w-[50%]'>
          <div className='flex text-[0.85rem] items-center '>
            <span className={`text-[1.35rem] ${card.txtColor} font-bold px-[6px] leading-[20px]`}>{card.monthlyCost}</span>
            円
          </div>
          <div className='text-[0.75rem] pt-[2px]'>（{card.subMonthlyCost}）</div>
        </div>
      </div>
      <div className='w-[100%] border-[1px] border-dashed'></div>
      <div className='flex w-[100%] items-center px-[20px] py-[16px]'>
        <div className='w-[50%] font-semibold'>点検者数</div>
        <div className='flex flex-col w-[50%]'>
          <div className='flex items-center px-[6px] leading-[20px]'>
            {card.numOfInspectors}
          </div>
        </div>
      </div>
      <div className='w-[100%] border-[1px] border-dashed'></div>
      <div className='flex w-[100%] items-center px-[20px] py-[16px]'>
        <div className='w-[50%] font-semibold'>防火対象物数</div>
        <div className='flex flex-col w-[50%]'>
          <div className='flex items-center px-[6px] leading-[20px]'>
            {card.numOfBuildings}
          </div>
        </div>
      </div>
      <div className='w-[100%] border-[1px] border-dashed'></div>
      <div className='flex flex-col w-[100%] justify-center items-center px-[20px] py-[20px]'>
        <div className='text-[0.9rem] font-bold'>こんな方におすすめ！</div>
        <div className={`text-[0.9rem] ${card.txtColor} text-center font-bold pt-[12px] leading-[18px]`}>{card.brief}</div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <section className='bg-main-teal w-[100%] '>
        <div id='tab3' className='container_app mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px]'>
          <div className='flex sm:h-[100%] sm:pt-[85px] md:h-[615px] h-[555px] justify-between'>
            <div className='flex flex-col w-[590px] h-[100%] py-[60px]'>
              <h1 className='text-[2rem] text-white font-black leading-9 sm:mt-[10px] mt-[105px]'>アプリで消防設備点検をらくらく管理</h1>
              <h2 className='text-[14.5px] text-white font-bold leading-[22px] mt-[20px]'>MAPICON（マピコン）は、消防設備点検を効率化するDXアプリです。MAPICONのアプリを消防設備点検で利用することで、点検報告書を自動作成します。</h2>
              <div className='flex md:flex-col mt-[45px] gap-y-[20px] gap-x-[20px]'>
                <Link href="/contact">
                  <a className='flex bg-main-orange md:max-w-[380px] md:w-full w-[380px] h-[70px] justify-center items-center rounded-md relative hover:opacity-[0.8]'>
                    <div className='3xs:text-base text-lg font-bold text-white'>ご利用のお申込みはこちら</div>
                    <div className='flex bg-white right-4 h-[24px] w-[24px] justify-center items-center rounded-full absolute'>
                      <i className='transform rotate-45 -translate-x-0.5 border-main-orange border-t-[2px] border-r-[2px] p-[3px]'></i>
                    </div>
                  </a>
                </Link>
                <a
                  href={BASE_CONSTANTS.APP_STORE}
                  target='_blank'
                  className='flex h-[70px] max-w-[220px] cursor-pointer'
                  rel="noreferrer"
                >
                  <img
                    src='/images/appstore.png'
                    alt='appstore'
                    className='object-fill w-full h-full'
                  />
                </a>
              </div>
              <div className='1xs:text-[.8625rem] text-sm text-white font-bold mt-[10px]'>※アプリのご利用には、事前のお申込みが必要となります。</div>
            </div>
            <div className='flex flex-col h-[100%] sm:hidden md:pr-0 lg:pr-[20px] pr-[100px] justify-end'>
              <img
                src='/images/header.png'
                alt='header'
                width={255}
                height={430}
                className='object-contain'
                />
            </div>
          </div>
        </div>
      </section>

      <section className='w-[100%]'>
        <div id='tab0' className='container_app mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px]'>
          <div className='sm:pb-[30px] py-[80px]'>
            <div className='flex h-[100%] justify-center align-center'>
                <div className='text-[1.78rem] font-black relative after:content-[""] z-10 after:bg-und-orange after:w-[100%] after:h-[35%] after:-z-10 after:bottom-0 after:left-0 after:absolute'>MAPICON3つの特徴</div>
            </div>
            <div className='flex h-[100%] md:flex-col justify-between gap-x-[40px]'>
              <div className='flex flex-col w-[100%] mt-[40px] justtify-center items-center'>
                <div className='flex relative items-center'>
                  <div className="text-[1.35rem] font-black">アプリで点検管理</div>
                  <div className='flex bg-main-orange w-[30px] h-[30px] text-white font-[800] justify-center items-center absolute -left-[40px] rounded-full'>1</div>
                </div>
                <div className='flex-auto w-[100%] h-[295px] mt-[25px] relative'>
                  <img
                    src="/images/feature1.png"
                    alt="feature1"
                    className='object-contain w-full h-full'
                    />
                </div>
                <div className='text-[0.85rem] mt-[35px]'>
                スマホアプリだけで消防設備点検を実施できます。特別 なITスキルは無くてもすぐにご利用いただけます。
                </div>
              </div>
              <div className='flex flex-col w-[100%] mt-[40px] justtify-center items-center'>
                <div className='flex relative items-center'>
                  <div className="text-[1.35rem] font-black">点検報告書の自動作成</div>
                  <div className='flex bg-main-orange w-[30px] h-[30px] text-white font-[800] justify-center items-center absolute -left-[40px] rounded-full'>2</div>
                </div>
                <div className='flex-auto w-[100%] h-[295px] mt-[25px] relative'>
                  <img
                    src="/images/feature2.png"
                    alt="feature2"
                    className='object-contain w-full h-full'
                    />
                </div>
                <div className='text-[0.85rem] mt-[35px]'>
                アプリの点検結果からPDF形式で点検報告書を自動作成します。そのまま消防署等へご提出いただけます。
                </div>
              </div>
              <div className='flex flex-col w-[100%] mt-[40px] justtify-center items-center'>
                <div className='flex relative items-center'>
                  <div className="text-[1.35rem] font-black">複数人での点検実施</div>
                  <div className='flex bg-main-orange w-[30px] h-[30px] text-white font-[800] justify-center items-center absolute -left-[40px] rounded-full'>3</div>
                </div>
                <div className='flex-auto w-[100%] h-[295px] mt-[25px] relative'>
                  <img
                    src="/images/feature3.png"
                    alt="feature3"
                    className='object-contain w-full h-full'
                    />
                </div>
                <div className='text-[0.85rem] mt-[35px]'>
                点検者をアカウントへ招待することで、消防設備点検を複数人で同時に実施いただけます。
                </div>
              </div>
            </div>
            <div className='flex flex-col h-[100%] justify-center align-center items-center mt-[80px]'>
              <div className='3xs:text-[1.15rem] sm:text-[1.4rem] text-[1.85rem] font-black'>報告書を作成するのが大変...</div>
              <div className='3xs:text-[1.25rem] sm:text-[1.5rem] text-[2rem] font-black leading-[30px]'>MAPICONで作業効率UP！</div>
            </div>
            <div className='flex sm:flex-col justify-center items-center mt-[50px] gap-x-[25px]'>
              <div className='flex max-h-[400px] relative'>
                <img
                  src="/images/before.png"
                  alt="before"
                  width={400}
                  height={400}
                  className='object-contain'
                />
              </div>
              <div className='sm:rotate-90 sm:-translate-y-[25px] relative'>
                <img
                  src="/images/arrow.png"
                  alt="arrow"
                  width={20}
                  height={100}
                  className='object-contain'
                />
              </div>
              <div className='flex max-h-[400px] sm:-translate-y-[50px] relative'>
                <img
                  src="/images/after.png"
                  alt="after"
                  width={400}
                  height={400}
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-grey-background w-[100%]'>
        <div id='tab1' className='container_app mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px]'>
          <div className='py-[80px]'>
            <div className='flex h-[100%] justify-center align-center'>
                <div className='text-[1.78rem] font-black relative after:content-[""] z-10 after:bg-und-orange after:w-[100%] after:h-[35%] after:-z-10 after:bottom-0 after:left-0 after:absolute'>料金プラン</div>
            </div>
            <div className='flex h-[100%] mt-[40px] pb-[40px] gap-x-[20px] lg:overflow-x-scroll z-100'>
              {cards.map((card) => {
                return (
                  <PlanCard key={card.title} card={card}/>
                );
              })}
            </div>
            <div className='text-[0.9rem]'>※現在ご利用いただけるお支払い方法は、銀行振込となります。</div>
          </div>
        </div>
      </section>

      <section className='bt-white w-[100%]'>
        <div id='tab2' className='container_app mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px]'>
          <div className='py-[80px]'>
            <div className='flex h-[100%] justify-center align-center'>
                <div className='text-[1.78rem] font-black relative after:content-[""] z-10 after:bg-und-orange after:w-[100%] after:h-[35%] after:-z-10 after:bottom-0 after:left-0 after:absolute'>よくあるご質問</div>
            </div>
            <div className='flex flex-col w-[100%] mt-[40px] gap-y-[20px]'>
              {accordions.map(({ title, content }, index) => (
                <AccordionFAQ title={title} content={content} key={`${title}_${index}`}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Home.Layout = Layout;
export default Home;
