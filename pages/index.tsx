import React, { FunctionComponent } from 'react';
import Page from '../components/Page';
import Description from '../components/Description';
import DescriptionList from '../components/DescriptionList';
import Timeline from '../components/Timeline';
import TimelineEvent from '../components/TimelineEvent';
import career from '../data/career';

const Index: FunctionComponent = () => (
  <Page title="プロフィール">
    <DescriptionList>
      <Description label="名前">小池貴之</Description>
      <Description label="性別">男</Description>
      <Description label="生年月日">1991/9/7</Description>
      <Description label="経歴">
        <Timeline>
          {career.map((c, i) => (
            <TimelineEvent key={i} from={c.from} to={c.to}>
              {c.content}
            </TimelineEvent>
          ))}
        </Timeline>
      </Description>
      <Description label="スキル">
        <ul>
          <li>
            <a href="https://github.com/koiketakayuki/profile/blob/master/programming.md">
              プログラミング
            </a>
          </li>
          <li>英語 TOEIC 800+ (非日本語話者と働いた経験有)</li>
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
