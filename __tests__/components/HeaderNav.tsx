import React from 'react';
import { render } from '@testing-library/react';
import HeaderNav from '../../components/HeaderNav';

describe('<HeaderNav />', () => {
  it('shows children', async () => {
    const { getByRole } = render(<HeaderNav>testChildren</HeaderNav>);
    expect(getByRole('list')).toHaveTextContent('testChildren');
  });
});
