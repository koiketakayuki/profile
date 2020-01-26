import React from 'react';
import { render } from '@testing-library/react';
import Page from '../../components/Page';

describe('<Page />', () => {
  it('shows content', async () => {
    const { getByRole } = render(<Page>testText</Page>);
    expect(getByRole('main')).toHaveTextContent('testText');
  });
});
