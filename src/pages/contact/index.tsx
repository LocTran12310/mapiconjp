import React from "react";
import Layout from '../../components/layouts/layoutMobile';
import HeadHtml from '../../components/layouts/common/HeadHtml';
import TextInputField from "../../components/common/TextInputField";
import SectionTitle from "../../components/common/SectionTitle";
import Breadcrumb, { IBreadcrumb } from "../../components/common/Breadcrumb";
import Link from "next/link";

const breadcrumbs = [
  { title: "お問い合わせ" } 
] as IBreadcrumb[];

const Contact = () => {
  const submitForm = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log("Submit")
  };

  return (
    <React.Fragment>
      <HeadHtml title="MAPICON（マピコン）｜お問い合わせ"/>
      <div className="pt-[80px]">
        <SectionTitle title="お問い合わせ"/>
        <div className="container_app flex justify-center w-full mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px] pt-[60px] pb-[60px]">
          <form id="formContact" action="GET" onSubmit={(e) => {e.preventDefault()}} className="w-full max-w-[560px]">
            <div>下記フォームに必要事項を入力し、「送信する」ボタンを押してください。</div>

            <TextInputField
              label="貴社名"
              name="companyName"
              placeholder="例：株式会社MAPICON"
              required
            />

            <div className="mt-[20px]">
              <div className="font-bold label-field">
                <label htmlFor="firstName">お名前</label>
                <span className="bg-red-rq text-sm text-white px-[5px] py-[3px] ml-[5px] rounded-sm">必須</span>
              </div>
              <div className="flex gap-x-[18px]">
                <input
                  id="firstName"
                  name="firstName"
                  className="w-full border-[2px] border-input-grey rounded-[0.3rem] px-[15px] py-[10.5px] mt-[10px] focus:outline-main-teal"
                  type={"text"}
                  placeholder="姓"
                  required
                />
                <input
                  name="lastName"
                  className="w-full border-[2px] border-input-grey rounded-[0.3rem] px-[15px] py-[10.5px] mt-[10px] focus:outline-main-teal"
                  type={"text"}
                  placeholder="名"
                  required
                />
              </div>
            </div>

            <TextInputField
              label="メールアドレス"
              name="email"
              type="email"
              placeholder="例：example@mapicon.jp"
              required
            />

            <TextInputField
              label="電話番号"
              name="phone"
              type="tel"
              placeholder="例：03-1234-5678"
              required
            />

            <div className="mt-[20px]">
              <div className="font-bold label-field">
                <label htmlFor="inquiryContentRequired">お問い合わせ内容</label>
                <span className="bg-red-rq text-sm text-white px-[5px] py-[3px] ml-[5px] rounded-sm">必須</span>
              </div>
              <div className="relative">
                <select 
                  id="inquiryContentRequired"
                  name="inquiryContentRequired"
                  className="
                    form-select
                    bg-white bg-clip-padding bg-no-repeat
                    w-full
                    border-[2px] border-input-grey rounded-[0.3rem]
                    px-[15px] py-[12px]
                    mt-[10px]
                    focus:outline-main-teal
                    transition
                    ease-in-out
                    appearance-none
                  "
                  required
                  >
                  <option value="">選択してください</option>
                  <option value="導入について">導入について</option>
                  <option value="機能について">機能について</option>
                  <option value="料金・お見積りについて">料金・お見積りについて</option>
                  <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                  </select>
              </div>
            </div>

            <div className="mt-[20px]">
              <div className="font-bold label-field">
                <label htmlFor="inquiryDetails">お問い合わせ詳細</label>
                {/* <span className="bg-red-rq text-sm text-white px-[5px] py-[3px] ml-[5px] rounded-sm">必須</span> */}
              </div>
              <textarea
                id="inquiryDetails"
                name="inquiryDetails"
                className="w-full h-[150px] border-[2px] border-input-grey rounded-[0.3rem] px-[15px] py-[10.5px] mr-[15px] mt-[10px] focus:outline-main-teal"
                placeholder="お問い合わせ内容の詳細をご記入ください。"
              />
            </div>

            <div className="text-[0.85rem] text-center mt-[30px]">
              <Link href="/privacy"><a className="text-sub-blue">プライバシーポリシー</a></Link>
              に同意の上、送信をしてください。
            </div>
            <div className="text-center">
              <input
                className="bg-main-orange text-white text-center font-bold mt-[20px] px-[70px] h-[50px] rounded-sm cursor-pointer"
                type={"submit"}
                value="送信する"
                onClick={(e) => {submitForm(e)}}
              />
            </div>
          </form>
        </div>
        <hr/>
        <Breadcrumb items={breadcrumbs}/>
      </div>
    </React.Fragment>
  );
}

Contact.Layout = Layout;
export default Contact;