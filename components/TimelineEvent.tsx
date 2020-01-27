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
        <div className="time">{props.from}</div>
        <div className="hyphen">-</div>
        <div className="time">{props.to}</div>
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

        .time {
          white-space: nowrap;
        }

        .hyphen {
          min-width: 1em;
          text-align: center;
        }

        .content {
          padding-left: 1em;
        }
      `}</style>
    </>
  );
};

export default TimelineEvent;
