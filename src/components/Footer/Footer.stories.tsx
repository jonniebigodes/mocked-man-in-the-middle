import type { Meta, StoryObj } from "@storybook/react-vite";

import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "padded",
    chromatic: {
      viewports: [320, 640, 768, 1024],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Base: Story = {};

export const Inverse: Story = {
  args: {
    background: "dark",
  },
};

export const LightTheme: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [320, 768, 1024, 1280] },
  },
};

export const DarkTheme: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [320, 768, 1024, 1280] },
  },
};

export const MobileLight: Story = {
  args: {
    background: "light",
  },
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    chromatic: { viewports: [320] },
  },
};

export const MobileDark: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    viewport: { defaultViewport: "mobile1" },
    chromatic: { viewports: [320] },
  },
};

export const TabletLight: Story = {
  args: {
    background: "light",
  },
  parameters: {
    viewport: { defaultViewport: "tablet" },
    chromatic: { viewports: [768] },
  },
};

export const TabletDark: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    viewport: { defaultViewport: "tablet" },
    chromatic: { viewports: [768] },
  },
};

export const DesktopLight: Story = {
  args: {
    background: "light",
  },
  parameters: {
    viewport: { defaultViewport: "desktop" },
    chromatic: { viewports: [1024] },
  },
};

export const DesktopDark: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    viewport: { defaultViewport: "desktop" },
    chromatic: { viewports: [1024] },
  },
};

export const WideScreenLight: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [1536] },
  },
};

export const WideScreenDark: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [1536] },
  },
};

export const SmallMobileLight: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [375] },
  },
};

export const SmallMobileDark: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [375] },
  },
};

export const LargeMobileLight: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [414] },
  },
};

export const LargeMobileDark: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [414] },
  },
};

export const CompactTabletLight: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [640] },
  },
};

export const CompactTabletDark: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [640] },
  },
};

export const StandardDesktopLight: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [1280] },
  },
};

export const StandardDesktopDark: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [1280] },
  },
};

export const UltraWideLight: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [1920] },
  },
};

export const UltraWideDark: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [1920] },
  },
};

export const WithCustomBackground: Story = {
  args: {
    background: "light",
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithDarkCustomBackground: Story = {
  args: {
    background: "dark",
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#0a0a0a", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const NarrowViewport: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [280] },
  },
};

export const MediumViewport: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [800] },
  },
};

export const LargeViewport: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [1440] },
  },
};

export const ExtraLargeViewport: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [2560] },
  },
};

export const PortraitMobile: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [390] },
  },
};

export const LandscapeMobile: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [844] },
  },
};

export const IPadPortrait: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [820] },
  },
};

export const IPadLandscape: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [1180] },
  },
};

export const LaptopScreen: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [1366] },
  },
};

export const FullHDScreen: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [1920] },
  },
};

export const FourKScreen: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [1200] },
  },
};

export const MinimalMobile: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [320] },
    layout: "fullscreen",
  },
};

export const ExpandedTablet: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [768] },
    layout: "fullscreen",
  },
};

export const WideDesktop: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [1600] },
    layout: "fullscreen",
  },
};

export const CompactLayout: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [480] },
  },
};

export const StandardLayout: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [1024] },
  },
};

export const ExpandedLayout: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [1728] },
  },
};

export const MaximizedLayout: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [2048] },
  },
};

export const MobileLightFullscreen: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [360] },
    layout: "fullscreen",
  },
};

export const TabletDarkFullscreen: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [768] },
    layout: "fullscreen",
  },
};

export const DesktopLightFullscreen: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [1280] },
    layout: "fullscreen",
  },
};

export const DesktopDarkFullscreen: Story = {
  args: {
    background: "dark",
  },
  parameters: {
    backgrounds: { default: "dark" },
    chromatic: { viewports: [1280] },
    layout: "fullscreen",
  },
};

export const ResponsiveTest: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [320, 768, 1024, 1440] },
  },
};

export const ThemeComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Footer background="light" links="a" />
      <Footer background="dark" links="a" />
    </div>
  ),
};

export const SideByComparison: Story = {
  render: () => (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
    >
      <Footer background="light" links="a" />
      <Footer background="dark" links="a" />
    </div>
  ),
  parameters: {
    chromatic: { viewports: [1440] },
  },
};

export const AllViewportsLight: Story = {
  args: {
    background: "light",
  },
  parameters: {
    chromatic: { viewports: [320, 414, 768, 1024, 1280, 1920] },
  },
};
