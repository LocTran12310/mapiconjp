import Link from "next/link";

const Footer = () => {
  return (
    <footer className='w-full bg-sub-greybackground'>
      <div className='container_app mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px] py-[35px] text-sm'>
        <div className='flex sm:flex-col h-[100%] sm:justify-start justify-between'>
          <div className='flex sm:flex-col gap-y-[15px] gap-x-[30px] text-sub-grey'>
            <a href='https://omyco.work/' target='_blank' rel="noreferrer" className='hover:underline'>会社概要</a>
            <Link href="/privacy" className='hover:underline'>プライバシーポリシー</Link>
            <Link href="/law" className='hover:underline'>特定商取引法に基づく表示</Link>
            <Link href="/contact" className='hover:underline'>お問い合わせ</Link>
          </div>
          <div className='w-[100%] bg-grey-background border-[1px] sm:block hidden mt-[40px] mb-[25px]'></div>
          <div className='text-sub-grey sm:text-center'>© 2022 OMY, Inc. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;