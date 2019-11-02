import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('<Header />', () => {
  it('shows page title', async () => {
    const { getByTitle } = render(
      <Header title="testTitle" currentRoute="" routes={[]}></Header>
    );
    expect(getByTitle('testTitle')).toHaveTextContent('testTitle');
  });

  it('shows navigation menues', async () => {
    const routes = [
      {
        route: '/test-route',
        label: 'testLabel1'
      },

      {
        route: '/test-route2',
        label: 'testLabel2'
      }
    ];
    const { getByRole } = render(
      <Header title="testTitle" currentRoute="" routes={routes}></Header>
    );
    expect(getByRole('navigation')).toHaveTextContent('testLabel1');
    expect(getByRole('navigation')).toHaveTextContent('testLabel2');
  });

  it('has active menu which corresponds to currentRoute', async () => {
    const routes = [
      {
        route: '/test-route1',
        label: 'testLabel1'
      },

      {
        route: '/test-route2',
        label: 'testLabel2'
      }
    ];
    const { getAllByRole } = render(
      <Header
        title="testTitle"
        currentRoute="/test-route1"
        routes={routes}
      ></Header>
    );

    const foundLinks = getAllByRole('link');
    expect(foundLinks).toHaveLength(1);
    expect(foundLinks[0]).toHaveTextContent('testLabel2');
  });
});
