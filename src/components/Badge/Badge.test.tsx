import { render, screen } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
  it(`has a class of neutral if "neutral" variant is passed 
    AND it displays the label`, () => {
    render(<Badge label='to do' variant='neutral' />);

    const badgeLabel = screen.getByText(/to do/i);
    const badgeComponent = screen.getByLabelText('to do');
    expect(badgeLabel).toBeInTheDocument();
    expect(badgeComponent).toHaveClass(/neutral/);
  });
  it(`has a class of "positive" if positive variant is passed 
    AND it displays the label`, () => {
    render(<Badge label='finished' variant='positive' />);

    const badgeLabel = screen.getByText(/finished/i);
    const badgeComponent = screen.getByLabelText('finished');
    expect(badgeLabel).toBeInTheDocument();
    expect(badgeComponent).toHaveClass(/positive/);
  });
  it(`has a class of "negative" if negative variant is passed 
    AND it displays the label`, () => {
    render(<Badge label='warning' variant='negative' />);

    const badgeLabel = screen.getByText(/warning/i);
    const badgeComponent = screen.getByLabelText('warning');
    expect(badgeLabel).toBeInTheDocument();
    expect(badgeComponent).toHaveClass(/negative/);
  });
});
