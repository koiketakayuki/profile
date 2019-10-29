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
          <a
            href="https://github.com/koiketakayuki/profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Description>
      </DescriptionList>
      {releases.map(r => (
        <ReleaseEntry key={r.id} release={r}></ReleaseEntry>
      ))}
    </Page>
  );
};

Releases.getInitialProps = async (): Promise<ReleasesProps> => {
  const releases: Release[] = await getReleases('koiketakayuki', 'profile');
  return { releases };
};

export default Releases;
