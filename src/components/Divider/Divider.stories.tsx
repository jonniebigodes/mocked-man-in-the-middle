import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories 1-10: Variants, thickness, color, spacing
export const Default: Story = {
  args: {},
};

export const Dashed: Story = {
  args: {
    variant: "dashed",
  },
};

export const Dotted: Story = {
  args: {
    variant: "dotted",
  },
};

export const Thickness2: Story = {
  args: {
    thickness: 2,
  },
};

export const Thickness8: Story = {
  args: {
    thickness: 8,
  },
};

export const RedColor: Story = {
  args: {
    color: "#ef4444",
  },
};

export const BlueColor: Story = {
  args: {
    color: "#3b82f6",
  },
};

export const NoSpacing: Story = {
  args: {
    spacing: "none",
  },
};

export const SmallSpacing: Story = {
  args: {
    spacing: "small",
  },
};

export const LargeSpacing: Story = {
  args: {
    spacing: "large",
  },
};

// Stories 11-15: Label and alignment
export const WithCenterLabel: Story = {
  args: {
    label: "OR",
    labelAlign: "center",
  },
};

export const LabelLeftAligned: Story = {
  args: {
    label: "Continue",
    labelAlign: "left",
  },
};

export const LabelRightAligned: Story = {
  args: {
    label: "OR",
    labelAlign: "right",
  },
};

export const LongLabel: Story = {
  args: {
    label: "This is a long label to demonstrate spacing and alignment",
    labelAlign: "center",
    spacing: "large",
  },
};

export const WithCustomLabelComponent: Story = {
  args: {
    label: (
      <span
        style={{
          backgroundColor: "#fef3c7",
          color: "#92400e",
          padding: "2px 8px",
          borderRadius: "999px",
          border: "1px solid #f59e0b",
        }}
      >
        Badge
      </span>
    ),
    labelAlign: "center",
  },
};

// Stories 16-18: Vertical orientation
export const VerticalDefault: Story = {
  args: {
    orientation: "vertical",
    fullSize: false,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "120px", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
};

export const VerticalDashedThick: Story = {
  args: {
    orientation: "vertical",
    variant: "dashed",
    thickness: 4,
    fullSize: true,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "200px", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
};

export const VerticalWithLabelCenter: Story = {
  args: {
    orientation: "vertical",
    label: "AND",
    labelAlign: "center",
    fullSize: false,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "160px", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
};

// Stories 19-20: Size control and combos
export const NotFullWidth: Story = {
  args: {
    fullSize: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomCombo: Story = {
  args: {
    variant: "dashed",
    thickness: 3,
    color: "#10b981",
    spacing: "large",
    label: "Section",
    labelAlign: "center",
  },
};
