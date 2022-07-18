import { BASE_CONSTANTS } from "../../../constants/base.constants";

const Footer = () => {
  return (
    <footer className='w-full bg-sub-greybackground'>
      <div className='container_app mx-auto my-auto sm:px-[15px] md:px-[100px] xl:px-[150px] px-[150px] py-[35px] text-sm'>
        <div className='flex sm:flex-col h-[100%] sm:justify-start justify-between'>
          <div className='flex sm:flex-col gap-y-[15px] gap-x-[30px] text-sub-grey'>
            <a href='https://omyco.work/' target='_blank' rel="noreferrer" className='hover:text-main-orange'>会社概要</a>
            <a href={`${BASE_CONSTANTS.BASE_URL}/privacy`} target='_blank' rel="noreferrer" className='hover:text-main-orange'>プライバシーポリシー</a>
            <a href={BASE_CONSTANTS.APPLY_LINK} target='_blank' rel="noreferrer" className='hover:text-main-orange'>お問い合わせ</a>
          </div>
          <div className='w-[100%] bg-grey-background border-[1px] sm:block hidden mt-[40px] mb-[25px]'></div>
          <div className='text-sub-grey sm:text-center'>© 2022 OMY, Inc. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;