import React from 'react';
import { render } from '@testing-library/react';
import Heading1 from '../../components/Heading1';

describe('<Heading1 />', () => {
  it('shows text', async () => {
    const { getByRole } = render(<Heading1>testText</Heading1>);
    expect(getByRole('heading')).toHaveTextContent('testText');
  });
});
