import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import PostNote from './PostNote';

describe('PostNote render', () => {
  test('render with props', () => {
    const component = render(
      <PostNote postText="Test dummie" username="nfsedg" date="10/10/10" />,
    );

    component.getByText('Test dummie');
  });
});
