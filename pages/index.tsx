import React, { FunctionComponent } from 'react';
import Page from '../components/Page';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import TimelineEvent from '../components/TimelineEvent';
import career from '../data/career';

const Index: FunctionComponent = () => (
  <Page>
    <Section label="名前">小池貴之</Section>
    <Section label="性別">男</Section>
    <Section label="生年月日">1991/9/7</Section>
    <Section label="経歴">
      <Timeline>
        {career.map((c, i) => (
          <TimelineEvent key={i} from={c.from} to={c.to}>
            {c.content}
          </TimelineEvent>
        ))}
      </Timeline>
    </Section>
  </Page>
);

export default Index;
