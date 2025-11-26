import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic default header
export const Default: Story = {
  args: {},
};

// With a simple text logo
export const WithLogo: Story = {
  args: {
    logo: "Brand",
  },
};

// With navigation (no external data)
export const WithNavigation: Story = {
  args: {
    logo: "Brand",
    navigation: (
      <>
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">Pricing</a>
      </>
    ),
  },
};

// With actions (minimal inline elements)
export const WithActions: Story = {
  args: {
    logo: "Brand",
    actions: (
      <>
        <button type="button">Sign in</button>
        <button type="button">Sign up</button>
      </>
    ),
  },
};

// All sections together
export const Full: Story = {
  args: {
    logo: "Brand",
    navigation: (
      <>
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">Pricing</a>
      </>
    ),
    actions: (
      <>
        <button type="button">Sign in</button>
        <button type="button">Sign up</button>
      </>
    ),
  },
};

// Variants
export const Transparent: Story = {
  args: {
    logo: "Brand",
    variant: "transparent",
    showShadow: false,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: "linear-gradient(135deg, #6366f1, #22d3ee)",
          padding: 24,
          minHeight: 120,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Bordered: Story = {
  args: {
    logo: "Brand",
    variant: "bordered",
  },
};

// Sticky behavior
export const Sticky: Story = {
  args: {
    logo: "Brand",
    navigation: (
      <>
        <a href="#">Home</a>
        <a href="#">Docs</a>
        <a href="#">Pricing</a>
      </>
    ),
    sticky: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{ height: 300, overflow: "auto", border: "1px solid #e5e7eb" }}
      >
        <div style={{ height: 600 }}>
          <Story />
          <div style={{ height: 800 }} />
        </div>
      </div>
    ),
  ],
};

// Height options
export const SmallHeight: Story = {
  args: {
    logo: "Brand",
    height: "small",
  },
};

export const LargeHeight: Story = {
  args: {
    logo: "Brand",
    height: "large",
  },
};

// Shadow control
export const NoShadow: Story = {
  args: {
    logo: "Brand",
    showShadow: false,
  },
};
