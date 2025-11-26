import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The default primary button with medium size
 */
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
};

/**
 * Secondary variant with a gray color scheme
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

/**
 * Outline variant with transparent background and border
 */
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'medium',
  },
};

/**
 * Small size button for compact interfaces
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'small',
  },
};

/**
 * Large size button for prominent actions
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large',
  },
};

/**
 * Button in a loading state with spinner animation
 */
export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: 'primary',
    isLoading: true,
  },
};

/**
 * Disabled button that cannot be clicked
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

/**
 * Full width button that spans its container
 */
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Small secondary button combination
 */
export const SmallSecondary: Story = {
  args: {
    children: 'Small Secondary',
    variant: 'secondary',
    size: 'small',
  },
};

/**
 * Large outline button combination
 */
export const LargeOutline: Story = {
  args: {
    children: 'Large Outline',
    variant: 'outline',
    size: 'large',
  },
};

/**
 * Secondary button in loading state
 */
export const SecondaryLoading: Story = {
  args: {
    children: 'Loading',
    variant: 'secondary',
    isLoading: true,
    size: 'medium',
  },
};

/**
 * Outline button in loading state
 */
export const OutlineLoading: Story = {
  args: {
    children: 'Loading',
    variant: 'outline',
    isLoading: true,
    size: 'medium',
  },
};

/**
 * Small button in loading state
 */
export const SmallLoading: Story = {
  args: {
    children: 'Loading',
    variant: 'primary',
    isLoading: true,
    size: 'small',
  },
};

/**
 * Large button in loading state
 */
export const LargeLoading: Story = {
  args: {
    children: 'Loading',
    variant: 'primary',
    isLoading: true,
    size: 'large',
  },
};

/**
 * Disabled secondary button
 */
export const DisabledSecondary: Story = {
  args: {
    children: 'Disabled',
    variant: 'secondary',
    disabled: true,
  },
};

/**
 * Disabled outline button
 */
export const DisabledOutline: Story = {
  args: {
    children: 'Disabled',
    variant: 'outline',
    disabled: true,
  },
};

/**
 * Full width secondary button
 */
export const FullWidthSecondary: Story = {
  args: {
    children: 'Full Width Secondary',
    variant: 'secondary',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Full width outline button
 */
export const FullWidthOutline: Story = {
  args: {
    children: 'Full Width Outline',
    variant: 'outline',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Button with long text content
 */
export const WithLongText: Story = {
  args: {
    children: 'This is a Button with Very Long Text Content',
    variant: 'primary',
    size: 'medium',
  },
};

/**
 * Button with emoji and text
 */
export const WithEmoji: Story = {
  args: {
    children: '🚀 Launch Application',
    variant: 'primary',
    size: 'large',
  },
};
