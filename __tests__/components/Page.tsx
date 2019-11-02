import React from 'react';
import { render } from '@testing-library/react';
import Page from '../../components/Page';

describe('<Page />', () => {
  it('shows page title', async () => {
    const { getByRole } = render(<Page title="testTitle">testText</Page>);
    expect(getByRole('heading')).toHaveTextContent('testTitle');
  });

  it('shows content', async () => {
    const { getByRole } = render(<Page title="testTitle">testText</Page>);
    expect(getByRole('main')).toHaveTextContent('testTitle');
  });
});
