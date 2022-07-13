import Image from 'next/image';
import Layout from '../components/layouts';

const Home = () => {
  return (
    <div>
      <div className='bg-main-teal w-[100%] '>
        <div className='container_app mx-auto px-[150px]'>
          <div className='flex h-[475px] justify-between'>
            <div className='flex flex-col w-[590px] h-[100%] py-[60px]'>
              <div className='text-[2rem] text-white font-black leading-9 mt-[30px]'>アプリで消防設備点検をらくらく管理</div>
              <div className='text-[14.5px] text-white leading-[22px] mt-[20px]'>MAPICON（マビコン）は、消防設備点検を効率化するDXアプリです。MAPICONのアプリを消防設備点検で利用することで、点検報告書を自動作成します。</div>
              <div className='flex flex-col w-[380px] gap-y-[20px]'>
                <div className='flex bg-main-orange h-[70px] mt-[45px] justify-center items-center rounded-md relative'>
                  <div className='text-lg text-white'>ご利用のお申込みはこちら</div>
                  <div className='flex bg-white right-4 h-[24px] w-[24px] justify-center items-center rounded-full absolute'>
                    <i className='transform rotate-45 -translate-x-0.5 border-main-orange border-t-[2px] border-r-[2px] p-[3px]'></i>
                  </div>
                </div>
                <div className='flex h-[60px] gap-x-[20px]'>
                  <div className='flex-auto relative'>
                    <Image
                      src="/images/appstore.png"
                      alt="appstore"
                      objectFit="contain"
                      layout='fill'
                    />
                  </div>
                  <div className='flex-auto relative'>
                    <Image
                      src="/images/playstore.png"
                      alt="playstore"
                      objectFit="contain"
                      layout='fill'
                    />
                  </div>
                </div>
              </div>
              <div className='text-sm text-white mt-[10px]'>※アプリのご利用には、事前のお申込みが必要となります。</div>
            </div>
            <div className='flex flex-col h-[100%] pr-[100px] md:pr-0 justify-end'>
              <Image
                src="/images/header-app.png"
                alt="header_app"
                objectFit="contain"
                width={255}
                height={430}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className='container_app mx-auto px-[150px]'>
          <div className='flex h-[100%] justify-center align-center'>
              <div className='text-[2rem] font-black mt-[80px] relative after:content-[""] after:bg-main-teal after:w-[100%] after:h-[35%] after:-z-10 after:bottom-0 after:left-0 after:absolute'>MAPICON3つの特徴</div>
          </div>
          <div className='flex h-[100%] justify-between mt-[40px]'>
            <div className='flex flex-col justtify-center items-center gap-x-[40px]'>
              <div className='flex relative items-center'>
                <div className="text-[1.35rem] font-black">アプリで点検管理</div>
                <div className='flex bg-main-orange w-[30px] h-[30px] text-white font-[800] justify-center items-center absolute -left-[50px] rounded-full'>1</div>
              </div>
              <div className='mt-[25px]'>
                <Image
                  src="/images/feature1.png"
                  alt="feature1"
                  className='h-[295px]'
                  objectFit="scale-down"
                  width={"100%"}
                  height={295}
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <div>TITLE</div>
              <div>IMAGE</div>
            </div>
            <div className='flex flex-col'>
              <div>TITLE</div>
              <div>IMAGE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Home.Layout = Layout
export default Home
