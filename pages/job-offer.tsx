import React from 'react';
import { NextPage } from 'next';
import Page from '../components/Page';
import DescriptionList from '../components/DescriptionList';
import Description from '../components/Description';

const JobOffer: NextPage = () => {
  return (
    <Page title="仕事について">
      <DescriptionList>
        <div>
          <div>現在求職中です。</div>
          <div>
            やりたい仕事がはっきり決まっているわけではないので、Web業界、エンジニアに限らず色々な分野の仕事を探しています。
          </div>
          <div>
            質問、仕事の依頼などございましたら、
            <a href="mailto:koiketakayuki.dev@gmail.com">
              koiketakayuki.dev@gmail.com
            </a>
            までご気軽にご連絡ください
          </div>
        </div>
        <Description label="仕事に求める事">
          <ul>
            <li>スキルが高められる</li>
            <li>自分の力で成果にコミット出来ていると実感できる</li>
            <li>社会に貢献できる</li>
          </ul>
        </Description>
        <Description label="チームメンバーに求める事">
          <ul>
            <li>他人を尊重できる</li>
            <li>ビジョンを理解している</li>
            <li>本気で成果を出そうと思っている</li>
            <li>自分で考えて仕事ができる</li>
          </ul>
        </Description>
        <Description label="会社に求める事">
          <ul>
            <li>ビジョンファースト</li>
            <li>会社の文化作りに力を入れている</li>
          </ul>
        </Description>
        <Description label="スキル的に興味がある">
          <ul>
            <li>英語、中国語、その他外国語</li>
            <li>インフラ</li>
            <li>データ分析/ML/AI</li>
            <li>NLP</li>
          </ul>
        </Description>
      </DescriptionList>
    </Page>
  );
};

export default JobOffer;
