import React from 'react';
import Page from '../components/Page';
import { getReleases } from '../api/github';
import { NextPage } from 'next';
import Release from '../models/Release';
import ReleaseEntry from '../components/ReleaseEntry';
import DescriptionList from '../components/DescriptionList';
import Description from '../components/Description';

interface ReleasesProps {
  releases: Release[];
}

const Releases: NextPage<ReleasesProps> = ({ releases }) => {
  return (
    <Page title="リリース">
      <DescriptionList>
        <Description label="ソースコード">
          <a href="https://github.com/koiketakayuki/profile">GitHub</a>
        </Description>
        <Description label="ステータス">
          <a href="https://github.com/koiketakayuki/profile/actions?workflow=Deploy">
            <img src="https://github.com/koiketakayuki/profile/workflows/Deploy/badge.svg"></img>
          </a>
          <a href="https://github.com/koiketakayuki/profile/actions?workflow=Check%20commit">
            <img src="https://github.com/koiketakayuki/profile/workflows/Check%20commit/badge.svg"></img>
          </a>
          <a href="https://codecov.io/gh/koiketakayuki/profile">
            <img src="https://codecov.io/gh/koiketakayuki/profile/branch/master/graph/badge.svg" />
          </a>
          <style jsx>{`
            a:not(:first-child) {
              margin-left: 12px;
            }
          `}</style>
        </Description>
        Description
        {releases.map(r => (
          <ReleaseEntry
            key={r.id}
            release={r}
            onClick={(): void => {
              window.location.href = r.url;
            }}
          ></ReleaseEntry>
        ))}
      </DescriptionList>
    </Page>
  );
};

Releases.getInitialProps = async (): Promise<ReleasesProps> => {
  const releases: Release[] = await getReleases('koiketakayuki', 'profile');
  return { releases };
};

export default Releases;
