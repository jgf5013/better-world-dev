import { render } from '@testing-library/react';

import Flashcard from './flashcard';

describe('Flashcard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Flashcard />);
    expect(baseElement).toBeTruthy();
  });
});
