import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Game from '../Game';

describe('tests for the Game component', () => {

  test('clicking on the robot head icon toggles the cheating state', () => {
    const {getByTestId} = render(<Game />);

    const robotHeadIcon = getByTestId('robot-head-icon');

    fireEvent.click(robotHeadIcon);
    
    expect(robotHeadIcon).toHaveClass('cheating');
    
    fireEvent.click(robotHeadIcon);

    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
