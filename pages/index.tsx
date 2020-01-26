import React, { FunctionComponent } from 'react';
import Page from '../components/Page';
import Description from '../components/Description';
import DescriptionList from '../components/DescriptionList';
import Timeline from '../components/Timeline';
import TimelineEvent from '../components/TimelineEvent';
import career from '../data/career';

const Index: FunctionComponent = () => (
  <Page>
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
    </DescriptionList>
  </Page>
);

export default Index;
