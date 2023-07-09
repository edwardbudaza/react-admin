import {React} from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sidebar from './Sidebar';

describe('SideBar Component', () => {
  test('renders the Sidebar with correct menu items', () => {
    render(<Sidebar />);

    // Check if the Dashboard menu item is rendered
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    
    // Check if the Manage Team menu item is rendered
    expect(screen.getByText('Manage Team')).toBeInTheDocument();

    // Check if the Contact Information menu item is rendered
    expect(screen.getByText('Contact Information')).toBeInTheDocument();

    // Check if the Invoices Balances menu item is rendered
    expect(screen.getByText('Invoices Balances')).toBeInTheDocument();

    // ... Continue checking the presence of other menu items

    // Check if the Profile Form menu item is rendered
    expect(screen.getByText('Profile Form')).toBeInTheDocument();

    // Check if the Calendar menu item is rendered
    expect(screen.getByText('Calendar')).toBeInTheDocument();

    // Check if the FAQ Page menu item is rendered
    expect(screen.getByText('FAQ Page')).toBeInTheDocument();

    // ... Continue checking the presence of other menu items

    // Check if the Bar Chart menu item is rendered
    expect(screen.getByText('Bar Chart')).toBeInTheDocument();

    // Check if the Pie Chart menu item is rendered
    expect(screen.getByText('Pie Chart')).toBeInTheDocument();

    // Check if the Line Chart menu item is rendered
    expect(screen.getByText('Line Chart')).toBeInTheDocument();

    // Check if the Geography Chart menu item is rendered
    expect(screen.getByText('Geography Chart')).toBeInTheDocument();
  });

  test('toggles the Sidebar collapse state on icon click', () => {
    render(<Sidebar />);

    const menuIcon = screen.getByLabelText('menu');

    // Initially, the Sidebar is not collapsed
    expect(screen.getByText('ADMIN')).toBeInTheDocument();

    // Click the menu icon to collapse the Sidebar
    userEvent.click(menuIcon);

    // After collapsing, the Sidebar title should not be visible
    expect(screen.queryByText('ADMIN')).toBeNull();

    // Click the menu icon again to expand the Sidebar
    userEvent.click(menuIcon);

    // After expanding, the Sidebar title should be visible again
    expect(screen.getByText('ADMIN')).toBeInTheDocument();
  });
});
