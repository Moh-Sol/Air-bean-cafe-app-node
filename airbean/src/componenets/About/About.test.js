


import { render, getByTestId, fireEvent } from '@testing-library/react';
import About from './About'

it('h1 visar Vårt kaffe ', () => {
    const { container } = render(<About />);

    const h1Value = getByTestId(container, 'h1-cafe')

    expect(h1Value.textContent).toBe('Vårt kaffe')

});


