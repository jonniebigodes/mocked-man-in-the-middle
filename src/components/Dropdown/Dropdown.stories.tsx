import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample icons for stories
const EditIcon = () => <span>✏️</span>;
const DeleteIcon = () => <span>🗑️</span>;
const SettingsIcon = () => <span>⚙️</span>;
const UserIcon = () => <span>👤</span>;
const LogoutIcon = () => <span>🚪</span>;
const SaveIcon = () => <span>💾</span>;
const ShareIcon = () => <span>🔗</span>;
const DownloadIcon = () => <span>⬇️</span>;
const UploadIcon = () => <span>⬆️</span>;
const CopyIcon = () => <span>📋</span>;
const CutIcon = () => <span>✂️</span>;
const PasteIcon = () => <span>📌</span>;
const PrintIcon = () => <span>🖨️</span>;
const SearchIcon = () => <span>🔍</span>;
const FilterIcon = () => <span>🔽</span>;
const SortIcon = () => <span>↕️</span>;
const RefreshIcon = () => <span>🔄</span>;
const HomeIcon = () => <span>🏠</span>;
const HelpIcon = () => <span>❓</span>;
const InfoIcon = () => <span>ℹ️</span>;

// Story 1: Default Dropdown
export const Default: Story = {
  args: {
    trigger: <button>Open Menu</button>,
    items: [
      {
        id: "1",
        label: "Edit",
        icon: <EditIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Delete",
        icon: <DeleteIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Settings",
        icon: <SettingsIcon />,
        onClick: fn(),
      },
    ],
  },
  /* play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /open menu/i });
    const editOnClick = args.items[0].onClick;
    const deleteOnClick = args.items[1].onClick;

    // Open dropdown by clicking trigger
    await userEvent.click(trigger);

    // Verify menu is visible
    const menu = canvas.getByRole("menu");
    await expect(menu).toBeVisible();

    // Click on Edit item
    const editItem = canvas.getByRole("menuitem", { name: /edit/i });
    await userEvent.click(editItem);
    await expect(editOnClick).toHaveBeenCalled();

    // Menu should close after clicking item
    await expect(menu).not.toBeVisible();

    // Reopen dropdown
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu")).toBeVisible();

    // Click on Delete item
    const deleteItem = canvas.getByRole("menuitem", { name: /delete/i });
    await userEvent.click(deleteItem);
    await expect(deleteOnClick).toHaveBeenCalled();
  }, */
};

// Story 2: With Dividers
export const WithDividers: Story = {
  args: {
    trigger: <button>Actions</button>,
    items: [
      {
        id: "1",
        label: "Edit",
        icon: <EditIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Copy",
        icon: <CopyIcon />,
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "3",
        label: "Delete",
        icon: <DeleteIcon />,
        onClick: fn(),
      },
    ],
  },
  /* play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /actions/i });
    const editOnClick = args.items[0].onClick;
    const deleteOnClick = args.items[3].onClick;

    // Open dropdown
    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu");
    await expect(menu).toBeVisible();

    // Verify divider is present (as separator)
    const divider = canvas.getByRole("separator");
    await expect(divider).toBeVisible();

    // Click items before and after divider
    await userEvent.click(canvas.getByRole("menuitem", { name: /edit/i }));
    await expect(editOnClick).toHaveBeenCalled();

    // Reopen and test item after divider
    await userEvent.click(trigger);
    await userEvent.click(canvas.getByRole("menuitem", { name: /delete/i }));
    await expect(deleteOnClick).toHaveBeenCalled();
  }, */
};

// Story 3: Bottom Right Position
export const BottomRight: Story = {
  args: {
    trigger: <button>Menu ▼</button>,
    position: "bottom-right",
    items: [
      {
        id: "1",
        label: "Profile",
        icon: <UserIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Settings",
        icon: <SettingsIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Logout",
        icon: <LogoutIcon />,
        onClick: fn(),
      },
    ],
  },
  /* play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /menu ▼/i });

    // Open dropdown
    await userEvent.click(trigger);
    const menu = canvas.getByRole("menu");
    await expect(menu).toBeVisible();

    // Test Escape key closes menu
    await userEvent.keyboard("{Escape}");
    await expect(menu).not.toBeVisible();

    // Reopen and test clicking outside closes menu
    await userEvent.click(trigger);
    await expect(canvas.getByRole("menu")).toBeVisible();
  }, */
};

// Story 4: Top Left Position
export const TopLeft: Story = {
  args: {
    trigger: <button>Menu ▲</button>,
    position: "top-left",
    items: [
      {
        id: "1",
        label: "Save",
        icon: <SaveIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Download",
        icon: <DownloadIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Share",
        icon: <ShareIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 5: Top Right Position
export const TopRight: Story = {
  args: {
    trigger: <button>Options ▲</button>,
    position: "top-right",
    items: [
      {
        id: "1",
        label: "Upload",
        icon: <UploadIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Download",
        icon: <DownloadIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 6: Disabled Dropdown
export const Disabled: Story = {
  args: {
    trigger: <button>Disabled Menu</button>,
    disabled: true,
    items: [
      {
        id: "1",
        label: "Edit",
        onClick: fn(),
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /disabled menu/i });

    // Try to click disabled trigger - menu should not open
    await userEvent.click(trigger);

    // Menu should not be visible
    const menu = canvas.queryByRole("menu");
    await expect(menu).not.toBeInTheDocument();
  },
};

// Story 7: With Disabled Items
export const WithDisabledItems: Story = {
  args: {
    trigger: <button>Menu</button>,
    items: [
      {
        id: "1",
        label: "Edit",
        icon: <EditIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Delete (disabled)",
        icon: <DeleteIcon />,
        disabled: true,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Settings",
        icon: <SettingsIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 8: Custom Menu Width
export const CustomWidth: Story = {
  args: {
    trigger: <button>Wide Menu</button>,
    menuWidth: "300px",
    items: [
      {
        id: "1",
        label: "This is a wider menu item with more text",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Another long menu item description",
        onClick: fn(),
      },
    ],
  },
};

// Story 9: User Profile Menu
export const UserProfileMenu: Story = {
  args: {
    trigger: (
      <button style={{ borderRadius: "50%", width: "40px", height: "40px" }}>
        👤
      </button>
    ),
    position: "bottom-right",
    items: [
      {
        id: "1",
        label: "My Profile",
        icon: <UserIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Settings",
        icon: <SettingsIcon />,
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "3",
        label: "Help",
        icon: <HelpIcon />,
        onClick: fn(),
      },
      {
        id: "4",
        label: "Logout",
        icon: <LogoutIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 10: File Operations Menu
export const FileOperations: Story = {
  args: {
    trigger: <button>File</button>,
    items: [
      {
        id: "1",
        label: "Save",
        icon: <SaveIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Download",
        icon: <DownloadIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Upload",
        icon: <UploadIcon />,
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "Print",
        icon: <PrintIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 11: Edit Menu
export const EditMenu: Story = {
  args: {
    trigger: <button>Edit</button>,
    items: [
      {
        id: "1",
        label: "Cut",
        icon: <CutIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Copy",
        icon: <CopyIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Paste",
        icon: <PasteIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 12: Long Menu
export const LongMenu: Story = {
  args: {
    trigger: <button>Many Items</button>,
    items: Array.from({ length: 15 }, (_, i) => ({
      id: `item-${i}`,
      label: `Menu Item ${i + 1}`,
      onClick: fn(),
    })),
  },
};

// Story 13: Icon Only Items
export const IconOnly: Story = {
  args: {
    trigger: <button>🎨</button>,
    items: [
      {
        id: "1",
        label: "🎨",
        onClick: fn(),
      },
      {
        id: "2",
        label: "🖼️",
        onClick: fn(),
      },
      {
        id: "3",
        label: "📸",
        onClick: fn(),
      },
    ],
  },
};

// Story 14: Text Only Items
export const TextOnly: Story = {
  args: {
    trigger: <button>Simple Menu</button>,
    items: [
      {
        id: "1",
        label: "First Item",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Second Item",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Third Item",
        onClick: fn(),
      },
    ],
  },
};

// Story 15: With Custom Trigger
export const CustomTrigger: Story = {
  args: {
    trigger: (
      <div
        style={{
          padding: "12px 24px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Click Me
      </div>
    ),
    items: [
      {
        id: "1",
        label: "Option 1",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Option 2",
        onClick: fn(),
      },
    ],
  },
};

// Story 16: Sorting Menu
export const SortingMenu: Story = {
  args: {
    trigger: <button>Sort By</button>,
    items: [
      {
        id: "1",
        label: "Name (A-Z)",
        icon: <SortIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Name (Z-A)",
        icon: <SortIcon />,
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "3",
        label: "Date (Newest)",
        icon: <SortIcon />,
        onClick: fn(),
      },
      {
        id: "4",
        label: "Date (Oldest)",
        icon: <SortIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 17: Filter Menu
export const FilterMenu: Story = {
  args: {
    trigger: <button>Filters</button>,
    items: [
      {
        id: "1",
        label: "Show All",
        icon: <FilterIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Active Only",
        icon: <FilterIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Inactive Only",
        icon: <FilterIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 18: Search Actions
export const SearchActions: Story = {
  args: {
    trigger: <button>Search Options</button>,
    items: [
      {
        id: "1",
        label: "Search in Title",
        icon: <SearchIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Search in Content",
        icon: <SearchIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Search Everywhere",
        icon: <SearchIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 19: Share Options
export const ShareOptions: Story = {
  args: {
    trigger: <button>Share</button>,
    items: [
      {
        id: "1",
        label: "Copy Link",
        icon: <ShareIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Email",
        icon: <ShareIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Social Media",
        icon: <ShareIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 20: Refresh Options
export const RefreshOptions: Story = {
  args: {
    trigger: <button>Refresh</button>,
    items: [
      {
        id: "1",
        label: "Refresh Page",
        icon: <RefreshIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Refresh Data",
        icon: <RefreshIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Clear Cache & Refresh",
        icon: <RefreshIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 21: Navigation Menu
export const NavigationMenu: Story = {
  args: {
    trigger: <button>Navigate</button>,
    items: [
      {
        id: "1",
        label: "Home",
        icon: <HomeIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Profile",
        icon: <UserIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Settings",
        icon: <SettingsIcon />,
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "Help",
        icon: <HelpIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 22: Context Menu Style
export const ContextMenu: Story = {
  args: {
    trigger: (
      <div
        style={{ padding: "20px", background: "#f0f0f0", cursor: "pointer" }}
      >
        Right-click style menu
      </div>
    ),
    items: [
      {
        id: "1",
        label: "Open",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Open in New Tab",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "3",
        label: "Copy",
        onClick: fn(),
      },
      {
        id: "4",
        label: "Paste",
        onClick: fn(),
      },
      {
        id: "divider-2",
        isDivider: true,
      },
      {
        id: "5",
        label: "Inspect",
        onClick: fn(),
      },
    ],
  },
};

// Story 23: Single Item Menu
export const SingleItem: Story = {
  args: {
    trigger: <button>Single Action</button>,
    items: [
      {
        id: "1",
        label: "The Only Option",
        icon: <InfoIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 24: Nested Style Menu (Simulated)
export const NestedStyle: Story = {
  args: {
    trigger: <button>View</button>,
    items: [
      {
        id: "1",
        label: "Zoom In",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Zoom Out",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Actual Size",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "Full Screen",
        onClick: fn(),
      },
    ],
  },
};

// Story 25: Danger Actions
export const DangerActions: Story = {
  args: {
    trigger: (
      <button
        style={{
          background: "#ef4444",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Danger
      </button>
    ),
    items: [
      {
        id: "1",
        label: "Delete Item",
        icon: <DeleteIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Delete All",
        icon: <DeleteIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Reset to Default",
        onClick: fn(),
      },
    ],
  },
};

// Story 26: Multiple Dividers
export const MultipleDividers: Story = {
  args: {
    trigger: <button>Organized Menu</button>,
    items: [
      {
        id: "1",
        label: "New",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Open",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "3",
        label: "Save",
        onClick: fn(),
      },
      {
        id: "4",
        label: "Save As",
        onClick: fn(),
      },
      {
        id: "divider-2",
        isDivider: true,
      },
      {
        id: "5",
        label: "Exit",
        onClick: fn(),
      },
    ],
  },
};

// Story 27: Minimal Menu
export const Minimal: Story = {
  args: {
    trigger: (
      <button
        style={{
          background: "transparent",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        ⋮
      </button>
    ),
    position: "bottom-right",
    items: [
      {
        id: "1",
        label: "Edit",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Delete",
        onClick: fn(),
      },
    ],
  },
};

// Story 28: All Items Disabled
export const AllDisabled: Story = {
  args: {
    trigger: <button>All Disabled</button>,
    items: [
      {
        id: "1",
        label: "Option 1",
        disabled: true,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Option 2",
        disabled: true,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Option 3",
        disabled: true,
        onClick: fn(),
      },
    ],
  },
};

// Story 29: Mixed Disabled State
export const MixedDisabled: Story = {
  args: {
    trigger: <button>Mixed States</button>,
    items: [
      {
        id: "1",
        label: "Enabled Option",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Disabled Option",
        disabled: true,
        onClick: fn(),
      },
      {
        id: "3",
        label: "Another Enabled",
        onClick: fn(),
      },
      {
        id: "4",
        label: "Another Disabled",
        disabled: true,
        onClick: fn(),
      },
    ],
  },
};

// Story 30: Dropdown with Numbers
export const WithNumbers: Story = {
  args: {
    trigger: <button>Select Number</button>,
    items: [
      {
        id: "1",
        label: "1 - First",
        onClick: fn(),
      },
      {
        id: "2",
        label: "2 - Second",
        onClick: fn(),
      },
      {
        id: "3",
        label: "3 - Third",
        onClick: fn(),
      },
      {
        id: "4",
        label: "4 - Fourth",
        onClick: fn(),
      },
      {
        id: "5",
        label: "5 - Fifth",
        onClick: fn(),
      },
    ],
  },
};

// Story 31: Theme Switcher
export const ThemeSwitcher: Story = {
  args: {
    trigger: <button>Theme</button>,
    items: [
      {
        id: "1",
        label: "Light Mode ☀️",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Dark Mode 🌙",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Auto 🔄",
        onClick: fn(),
      },
    ],
  },
};

// Story 32: Language Selector
export const LanguageSelector: Story = {
  args: {
    trigger: <button>🌐 Language</button>,
    items: [
      {
        id: "1",
        label: "English",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Español",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Français",
        onClick: fn(),
      },
      {
        id: "4",
        label: "Deutsch",
        onClick: fn(),
      },
      {
        id: "5",
        label: "日本語",
        onClick: fn(),
      },
    ],
  },
};

// Story 33: Priority Levels
export const PriorityLevels: Story = {
  args: {
    trigger: <button>Set Priority</button>,
    items: [
      {
        id: "1",
        label: "High Priority 🔴",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Medium Priority 🟡",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Low Priority 🟢",
        onClick: fn(),
      },
    ],
  },
};

// Story 34: Status Menu
export const StatusMenu: Story = {
  args: {
    trigger: <button>Change Status</button>,
    items: [
      {
        id: "1",
        label: "Available 🟢",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Away 🟡",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Busy 🔴",
        onClick: fn(),
      },
      {
        id: "4",
        label: "Offline ⚫",
        onClick: fn(),
      },
    ],
  },
};

// Story 35: Export Formats
export const ExportFormats: Story = {
  args: {
    trigger: <button>Export As...</button>,
    items: [
      {
        id: "1",
        label: "PDF",
        icon: <DownloadIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Excel",
        icon: <DownloadIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "CSV",
        icon: <DownloadIcon />,
        onClick: fn(),
      },
      {
        id: "4",
        label: "JSON",
        icon: <DownloadIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 36: Import Options
export const ImportOptions: Story = {
  args: {
    trigger: <button>Import From...</button>,
    items: [
      {
        id: "1",
        label: "File",
        icon: <UploadIcon />,
        onClick: fn(),
      },
      {
        id: "2",
        label: "Cloud Storage",
        icon: <UploadIcon />,
        onClick: fn(),
      },
      {
        id: "3",
        label: "URL",
        icon: <UploadIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 37: Report Menu
export const ReportMenu: Story = {
  args: {
    trigger: <button>Reports</button>,
    items: [
      {
        id: "1",
        label: "Daily Report",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Weekly Report",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Monthly Report",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "Custom Report",
        onClick: fn(),
      },
    ],
  },
};

// Story 38: Quick Actions
export const QuickActions: Story = {
  args: {
    trigger: <button>⚡ Quick Actions</button>,
    position: "bottom-right",
    items: [
      {
        id: "1",
        label: "New Document",
        onClick: fn(),
      },
      {
        id: "2",
        label: "New Folder",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Upload Files",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "Scan QR Code",
        onClick: fn(),
      },
    ],
  },
};

// Story 39: Notification Actions
export const NotificationActions: Story = {
  args: {
    trigger: <button>🔔 Notifications</button>,
    items: [
      {
        id: "1",
        label: "Mark All as Read",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Clear All",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "3",
        label: "Notification Settings",
        icon: <SettingsIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 40: Bookmark Actions
export const BookmarkActions: Story = {
  args: {
    trigger: <button>⭐ Bookmarks</button>,
    items: [
      {
        id: "1",
        label: "View All Bookmarks",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Add Current Page",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Organize Bookmarks",
        onClick: fn(),
      },
    ],
  },
};

// Story 41: Display Options
export const DisplayOptions: Story = {
  args: {
    trigger: <button>Display</button>,
    items: [
      {
        id: "1",
        label: "Grid View",
        onClick: fn(),
      },
      {
        id: "2",
        label: "List View",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Compact View",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "Show Details",
        onClick: fn(),
      },
      {
        id: "5",
        label: "Hide Details",
        onClick: fn(),
      },
    ],
  },
};

// Story 42: Color Options
export const ColorOptions: Story = {
  args: {
    trigger: <button>🎨 Colors</button>,
    items: [
      {
        id: "1",
        label: "Red 🔴",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Blue 🔵",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Green 🟢",
        onClick: fn(),
      },
      {
        id: "4",
        label: "Yellow 🟡",
        onClick: fn(),
      },
      {
        id: "5",
        label: "Purple 🟣",
        onClick: fn(),
      },
    ],
  },
};

// Story 43: Text Formatting
export const TextFormatting: Story = {
  args: {
    trigger: <button>Format</button>,
    items: [
      {
        id: "1",
        label: "Bold",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Italic",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Underline",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "Strikethrough",
        onClick: fn(),
      },
      {
        id: "5",
        label: "Clear Formatting",
        onClick: fn(),
      },
    ],
  },
};

// Story 44: Alignment Options
export const AlignmentOptions: Story = {
  args: {
    trigger: <button>Align</button>,
    items: [
      {
        id: "1",
        label: "Align Left",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Align Center",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Align Right",
        onClick: fn(),
      },
      {
        id: "4",
        label: "Justify",
        onClick: fn(),
      },
    ],
  },
};

// Story 45: Security Options
export const SecurityOptions: Story = {
  args: {
    trigger: <button>🔒 Security</button>,
    items: [
      {
        id: "1",
        label: "Change Password",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Two-Factor Auth",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Privacy Settings",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "View Login History",
        onClick: fn(),
      },
    ],
  },
};

// Story 46: Playback Controls
export const PlaybackControls: Story = {
  args: {
    trigger: <button>▶️ Playback</button>,
    items: [
      {
        id: "1",
        label: "Play",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Pause",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Stop",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "Speed: 1x",
        onClick: fn(),
      },
      {
        id: "5",
        label: "Speed: 1.5x",
        onClick: fn(),
      },
      {
        id: "6",
        label: "Speed: 2x",
        onClick: fn(),
      },
    ],
  },
};

// Story 47: Calendar Actions
export const CalendarActions: Story = {
  args: {
    trigger: <button>📅 Calendar</button>,
    items: [
      {
        id: "1",
        label: "Today",
        onClick: fn(),
      },
      {
        id: "2",
        label: "This Week",
        onClick: fn(),
      },
      {
        id: "3",
        label: "This Month",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "Custom Range",
        onClick: fn(),
      },
    ],
  },
};

// Story 48: Email Actions
export const EmailActions: Story = {
  args: {
    trigger: <button>📧 Email</button>,
    items: [
      {
        id: "1",
        label: "Reply",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Reply All",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Forward",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "Mark as Unread",
        onClick: fn(),
      },
      {
        id: "5",
        label: "Move to Trash",
        icon: <DeleteIcon />,
        onClick: fn(),
      },
    ],
  },
};

// Story 49: Map Controls
export const MapControls: Story = {
  args: {
    trigger: <button>🗺️ Map</button>,
    items: [
      {
        id: "1",
        label: "Zoom In",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Zoom Out",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "3",
        label: "Satellite View",
        onClick: fn(),
      },
      {
        id: "4",
        label: "Street View",
        onClick: fn(),
      },
      {
        id: "5",
        label: "Terrain View",
        onClick: fn(),
      },
    ],
  },
};

// Story 50: Developer Tools
export const DeveloperTools: Story = {
  args: {
    trigger: <button>🛠️ Dev Tools</button>,
    items: [
      {
        id: "1",
        label: "Console",
        onClick: fn(),
      },
      {
        id: "2",
        label: "Network",
        onClick: fn(),
      },
      {
        id: "3",
        label: "Performance",
        onClick: fn(),
      },
      {
        id: "divider-1",
        isDivider: true,
      },
      {
        id: "4",
        label: "Clear Cache",
        onClick: fn(),
      },
      {
        id: "5",
        label: "Toggle Device Mode",
        onClick: fn(),
      },
    ],
  },
};
