import React from 'react';
import { render } from '@testing-library/react';
import Description from '../../components/Section';

describe('<Section />', () => {
  it('shows label', async () => {
    const { getByTestId } = render(
      <Description label="testLabel"></Description>
    );
    expect(getByTestId('label')).toHaveTextContent('testLabel');
  });

  it('shows content', async () => {
    const { getByTestId } = render(
      <Description label="label">testContent</Description>
    );
    expect(getByTestId('content')).toHaveTextContent('testContent');
  });
});
