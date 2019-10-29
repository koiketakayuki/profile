import React from 'react';
import { render } from '@testing-library/react';
import DescriptionList from '../../components/DescriptionList';

describe('<DescriptionList />', () => {
  it('shows children', async () => {
    const { getByRole } = render(
      <DescriptionList>testChildren</DescriptionList>
    );
    expect(getByRole('list')).toHaveTextContent('testChildren');
  });
});
