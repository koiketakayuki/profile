import React, { FunctionComponent } from 'react';
import Page from '../layouts/Page';
import Description from '../components/Description';
import DescriptionList from '../components/DescriptionList';

const Index: FunctionComponent = () => (
  <Page title="プロフィール">
    <DescriptionList>
      <Description label="名前">小池貴之</Description>
      <Description label="性別">男</Description>
      <Description label="生年月日">1991/9/7</Description>
      <Description label="経歴">
        <ul>
          <li>2010年4月 京都大学理学部物理学科入学</li>
          <li>2014年3月 卒業</li>
          <li>
            2014年4月 京都大学大学院理学研究科 物理学第二教室宇宙線研究室入学
          </li>
          <li>2015年3月 大学院退学</li>
          <li>2015年4月 株式会社デザインワンジャパン入社</li>
          <li>2018年10月 退職</li>
          <li>2018年11月 株式会社ビービット入社</li>
          <li>2019年9月 退職</li>
        </ul>
        現在無職
      </Description>
      <Description label="スキル">
        <ul>
          <li>
            <a href="https://github.com/koiketakayuki/profile/blob/master/programming.md">
              プログラミング
            </a>
          </li>
          <li>英語 TOEIC 800+ (非日本語話者と働いた経験有))</li>
        </ul>
      </Description>
      <Description label="性格">
        <ul>
          <li>
            <a href="https://github.com/koiketakayuki/profile/blob/master/strength-finder.md">
              ストレングスファインダー
            </a>
          </li>
          <li>
            <a href="https://www.pokemon.co.jp/corporate/job/pokemoncenter/special/result/dragonite.html">
              ポケモン性格診断
            </a>
          </li>
        </ul>
      </Description>
    </DescriptionList>
  </Page>
);

export default Index;
