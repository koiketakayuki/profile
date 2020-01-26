import React, { FunctionComponent } from 'react';

interface TimelineProps {
  children: React.ReactNode;
}

const Timeline: FunctionComponent<TimelineProps> = props => {
  return (
    <>
      <div>{props.children}</div>
      <style jsx>{`
        div {
          display: table;
        }
      `}</style>
    </>
  );
};

export default Timeline;
