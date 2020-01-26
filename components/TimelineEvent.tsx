import React, { FunctionComponent } from 'react';

interface TimelineEventProps {
  from: string;
  to?: string;
  children: React.ReactNode;
}

const TimelineEvent: FunctionComponent<TimelineEventProps> = props => {
  return (
    <>
      <div className="timeline-row">
        <div>{props.from}</div>
        <div className="hyphen">-</div>
        <div>{props.to}</div>
        <div className="content">{props.children}</div>
      </div>
      <style jsx>{`
        .timeline-row {
          display: table-row;
        }

        .timeline-row > * {
          display: table-cell;
          line-height: 2em;
        }

        .hyphen {
          min-width: 2em;
          text-align: center;
        }

        .content {
          padding-left: 3em;
        }
      `}</style>
    </>
  );
};

export default TimelineEvent;
