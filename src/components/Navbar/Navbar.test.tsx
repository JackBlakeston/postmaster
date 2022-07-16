import { render, screen } from '@testing-library/react';
import { LOGO, NEW_POST } from '../../constants';

import Navbar from './Navbar';

describe('Navbar component', () => {

  it('Should render items correctly', () => {
    render(
      <Navbar/>
    );
    const logo = screen.getByAltText(LOGO);
    const button = screen.getByText(NEW_POST);
    expect(logo).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});