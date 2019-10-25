import React, { FunctionComponent } from 'react';
import Release from '../models/Release';
import dayjs from 'dayjs';

const ReleaseEntry: FunctionComponent<{ release: Release }> = ({ release }) => (
  <div
    className="entry"
    onClick={(): Window | null => window.open(release.url)}
  >
    <div className="card-content">
      <div className="title">
        <span>{dayjs(release.createdAt).format('YYYY/MM/DD')}</span>
        <span className="release-name">{release.name}</span>
      </div>
      <div className="description">{release.description}</div>
    </div>
    <style jsx>
      {`
        .entry {
          border: 1px solid #888888;
          padding: 16px;
          min-height: 64px;
          cursor: pointer;
        }
        .entry:not(:first-child) {
          margin-top: 6px;
        }
        .entry:hover {
          background: #dddddd;
        }
        .title {
          font-size: 1.25rem;
        }
        .release-name {
          margin-left: 12px;
          font-weight: bold;
        }
        .description {
          padding-top: 16px;
          white-space: pre-wrap;
        }
        a {
          text-decoration: none;
        }
      `}
    </style>
  </div>
);

export default ReleaseEntry;
