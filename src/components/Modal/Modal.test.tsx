import { render, screen } from '@testing-library/react';

import Modal from './Modal';

const mockFn = jest.fn(() => {return;});

describe('Modal component', () => {

  it('Should render children correctly', () => {
    render(
      <Modal isVisible={true} setIsModalVisible={mockFn}>
        <p>TEST</p>
      </Modal>
    );

    const modalContent = screen.getByText('TEST');
    expect(modalContent).toBeInTheDocument();
  });
});