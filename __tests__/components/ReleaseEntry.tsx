import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReleaseEntry from '../../components/ReleaseEntry';
import Release from '../../models/Release';

describe('<ReleaseEntry />', () => {
  test('shows release title', () => {
    const release: Release = {
      id: 'testId',
      name: 'testName',
      url: 'testUrl',
      description: 'testDescription',
      createdAt: '2019-01-01T00:00:00Z'
    };
    const { getByTitle } = render(
      <ReleaseEntry release={release}></ReleaseEntry>
    );
    expect(getByTitle('testName')).toHaveTextContent('testName');
  });

  test('shows release description', () => {
    const release: Release = {
      id: 'testId',
      name: 'testName',
      url: 'testUrl',
      description: 'testDescription',
      createdAt: '2019-01-01T00:00:00Z'
    };
    const { getByTestId } = render(
      <ReleaseEntry release={release}></ReleaseEntry>
    );
    expect(getByTestId('description')).toHaveTextContent('testDescription');
  });

  test('shows formatted relase date', () => {
    const release: Release = {
      id: 'testId',
      name: 'testName',
      url: 'testUrl',
      description: 'testDescription',
      createdAt: '2019-01-01T00:00:00Z'
    };
    const { getByTestId } = render(
      <ReleaseEntry release={release}></ReleaseEntry>
    );
    expect(getByTestId('date')).toHaveTextContent('2019/01/01');
  });

  test('execute onClick when clicked', () => {
    const onClick = jest.fn();
    const release: Release = {
      id: 'testId',
      name: 'testName',
      url: 'testUrl',
      description: 'testDescription',
      createdAt: '2019-01-01T00:00:00Z'
    };
    const { container } = render(
      <ReleaseEntry release={release} onClick={onClick}></ReleaseEntry>
    );

    fireEvent.click(container.firstChild as Element);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
