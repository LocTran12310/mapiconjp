import React from "react";
import Layout from '../../components/layouts/layoutMobile';
import HeadHtml from '../../components/layouts/common/HeadHtml';
import { BASE_CONSTANTS } from "../../constants/base.constants";
import SectionTitle from "../../components/common/SectionTitle";

const Law = () => {
  return (
    <React.Fragment>
      <HeadHtml title="MAPICON（マピコン）｜特定商取引法に基づく表示"/>
      <div className="law flex flex-col justify-start align-stretch pt-[80px]">
        <SectionTitle title="特定商取引法に基づく表記"/>
        <div className="container container_app mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px] pt-[25px] pb-[50px]">
          <h2 id="1-">販売業者</h2>
          <p>OMY株式会社</p>

          <h2 id="2-">運営統括責任者</h2>
          <p>代表取締役 石井 優一</p>

          <h2 id="3-">本社</h2>
          <p>〒330-0842</p>
          <p>埼玉県さいたま大宮区浅間町2丁目83番地3</p>
          
          <h2 id="4-">問い合わせ先</h2>
          <p>メール: support@mapicon.jp</p>
          
          <h2 id="5-">販売価格</h2>
          <p>料金プランに表示する価格</p>
          
          <h2>その他お客様の負担する費用</h2>
          <ul>
            <li>消費税</li>
            <li>インターネット利用のために必要となる通信料及び接続料</li>
          </ul>
          
          <h2 id="6-">お支払い方法 </h2>
          <p>銀行振込</p>
          
          <h2>お支払い時期</h2>
          <p>サービス利用申し込み時にお支払いいただきます。なお、契約終了日の前日までに所定の方法によりご解約いただかない限り、同条件での自動更新となりま す。 自動更新された場合には、更新日に全契約期間分の料金をお支払いいただくものとし、以後も同様とします。</p>
          
          <h2>サービスの引き渡し時期</h2>
          <p>お申し込み確定後、5営業日以内</p>
          
          <h2>返品・交換・キャンセル等</h2>
          <p>お支払い前の場合は、返品/キャンセルが可能です。電子商品としての性質上、お支払い後の場合は、返品/キャンセルは原則不可です。</p>
          
          <h2>無料体験(トライアル) </h2>
          <p>無料体験(トライアル)はフリープランのみご利用になれます。</p>
          
          <h2>解約条件</h2>
          <p>契約終了日前日までに、お支払い方法に応じて、下記にある当社所定の方法で解約を申し出ることにより、次回以降の契約更新を拒否することができます。 ご利用期間の途中において解約手続を行った場合でも、お支払い済みの料金は返金されません（日割り計算による返金もいたしかねます）。</p>
          <br/>
          
        </div>
        <hr/>
        <div className='container_app w-full mx-auto sm:px-[15px] md:px-[60px] lg:px-[100px] px-[150px] py-[17px]'>
          <div className="flex gap-x-[4px] text-[0.8rem]">
            <a className="home" href={`${BASE_CONSTANTS.BASE_URL}`}>TOP</a>
            {'>'}
            <a href='#' className='underline'>特定商取引法に基づく表示</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Law.Layout = Layout;
export default Law;