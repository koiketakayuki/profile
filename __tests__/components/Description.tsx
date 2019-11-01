import React from 'react';
import { render } from '@testing-library/react';
import Description from '../../components/Description';

describe('<Description />', () => {
  it('shows label', async () => {
    const { getByTestId } = render(
      <Description label="testLabel"></Description>
    );
    expect(getByTestId('label')).toHaveTextContent('testLabel');
  });

  it('shows description', async () => {
    const { getByTestId } = render(
      <Description label="label">testDescription</Description>
    );
    expect(getByTestId('description')).toHaveTextContent('testDescription');
  });
});
