import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'unstyled'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample icons for adornments
const SearchIcon = () => <span>🔍</span>;
const EmailIcon = () => <span>📧</span>;
const LockIcon = () => <span>🔒</span>;
const UserIcon = () => <span>👤</span>;
const PhoneIcon = () => <span>📞</span>;
const CalendarIcon = () => <span>📅</span>;
const ClockIcon = () => <span>🕐</span>;
const DollarIcon = () => <span>💲</span>;
const ClearButton = () => (
  <button
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontSize: '14px',
    }}
  >
    ✕
  </button>
);

// Story 1: Default Input
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/enter text/i);

    // Type text into input
    await userEvent.type(input, 'Hello World');
    await expect(input).toHaveValue('Hello World');
    await expect(args.onChange).toHaveBeenCalled();
  },
};

// Story 2: With Label
export const WithLabel: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'John Doe',
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/john doe/i);

    // Focus the input
    await userEvent.click(input);
    await expect(input).toHaveFocus();

    // Type text
    await userEvent.type(input, 'Jane Smith');
    await expect(input).toHaveValue('Jane Smith');
    await expect(args.onChange).toHaveBeenCalled();
  },
};

// Story 3: With Helper Text
export const WithHelperText: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email with anyone else.",
    onChange: fn(),
  },
};

// Story 4: Small Size
export const SmallSize: Story = {
  args: {
    size: 'small',
    label: 'Small Input',
    placeholder: 'Small size',
    onChange: fn(),
  },
};

// Story 5: Medium Size (Default)
export const MediumSize: Story = {
  args: {
    size: 'medium',
    label: 'Medium Input',
    placeholder: 'Medium size',
    onChange: fn(),
  },
};

// Story 6: Large Size
export const LargeSize: Story = {
  args: {
    size: 'large',
    label: 'Large Input',
    placeholder: 'Large size',
    onChange: fn(),
  },
};

// Story 7: Outlined Variant (Default)
export const OutlinedVariant: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined Input',
    placeholder: 'Type here...',
    onChange: fn(),
  },
};

// Story 8: Filled Variant
export const FilledVariant: Story = {
  args: {
    variant: 'filled',
    label: 'Filled Input',
    placeholder: 'Type here...',
    onChange: fn(),
  },
};

// Story 9: Unstyled Variant
export const UnstyledVariant: Story = {
  args: {
    variant: 'unstyled',
    label: 'Unstyled Input',
    placeholder: 'Type here...',
    onChange: fn(),
  },
};

// Story 10: With Error State
export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    hasError: true,
    helperText: 'Please enter a valid email address',
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/you@example.com/i);
    const helperText = canvas.getByText(/please enter a valid email/i);

    // Verify error helper text is visible
    await expect(helperText).toBeVisible();

    // Type text - should still work despite error state
    await userEvent.type(input, 'invalid-email');
    await expect(input).toHaveValue('invalid-email');
    await expect(args.onChange).toHaveBeenCalled();
  },
};

// Story 11: Disabled State
export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this',
    disabled: true,
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/cannot edit this/i);

    // Verify input is disabled
    await expect(input).toBeDisabled();

    // Try to type - should not work
    await userEvent.type(input, 'test');
    await expect(input).toHaveValue('');
    await expect(args.onChange).not.toHaveBeenCalled();
  },
};

// Story 12: Full Width
export const FullWidth: Story = {
  args: {
    label: 'Full Width Input',
    placeholder: 'This input takes full width',
    fullWidth: true,
    onChange: fn(),
  },
  parameters: {
    layout: 'padded',
  },
};

// Story 13: With Start Adornment
export const WithStartAdornment: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    startAdornment: <SearchIcon />,
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/search/i);

    // Type search query
    await userEvent.type(input, 'react components');
    await expect(input).toHaveValue('react components');
    await expect(args.onChange).toHaveBeenCalled();

    // Clear input
    await userEvent.clear(input);
    await expect(input).toHaveValue('');
  },
};

// Story 14: With End Adornment
export const WithEndAdornment: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    endAdornment: <ClearButton />,
    onChange: fn(),
  },
};

// Story 15: With Both Adornments
export const WithBothAdornments: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    startAdornment: <SearchIcon />,
    endAdornment: <ClearButton />,
    onChange: fn(),
  },
};

// Story 16: Email Input
export const EmailInput: Story = {
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'you@example.com',
    startAdornment: <EmailIcon />,
    helperText: 'Enter a valid email address',
    onChange: fn(),
  },
};

// Story 17: Password Input
export const PasswordInput: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    startAdornment: <LockIcon />,
    helperText: 'Must be at least 8 characters',
    onChange: fn(),
  },
};

// Story 18: Phone Number Input
export const PhoneInput: Story = {
  args: {
    type: 'tel',
    label: 'Phone Number',
    placeholder: '+1 (555) 123-4567',
    startAdornment: <PhoneIcon />,
    onChange: fn(),
  },
};

// Story 19: Date Input
export const DateInput: Story = {
  args: {
    type: 'date',
    label: 'Date of Birth',
    startAdornment: <CalendarIcon />,
    onChange: fn(),
  },
};

// Story 20: Time Input
export const TimeInput: Story = {
  args: {
    type: 'time',
    label: 'Appointment Time',
    startAdornment: <ClockIcon />,
    onChange: fn(),
  },
};
