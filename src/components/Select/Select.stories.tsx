import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Select } from "./Select";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample option sets
const simpleOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "uk", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
];

const priorityOptions = [
  { value: "low", label: "Low Priority" },
  { value: "medium", label: "Medium Priority" },
  { value: "high", label: "High Priority" },
  { value: "critical", label: "Critical" },
];

const statusOptions = [
  { value: "draft", label: "Draft" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];

const timeZoneOptions = [
  { value: "pst", label: "Pacific Time (PST)" },
  { value: "mst", label: "Mountain Time (MST)" },
  { value: "cst", label: "Central Time (CST)" },
  { value: "est", label: "Eastern Time (EST)" },
];

const categoryOptions = [
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "books", label: "Books" },
  { value: "food", label: "Food & Beverages" },
  { value: "home", label: "Home & Garden" },
  { value: "sports", label: "Sports & Outdoors" },
];

// Story 1: Default Select
export const Default: Story = {
  args: {
    options: simpleOptions,
    placeholder: "Select an option",
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");

    // Select an option
    await userEvent.selectOptions(select, "2");
    await expect(select).toHaveValue("2");
    await expect(args.onChange).toHaveBeenCalled();
  },
};

// Story 2: With Label
export const WithLabel: Story = {
  args: {
    label: "Choose Option",
    options: simpleOptions,
    placeholder: "Select an option",
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");

    // Focus the select
    await userEvent.click(select);
    await expect(select).toHaveFocus();

    // Select an option
    await userEvent.selectOptions(select, "1");
    await expect(select).toHaveValue("1");
    await expect(args.onChange).toHaveBeenCalled();
  },
};

// Story 3: With Helper Text
export const WithHelperText: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Select your country",
    helperText: "Choose the country where you reside",
    onChange: fn(),
  },
};

// Story 4: Small Size
export const SmallSize: Story = {
  args: {
    size: "small",
    label: "Small Select",
    options: simpleOptions,
    placeholder: "Select",
    onChange: fn(),
  },
};

// Story 5: Medium Size (Default)
export const MediumSize: Story = {
  args: {
    size: "medium",
    label: "Medium Select",
    options: simpleOptions,
    placeholder: "Select",
    onChange: fn(),
  },
};

// Story 6: Large Size
export const LargeSize: Story = {
  args: {
    size: "large",
    label: "Large Select",
    options: simpleOptions,
    placeholder: "Select",
    onChange: fn(),
  },
};

// Story 7: With Error State
export const WithError: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Select your country",
    hasError: true,
    helperText: "Please select a country",
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");
    const helperText = canvas.getByText(/please select a country/i);

    // Verify error helper text is visible
    await expect(helperText).toBeVisible();

    // Select an option - should still work despite error state
    await userEvent.selectOptions(select, "us");
    await expect(select).toHaveValue("us");
    await expect(args.onChange).toHaveBeenCalled();
  },
};

// Story 8: Disabled State
export const Disabled: Story = {
  args: {
    label: "Disabled Select",
    options: simpleOptions,
    placeholder: "Cannot select",
    disabled: true,
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByLabelText(/disabled select/i);

    // Verify select is disabled
    await expect(select).toBeDisabled();

    // Verify onChange has not been called (disabled elements don't trigger events)
    await expect(args.onChange).not.toHaveBeenCalled();
  },
};

// Story 9: Full Width
export const FullWidth: Story = {
  args: {
    label: "Full Width Select",
    options: countryOptions,
    placeholder: "Select a country",
    fullWidth: true,
    onChange: fn(),
  },
  parameters: {
    layout: "padded",
  },
};

// Story 10: With Disabled Options
export const WithDisabledOptions: Story = {
  args: {
    label: "Priority Level",
    options: [
      { value: "low", label: "Low Priority" },
      { value: "medium", label: "Medium Priority" },
      { value: "high", label: "High Priority", disabled: true },
      { value: "critical", label: "Critical", disabled: true },
    ],
    placeholder: "Select priority",
    helperText: "Some options are disabled",
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole("combobox");

    // Select an enabled option
    await userEvent.selectOptions(select, "low");
    await expect(select).toHaveValue("low");
    await expect(args.onChange).toHaveBeenCalled();

    // Change to another enabled option
    await userEvent.selectOptions(select, "medium");
    await expect(select).toHaveValue("medium");
  },
};

// Story 11: Country Selector
export const CountrySelector: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Select your country",
    onChange: fn(),
  },
};

// Story 12: Priority Selector
export const PrioritySelector: Story = {
  args: {
    label: "Task Priority",
    options: priorityOptions,
    placeholder: "Choose priority",
    helperText: "Set the priority level for this task",
    onChange: fn(),
  },
};

// Story 13: Status Selector
export const StatusSelector: Story = {
  args: {
    label: "Status",
    options: statusOptions,
    placeholder: "Select status",
    onChange: fn(),
  },
};

// Story 14: Time Zone Selector
export const TimeZoneSelector: Story = {
  args: {
    label: "Time Zone",
    options: timeZoneOptions,
    placeholder: "Select your time zone",
    helperText: "Choose your preferred time zone",
    onChange: fn(),
  },
};

// Story 15: Category Selector
export const CategorySelector: Story = {
  args: {
    label: "Product Category",
    options: categoryOptions,
    placeholder: "Select a category",
    onChange: fn(),
  },
};

// Story 16: With Pre-Selected Value
export const WithPreSelectedValue: Story = {
  args: {
    label: "Default Selection",
    options: simpleOptions,
    defaultValue: "2",
    onChange: fn(),
  },
};

// Story 17: Required Field
export const RequiredField: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Select your country",
    required: true,
    helperText: "This field is required",
    onChange: fn(),
  },
};

// Story 18: Month Selector
export const MonthSelector: Story = {
  args: {
    label: "Birth Month",
    options: [
      { value: "1", label: "January" },
      { value: "2", label: "February" },
      { value: "3", label: "March" },
      { value: "4", label: "April" },
      { value: "5", label: "May" },
      { value: "6", label: "June" },
      { value: "7", label: "July" },
      { value: "8", label: "August" },
      { value: "9", label: "September" },
      { value: "10", label: "October" },
      { value: "11", label: "November" },
      { value: "12", label: "December" },
    ],
    placeholder: "Select a month",
    onChange: fn(),
  },
};

// Story 19: Year Selector
export const YearSelector: Story = {
  args: {
    label: "Year",
    options: Array.from({ length: 10 }, (_, i) => {
      const year = new Date().getFullYear() - i;
      return { value: year.toString(), label: year.toString() };
    }),
    placeholder: "Select a year",
    onChange: fn(),
  },
};

// Story 20: Language Selector
export const LanguageSelector: Story = {
  args: {
    label: "Preferred Language",
    options: [
      { value: "en", label: "English" },
      { value: "es", label: "Español" },
      { value: "fr", label: "Français" },
      { value: "de", label: "Deutsch" },
      { value: "it", label: "Italiano" },
      { value: "pt", label: "Português" },
      { value: "ja", label: "日本語" },
      { value: "zh", label: "中文" },
    ],
    placeholder: "Select language",
    onChange: fn(),
  },
};
