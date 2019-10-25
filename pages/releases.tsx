import React from 'react';
import Page from '../layouts/Page';
import { getReleases } from '../api/github';
import { NextPage } from 'next';
import Release from '../models/Release';
import ReleaseEntry from '../components/ReleaseEntry';

interface ReleasesProps {
  releases: Release[];
}

const Releases: NextPage<ReleasesProps> = ({ releases }) => {
  return (
    <Page title="リリース">
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
