import React from 'react';
import { render } from '@testing-library/react';
import HeaderNavLink from '../../components/HeaderNavLink';

describe('<HeaderNavLink />', () => {
  it('shows children', () => {
    const { getByRole } = render(
      <HeaderNavLink href="test">testChildren</HeaderNavLink>
    );
    expect(getByRole('listitem')).toHaveTextContent('testChildren');
  });

  it('becomes link when not active', async () => {
    const { queryByRole } = render(
      <HeaderNavLink href="test" active={false}>
        testChildren
      </HeaderNavLink>
    );
    expect(queryByRole('link')).not.toBeNull();
  });

  it('becomes text when active', async () => {
    const { queryByRole } = render(
      <HeaderNavLink href="test" active>
        testChildren
      </HeaderNavLink>
    );
    expect(queryByRole('link')).toBeNull();
  });
});
