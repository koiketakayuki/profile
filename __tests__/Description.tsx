import React from 'react';
import { render } from '@testing-library/react';
import Description from '../components/Description';

describe('<Description />', () => {
  it('shows label', async () => {
    const { getByRole } = render(<Description label="testLabel"></Description>);
    expect(getByRole('label')).toHaveTextContent('testLabel');
  });

  it('shows description', async () => {
    const { getByRole } = render(
      <Description label="label">testDescription</Description>
    );
    expect(getByRole('description')).toHaveTextContent('testDescription');
  });
});
