import React, { FunctionComponent } from 'react';
import Page from '../components/Page';

const Schedule: FunctionComponent = () => (
  <Page>
    <iframe
      src="https://calendar.google.com/calendar/embed?src=koiketakayuki.dev%40gmail.com&ctz=Asia%2FTokyo"
      width="800"
      height="600"
      scrolling="no"
    ></iframe>
  </Page>
);

export default Schedule;
