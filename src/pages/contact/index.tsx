import React from "react";
import Layout from '../../components/layouts/layoutMobile';
import HeadHtml from '../../components/layouts/common/HeadHtml';
import { BASE_CONSTANTS } from "../../constants/base.constants";
import TextInputField from "../../components/common/TextInputField";
import SectionTitle from "../../components/common/SectionTitle";
import SelectBoxField from "../../components/common/SelectBoxField";
import Breadcrumb from "../../components/common/Breadcrumb";

const selectItems = [
  {
    label: "SELECT 1",
    value: "1",
  },
  {
    label: "SELECT 2",
    value: "2",
  },
];

const breadcrumbs = [
  { title: "お問い合わせ" }
];


const Contact = () => {
  const [ inquiryContentSelect, setInquiryContentSelect ] = React.useState("選択してください");
  const onSelectInquiry = (
    e: React.MouseEvent<HTMLLabelElement> | React.KeyboardEvent<HTMLLabelElement>,
    item: {label: string; value: string}
  ) => {
    setInquiryContentSelect(item.label);
  };

  return (
    <React.Fragment>
      <HeadHtml title="MAPICON（マピコン）｜お問い合わせ"/>
      <div className="pt-[80px]">
        <SectionTitle title="お問い合わせ"/>
        <div className="container_app flex justify-center w-full mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px] pt-[60px] pb-[60px]">
          <div className="w-full max-w-[560px]">
            <div>下記フォームに必要事項を入力し、「送信する」ボタンを押してください。</div>
            
            <TextInputField
              label="貴社名"
              value=""
              placeholder="例：株式会社MAPICON"
              required
              // errorText="ERROR"
            />

            <div className="mt-[20px]">
              <div className="font-bold label-field">
                <label htmlFor="お名前">お名前</label>
                <span className="bg-red-rq text-sm text-white px-[5px] py-[3px] ml-[5px] rounded-sm">必須</span>
              </div>
              <div className="flex gap-x-[18px]">
                <input
                  id="お名前"
                  className="w-full border-[2px] border-input-grey rounded-[0.3rem] px-[15px] py-[10.5px] mt-[10px] focus:outline-main-teal"
                  type={"text"}
                  placeholder="姓"
                />
                <input 
                  className="w-full border-[2px] border-input-grey rounded-[0.3rem] px-[15px] py-[10.5px] mt-[10px] focus:outline-main-teal"
                  type={"text"}
                  placeholder="名"
                />
              </div>
            </div>

            <TextInputField
              label="メールアドレス"
              value=""
              placeholder="例：example@mapicon.jp"
              required
            />

            <TextInputField
              label="電話番号"
              value=""
              placeholder="例：03-1234-5678"
              required
            />

            {/* <div className="mt-[20px]">
              <div className="font-bold label-field">
                <label htmlFor="お問い合わせ内容必須">お問い合わせ内容必須</label>
                <span className="bg-red-rq text-sm text-white px-[5px] py-[3px] ml-[5px] rounded-sm">必須</span>
              </div>
              <div className="relative">
                <select 
                  id="お問い合わせ内容必須"
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
                  >
                  <option value="" disabled selected>選択してください</option>
                  <option>SELECT 1</option>
                  <option>SELECT 2</option>
                  <option>SELECT 3</option>
                </select>
              </div>
            </div> */}

            <SelectBoxField 
              id="お問い合わせ内容必須"
              state={inquiryContentSelect}
              items={selectItems}
              onSelect={onSelectInquiry}
              required
            />

            <div className="mt-[20px]">
              <div className="font-bold label-field">
                <label htmlFor="お問い合わせ詳細">お問い合わせ詳細</label>
                {/* <span className="bg-red-rq text-sm text-white px-[5px] py-[3px] ml-[5px] rounded-sm">必須</span> */}
              </div>
              <textarea
                id="お問い合わせ詳細"
                className="w-full h-[150px] border-[2px] border-input-grey rounded-[0.3rem] px-[15px] py-[10.5px] mr-[15px] mt-[10px] focus:outline-main-teal"
                placeholder="お問い合わせ内容の詳細をご記入ください。"
              />
            </div>

            <div className="text-[0.85rem] text-center mt-[30px]">
              <a className="text-sub-blue">プライバシーポリシー</a>
              に同意の上、送信をしてください。
            </div>
            <div className="text-center">
              <input
                className="bg-main-orange text-white text-center font-bold mt-[20px] px-[70px] h-[50px] rounded-sm cursor-pointer"
                type={"button"} 
                value="送信する" 
              />
            </div>
          </div>
        </div>
        <hr/>
        <Breadcrumb items={breadcrumbs}/>
      </div>
    </React.Fragment>
  );
};

Contact.Layout = Layout;
export default Contact;