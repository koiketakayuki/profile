import React from 'react';
import { NextPage } from 'next';
import Page from '../components/Page';
import Section from '../components/Section';
import Description from '../components/Description';
import DescriptionList from '../components/DescriptionList';

const JobOffer: NextPage = () => {
  return (
    <Page>
      <Section label="スキル">
        <DescriptionList>
          <Description label="フロントエンド">
            React,
            Vueでのフロントエンド開発がメインの仕事でした。フレームワークとしてはNext,
            Nuxtどちらも使用経験があります。
            仕事ではフレームワークのどこかでbabelでコンパイルされているものを使うことが多いですが、それ以前のPrototypeを使って書かれたコードやも保守可能です。
            typescriptを使うことが多かったです。
          </Description>
          <Description label="バックエンド">
            バックエンドを0から構築した経験があります。主に0からのプロジェクトでフロントエンドと一緒にバックエンドを作ることが多かったです。
            使用言語はphp, python, java, go, node,
            rubyなどです。学習する時間さえいただければどんな言語でも対応します。
          </Description>
          <Description label="ML">
            sklearnやtensorflowを使ったMLの学習コードを書くことができます。
            ランダムフォレスト、勾配ブースティングなど、アルゴリズムの仕組みを一通り理解しています。
          </Description>
          <Description label="環境構築">
            Dockerで開発環境・デプロイ環境を構築した経験があります。
            また、CIの環境をgitlab-ci, jenkins, circle-ci,
            travis-ciで構築した経験があります。
          </Description>
          <Description label="UX">
            サービス構築において、プログラムを書くだけではなく、人間の体験を設計しながらサービスを作れます。特にDX(デジタルトランスフォーメーション)化されたサービスの体験設計について知識があります。
          </Description>
          <Description label="言語">
            日常会話とプログラミング関連の事柄であれば英語で対応可能です。業務で英語を使用した経験があります。
          </Description>
          <Description label="デザイン">
            専門ではありませんが、Webデザインの基礎的な部分を理解しています。
            Figmaを使って自分で簡単なデザインをした経験があります。
          </Description>
        </DescriptionList>
      </Section>
      <Section label="職歴">
        <Description label="士業の検索サービスの開発">
          弁護士、税理士や社労士といったいわゆる「士業」の人たちを登録・検索できるサービスを作りました。担当部分は各士業ごとのデータのクローリング、バックエンドとフロントエンドです。使用技術はphp(クローリング、サーバーサイド)とVanillaJSでした。
        </Description>
        <Description label="求人の検索サービスの開発">
          求人サービスを作りました。担当部分は上と同様、初期データのクローリング、バックエンドとフロントエンドでした。使用技術も同じです。
        </Description>
        <Description label="クラウド業務システムの開発">
          Javaによるクラウド業務システムの開発を行いました。バックエンドの部分を担当し、コードの品質を担保するためにテストの自動化やコーディングルールを整備しました。
        </Description>
        <Description label="ペッパー君の受付システム構築">
          来訪する顧客のもつQRコードを読み取って案内するペッパー君の内部プログラムをpythonで書きました。ペッパー君の不具合に苦しめられました。
        </Description>
        <Description label="口コミシステムの保守、開発">
          口コミシステムに機能を追加したり、バグを改修したりしました。使用技術はphpです。グローバル環境に10,000行以上のコードがあったので、それを少しずつモジュールに分離しながら実装しました。
        </Description>
        <Description label="社内SFAの改修">
          既存のモノリスなSFAシステムを一人で改修しました。テーブルジョインがかなり複雑で保守が困難だったため、まずAPIを整備して、そこからAPIの内部をリファクタしました。使用技術はフロントがVue.jsでバックエンドがnodeのexpressです。このプロジェクトではCI環境や、Dockerでの環境構築も行いました。
        </Description>
        <Description label="トラッキングツールのフロントエンド構築">
          既存のシステムを完全に作り替えるプロジェクトのフロントエンドを担当しました。使用技術はVue+typescriptだったのですが、経験者がいなかったため教えながらの作業となりました。マネジメント業務も経験しました。
        </Description>
        <Description label="AIによる保険リコメンドシステム構築">
          フロントエンド部分と、MLエンジニアの書いたコードをAPIと接続する部分を実装しました。使用技術はフロントはNext.js+typescript,
          バックエンドはpythonのfastapiでした。内部がブラックボックスでは困るのでsklearnやtensorflow、その内部で使われているアルゴリズムを学びました。
        </Description>
        <Description label="社内情報管理ツールのフロントエンド構築">
          使用技術はVue.js+typescriptでした。elasticsearchと接続するAPIの部分も実装しています。
        </Description>
        <Description label="その他">
          Slackのbot構築や自動予約システムを作った経験があります。業務で使っている言語以外でも遊んでいたりするので、どんな言語でも比較的短時間で習得できると思います。
        </Description>
      </Section>
    </Page>
  );
};

export default JobOffer;
