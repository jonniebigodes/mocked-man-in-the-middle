import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stories 1-10: Basic Variants
export const Default: Story = {
  args: {
    items: [
      { id: '1', title: 'Section 1', content: 'Content for section 1' },
      { id: '2', title: 'Section 2', content: 'Content for section 2' },
      { id: '3', title: 'Section 3', content: 'Content for section 3' },
    ],
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    items: [
      { id: '1', title: 'Section 1', content: 'Content for section 1' },
      { id: '2', title: 'Section 2', content: 'Content for section 2' },
      { id: '3', title: 'Section 3', content: 'Content for section 3' },
    ],
  },
};

export const Separated: Story = {
  args: {
    variant: 'separated',
    items: [
      { id: '1', title: 'Section 1', content: 'Content for section 1' },
      { id: '2', title: 'Section 2', content: 'Content for section 2' },
      { id: '3', title: 'Section 3', content: 'Content for section 3' },
    ],
  },
};

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
    items: [
      { id: '1', title: 'Section 1', content: 'Content for section 1' },
      { id: '2', title: 'Section 2', content: 'Content for section 2' },
      { id: '3', title: 'Section 3', content: 'Content for section 3' },
    ],
  },
};

export const DefaultExpanded: Story = {
  args: {
    defaultExpandedIds: ['1'],
    items: [
      { id: '1', title: 'Section 1', content: 'Content for section 1' },
      { id: '2', title: 'Section 2', content: 'Content for section 2' },
      { id: '3', title: 'Section 3', content: 'Content for section 3' },
    ],
  },
};

export const MultipleDefaultExpanded: Story = {
  args: {
    allowMultiple: true,
    defaultExpandedIds: ['1', '3'],
    items: [
      { id: '1', title: 'Section 1', content: 'Content for section 1' },
      { id: '2', title: 'Section 2', content: 'Content for section 2' },
      { id: '3', title: 'Section 3', content: 'Content for section 3' },
    ],
  },
};

export const NoDividers: Story = {
  args: {
    showDividers: false,
    items: [
      { id: '1', title: 'Section 1', content: 'Content for section 1' },
      { id: '2', title: 'Section 2', content: 'Content for section 2' },
      { id: '3', title: 'Section 3', content: 'Content for section 3' },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      { id: '1', title: 'Section 1', content: 'Content for section 1' },
      { id: '2', title: 'Section 2 (Disabled)', content: 'Content for section 2', disabled: true },
      { id: '3', title: 'Section 3', content: 'Content for section 3' },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { id: '1', title: 'Single Section', content: 'This is the only section in this accordion' },
    ],
  },
};

export const TwoItems: Story = {
  args: {
    items: [
      { id: '1', title: 'First Section', content: 'Content for first section' },
      { id: '2', title: 'Second Section', content: 'Content for second section' },
    ],
  },
};

// Stories 11-20: Content Variations
export const LongContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Long Content Section',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(20),
      },
      { id: '2', title: 'Section 2', content: 'Short content' },
    ],
  },
};

export const RichTextContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Rich Text',
        content: (
          <div>
            <h4>Heading</h4>
            <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
            </ul>
          </div>
        ),
      },
      { id: '2', title: 'Section 2', content: 'Regular content' },
    ],
  },
};

export const EmptyContent: Story = {
  args: {
    items: [
      { id: '1', title: 'Empty Content', content: '' },
      { id: '2', title: 'Section 2', content: 'Some content here' },
    ],
  },
};

export const CodeContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Code Example',
        content: <pre><code>{`function hello() {\n  console.log('Hello!');\n}`}</code></pre>,
      },
      { id: '2', title: 'Section 2', content: 'Regular content' },
    ],
  },
};

export const ImageContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Image Section',
        content: <img src="https://via.placeholder.com/400x200" alt="Placeholder" style={{ width: '100%' }} />,
      },
      { id: '2', title: 'Section 2', content: 'Regular content' },
    ],
  },
};

export const MixedContentTypes: Story = {
  args: {
    items: [
      { id: '1', title: 'Text', content: 'Plain text content' },
      { id: '2', title: 'HTML', content: <div><strong>Bold</strong> and <em>italic</em></div> },
      { id: '3', title: 'List', content: <ul><li>Item 1</li><li>Item 2</li></ul> },
    ],
  },
};

export const VeryLongTitle: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'This is a very long title that might wrap to multiple lines depending on the container width',
        content: 'Content here',
      },
      { id: '2', title: 'Short', content: 'Content' },
    ],
  },
};

export const ShortTitles: Story = {
  args: {
    items: [
      { id: '1', title: 'A', content: 'Content for A' },
      { id: '2', title: 'B', content: 'Content for B' },
      { id: '3', title: 'C', content: 'Content for C' },
    ],
  },
};

export const NumberedTitles: Story = {
  args: {
    items: [
      { id: '1', title: '1. First Item', content: 'First content' },
      { id: '2', title: '2. Second Item', content: 'Second content' },
      { id: '3', title: '3. Third Item', content: 'Third content' },
    ],
  },
};

export const SpecialCharactersTitles: Story = {
  args: {
    items: [
      { id: '1', title: '🎉 Celebration', content: 'Party content' },
      { id: '2', title: '⚠️ Warning', content: 'Warning content' },
      { id: '3', title: '✓ Success', content: 'Success content' },
    ],
  },
};

// Stories 21-30: Size and Layout Variations
export const FiveItems: Story = {
  args: {
    items: Array.from({ length: 5 }, (_, i) => ({
      id: String(i + 1),
      title: `Section ${i + 1}`,
      content: `Content for section ${i + 1}`,
    })),
  },
};

export const TenItems: Story = {
  args: {
    items: Array.from({ length: 10 }, (_, i) => ({
      id: String(i + 1),
      title: `Section ${i + 1}`,
      content: `Content for section ${i + 1}`,
    })),
  },
};

export const TwentyItems: Story = {
  args: {
    items: Array.from({ length: 20 }, (_, i) => ({
      id: String(i + 1),
      title: `Section ${i + 1}`,
      content: `Content for section ${i + 1}`,
    })),
  },
};

export const VaryingContentLengths: Story = {
  args: {
    items: [
      { id: '1', title: 'Short', content: 'A' },
      { id: '2', title: 'Medium', content: 'This is a medium length content section.' },
      { id: '3', title: 'Long', content: 'Lorem ipsum dolor sit amet. '.repeat(30) },
    ],
  },
};

export const NestedContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Nested Structure',
        content: (
          <div>
            <div style={{ marginBottom: '8px' }}>
              <strong>Level 1</strong>
              <div style={{ marginLeft: '16px' }}>
                <div>Level 2</div>
                <div style={{ marginLeft: '16px' }}>Level 3</div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
};

export const CompactSpacing: Story = {
  args: {
    variant: 'separated',
    items: [
      { id: '1', title: 'Compact 1', content: 'Content 1' },
      { id: '2', title: 'Compact 2', content: 'Content 2' },
      { id: '3', title: 'Compact 3', content: 'Content 3' },
    ],
  },
};

export const WideContainer: Story = {
  args: {
    items: [
      { id: '1', title: 'Wide Section', content: 'This accordion spans the full width' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NarrowContainer: Story = {
  args: {
    items: [
      { id: '1', title: 'Narrow Section', content: 'This accordion is in a narrow container' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FullWidth: Story = {
  args: {
    items: [
      { id: '1', title: 'Full Width', content: 'This spans the entire width' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithPadding: Story = {
  args: {
    items: [
      { id: '1', title: 'Padded Section', content: 'Content with extra padding' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '24px' }}>
        <Story />
      </div>
    ),
  ],
};

// Stories 31-40: State Combinations
export const AllExpanded: Story = {
  args: {
    allowMultiple: true,
    defaultExpandedIds: ['1', '2', '3'],
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
      { id: '3', title: 'Section 3', content: 'Content 3' },
    ],
  },
};

export const FirstExpanded: Story = {
  args: {
    defaultExpandedIds: ['1'],
    items: [
      { id: '1', title: 'First (Expanded)', content: 'Content 1' },
      { id: '2', title: 'Second', content: 'Content 2' },
      { id: '3', title: 'Third', content: 'Content 3' },
    ],
  },
};

export const LastExpanded: Story = {
  args: {
    defaultExpandedIds: ['3'],
    items: [
      { id: '1', title: 'First', content: 'Content 1' },
      { id: '2', title: 'Second', content: 'Content 2' },
      { id: '3', title: 'Third (Expanded)', content: 'Content 3' },
    ],
  },
};

export const MiddleExpanded: Story = {
  args: {
    defaultExpandedIds: ['2'],
    items: [
      { id: '1', title: 'First', content: 'Content 1' },
      { id: '2', title: 'Second (Expanded)', content: 'Content 2' },
      { id: '3', title: 'Third', content: 'Content 3' },
    ],
  },
};

export const AlternatingDisabled: Story = {
  args: {
    items: [
      { id: '1', title: 'Enabled', content: 'Content 1' },
      { id: '2', title: 'Disabled', content: 'Content 2', disabled: true },
      { id: '3', title: 'Enabled', content: 'Content 3' },
      { id: '4', title: 'Disabled', content: 'Content 4', disabled: true },
    ],
  },
};

export const AllDisabled: Story = {
  args: {
    items: [
      { id: '1', title: 'Disabled 1', content: 'Content 1', disabled: true },
      { id: '2', title: 'Disabled 2', content: 'Content 2', disabled: true },
      { id: '3', title: 'Disabled 3', content: 'Content 3', disabled: true },
    ],
  },
};

export const FirstDisabled: Story = {
  args: {
    items: [
      { id: '1', title: 'Disabled', content: 'Content 1', disabled: true },
      { id: '2', title: 'Enabled', content: 'Content 2' },
      { id: '3', title: 'Enabled', content: 'Content 3' },
    ],
  },
};

export const LastDisabled: Story = {
  args: {
    items: [
      { id: '1', title: 'Enabled', content: 'Content 1' },
      { id: '2', title: 'Enabled', content: 'Content 2' },
      { id: '3', title: 'Disabled', content: 'Content 3', disabled: true },
    ],
  },
};

export const ExpandedAndDisabled: Story = {
  args: {
    defaultExpandedIds: ['1'],
    items: [
      { id: '1', title: 'Expanded', content: 'Content 1' },
      { id: '2', title: 'Disabled', content: 'Content 2', disabled: true },
      { id: '3', title: 'Normal', content: 'Content 3' },
    ],
  },
};

export const MultipleExpandedWithDisabled: Story = {
  args: {
    allowMultiple: true,
    defaultExpandedIds: ['1', '3'],
    items: [
      { id: '1', title: 'Expanded 1', content: 'Content 1' },
      { id: '2', title: 'Disabled', content: 'Content 2', disabled: true },
      { id: '3', title: 'Expanded 2', content: 'Content 3' },
    ],
  },
};

// Stories 41-50: Variant Combinations
export const BorderedWithoutDividers: Story = {
  args: {
    variant: 'bordered',
    showDividers: false,
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
      { id: '3', title: 'Section 3', content: 'Content 3' },
    ],
  },
};

export const SeparatedWithoutDividers: Story = {
  args: {
    variant: 'separated',
    showDividers: false,
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
      { id: '3', title: 'Section 3', content: 'Content 3' },
    ],
  },
};

export const BorderedAllowMultiple: Story = {
  args: {
    variant: 'bordered',
    allowMultiple: true,
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
      { id: '3', title: 'Section 3', content: 'Content 3' },
    ],
  },
};

export const SeparatedAllowMultiple: Story = {
  args: {
    variant: 'separated',
    allowMultiple: true,
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
      { id: '3', title: 'Section 3', content: 'Content 3' },
    ],
  },
};

export const BorderedDefaultExpanded: Story = {
  args: {
    variant: 'bordered',
    defaultExpandedIds: ['2'],
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
      { id: '3', title: 'Section 3', content: 'Content 3' },
    ],
  },
};

export const SeparatedDefaultExpanded: Story = {
  args: {
    variant: 'separated',
    defaultExpandedIds: ['2'],
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
      { id: '3', title: 'Section 3', content: 'Content 3' },
    ],
  },
};

export const BorderedWithDisabled: Story = {
  args: {
    variant: 'bordered',
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Disabled', content: 'Content 2', disabled: true },
      { id: '3', title: 'Section 3', content: 'Content 3' },
    ],
  },
};

export const SeparatedWithDisabled: Story = {
  args: {
    variant: 'separated',
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Disabled', content: 'Content 2', disabled: true },
      { id: '3', title: 'Section 3', content: 'Content 3' },
    ],
  },
};

export const BorderedLongContent: Story = {
  args: {
    variant: 'bordered',
    items: [
      { id: '1', title: 'Long Content', content: 'Lorem ipsum dolor sit amet. '.repeat(20) },
      { id: '2', title: 'Section 2', content: 'Short content' },
    ],
  },
};

export const SeparatedLongContent: Story = {
  args: {
    variant: 'separated',
    items: [
      { id: '1', title: 'Long Content', content: 'Lorem ipsum dolor sit amet. '.repeat(20) },
      { id: '2', title: 'Section 2', content: 'Short content' },
    ],
  },
};

// Stories 51-60: Use Case Examples
export const FAQAccordion: Story = {
  args: {
    variant: 'separated',
    items: [
      {
        id: '1',
        title: 'What is your return policy?',
        content: 'You can return any item within 30 days of purchase for a full refund.',
      },
      {
        id: '2',
        title: 'How long does shipping take?',
        content: 'Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days.',
      },
      {
        id: '3',
        title: 'Do you ship internationally?',
        content: 'Yes, we ship to over 100 countries worldwide.',
      },
    ],
  },
};

export const SettingsAccordion: Story = {
  args: {
    variant: 'bordered',
    items: [
      {
        id: '1',
        title: 'Account Settings',
        content: <div><label>Email: <input type="email" /></label></div>,
      },
      {
        id: '2',
        title: 'Privacy Settings',
        content: <div><label><input type="checkbox" /> Make profile public</label></div>,
      },
      {
        id: '3',
        title: 'Notification Settings',
        content: <div><label><input type="checkbox" /> Email notifications</label></div>,
      },
    ],
  },
};

export const ProductDetailsAccordion: Story = {
  args: {
    defaultExpandedIds: ['1'],
    items: [
      {
        id: '1',
        title: 'Description',
        content: 'High-quality product made with premium materials.',
      },
      {
        id: '2',
        title: 'Specifications',
        content: <ul><li>Material: Cotton</li><li>Size: M</li><li>Color: Blue</li></ul>,
      },
      {
        id: '3',
        title: 'Shipping Info',
        content: 'Free shipping on orders over $50.',
      },
    ],
  },
};

export const DocumentationAccordion: Story = {
  args: {
    variant: 'separated',
    items: [
      {
        id: '1',
        title: 'Getting Started',
        content: 'Follow these steps to get started with the product.',
      },
      {
        id: '2',
        title: 'API Reference',
        content: <pre><code>api.getData()</code></pre>,
      },
      {
        id: '3',
        title: 'Examples',
        content: 'Here are some common usage examples.',
      },
    ],
  },
};

export const CourseModulesAccordion: Story = {
  args: {
    allowMultiple: true,
    items: [
      {
        id: '1',
        title: 'Module 1: Introduction',
        content: 'Learn the basics in this introductory module.',
      },
      {
        id: '2',
        title: 'Module 2: Advanced Topics',
        content: 'Dive deeper into advanced concepts.',
      },
      {
        id: '3',
        title: 'Module 3: Final Project',
        content: 'Complete your final project to finish the course.',
      },
    ],
  },
};

export const MenuAccordion: Story = {
  args: {
    variant: 'separated',
    items: [
      {
        id: '1',
        title: 'Appetizers',
        content: <ul><li>Spring Rolls - $8</li><li>Bruschetta - $10</li></ul>,
      },
      {
        id: '2',
        title: 'Main Courses',
        content: <ul><li>Pasta - $15</li><li>Steak - $25</li></ul>,
      },
      {
        id: '3',
        title: 'Desserts',
        content: <ul><li>Tiramisu - $8</li><li>Cheesecake - $7</li></ul>,
      },
    ],
  },
};

export const PricingTiersAccordion: Story = {
  args: {
    variant: 'bordered',
    items: [
      {
        id: '1',
        title: 'Basic - $9/month',
        content: 'Perfect for individuals. Includes all basic features.',
      },
      {
        id: '2',
        title: 'Pro - $29/month',
        content: 'For professionals. Includes advanced features.',
      },
      {
        id: '3',
        title: 'Enterprise - Custom',
        content: 'For large organizations. Custom pricing and features.',
      },
    ],
  },
};

export const TimelineAccordion: Story = {
  args: {
    defaultExpandedIds: ['1'],
    items: [
      {
        id: '1',
        title: '2024 - Current',
        content: 'Launched new product line and expanded to new markets.',
      },
      {
        id: '2',
        title: '2023',
        content: 'Opened three new locations and hired 50+ employees.',
      },
      {
        id: '3',
        title: '2022',
        content: 'Company founded and first product released.',
      },
    ],
  },
};

export const TroubleshootingAccordion: Story = {
  args: {
    variant: 'separated',
    items: [
      {
        id: '1',
        title: 'Problem: App won\'t start',
        content: 'Solution: Try restarting your device and reinstalling the app.',
      },
      {
        id: '2',
        title: 'Problem: Login issues',
        content: 'Solution: Reset your password or contact support.',
      },
      {
        id: '3',
        title: 'Problem: Slow performance',
        content: 'Solution: Clear your cache and close background apps.',
      },
    ],
  },
};

export const FeatureComparisonAccordion: Story = {
  args: {
    allowMultiple: true,
    items: [
      {
        id: '1',
        title: 'Free Plan',
        content: <ul><li>Basic features</li><li>5GB storage</li><li>Email support</li></ul>,
      },
      {
        id: '2',
        title: 'Premium Plan',
        content: <ul><li>All features</li><li>100GB storage</li><li>24/7 support</li></ul>,
      },
      {
        id: '3',
        title: 'Business Plan',
        content: <ul><li>All features</li><li>Unlimited storage</li><li>Dedicated support</li></ul>,
      },
    ],
  },
};

// Stories 61-70: Edge Cases
export const EmptyItems: Story = {
  args: {
    items: [],
  },
};

export const VeryLongId: Story = {
  args: {
    items: [
      {
        id: 'this-is-a-very-long-id-that-might-cause-issues-in-some-scenarios-12345',
        title: 'Section with Long ID',
        content: 'Content here',
      },
    ],
  },
};

export const SpecialCharactersInId: Story = {
  args: {
    items: [
      { id: 'id_with_underscores', title: 'Underscores', content: 'Content 1' },
      { id: 'id-with-dashes', title: 'Dashes', content: 'Content 2' },
      { id: 'id.with.dots', title: 'Dots', content: 'Content 3' },
    ],
  },
};

export const DuplicateIds: Story = {
  args: {
    items: [
      { id: '1', title: 'First', content: 'Content 1' },
      { id: '1', title: 'Duplicate ID', content: 'Content 2' },
      { id: '2', title: 'Third', content: 'Content 3' },
    ],
  },
};

export const NumericStringIds: Story = {
  args: {
    items: [
      { id: '001', title: 'Section 001', content: 'Content 1' },
      { id: '002', title: 'Section 002', content: 'Content 2' },
      { id: '003', title: 'Section 003', content: 'Content 3' },
    ],
  },
};

export const HtmlInTitle: Story = {
  args: {
    items: [
      { id: '1', title: <span><strong>Bold</strong> Title</span>, content: 'Content 1' },
      { id: '2', title: <span style={{ color: 'red' }}>Red Title</span>, content: 'Content 2' },
    ],
  },
};

export const NullContent: Story = {
  args: {
    items: [
      { id: '1', title: 'Null Content', content: null as any },
      { id: '2', title: 'Normal', content: 'Content 2' },
    ],
  },
};

export const UndefinedContent: Story = {
  args: {
    items: [
      { id: '1', title: 'Undefined Content', content: undefined as any },
      { id: '2', title: 'Normal', content: 'Content 2' },
    ],
  },
};

export const ZeroAsContent: Story = {
  args: {
    items: [
      { id: '1', title: 'Zero Content', content: 0 as any },
      { id: '2', title: 'Normal', content: 'Content 2' },
    ],
  },
};

export const BooleanAsContent: Story = {
  args: {
    items: [
      { id: '1', title: 'True Content', content: true as any },
      { id: '2', title: 'False Content', content: false as any },
    ],
  },
};

// Stories 71-80: Interactive Scenarios
export const FormInContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Contact Form',
        content: (
          <form>
            <div><label>Name: <input type="text" /></label></div>
            <div><label>Email: <input type="email" /></label></div>
            <button type="submit">Submit</button>
          </form>
        ),
      },
    ],
  },
};

export const ButtonsInContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Actions',
        content: (
          <div>
            <button>Primary Action</button>
            <button>Secondary Action</button>
          </div>
        ),
      },
    ],
  },
};

export const LinksInContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Resources',
        content: (
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        ),
      },
    ],
  },
};

export const TableInContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Data Table',
        content: (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Item 1</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>100</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>Item 2</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>200</td>
              </tr>
            </tbody>
          </table>
        ),
      },
    ],
  },
};

export const VideoInContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Video Tutorial',
        content: (
          <video controls width="100%">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        ),
      },
    ],
  },
};

export const IframeInContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Embedded Content',
        content: (
          <iframe
            src="https://www.example.com"
            width="100%"
            height="300"
            title="Embedded content"
          />
        ),
      },
    ],
  },
};

export const CheckboxListInContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Todo List',
        content: (
          <div>
            <div><label><input type="checkbox" /> Task 1</label></div>
            <div><label><input type="checkbox" /> Task 2</label></div>
            <div><label><input type="checkbox" checked /> Task 3 (Done)</label></div>
          </div>
        ),
      },
    ],
  },
};

export const RadioButtonsInContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Choose Option',
        content: (
          <div>
            <div><label><input type="radio" name="option" /> Option A</label></div>
            <div><label><input type="radio" name="option" /> Option B</label></div>
            <div><label><input type="radio" name="option" /> Option C</label></div>
          </div>
        ),
      },
    ],
  },
};

export const SelectDropdownInContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Select Country',
        content: (
          <select style={{ width: '100%', padding: '8px' }}>
            <option>USA</option>
            <option>Canada</option>
            <option>UK</option>
            <option>Australia</option>
          </select>
        ),
      },
    ],
  },
};

export const TextareaInContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Feedback',
        content: (
          <textarea
            placeholder="Enter your feedback here..."
            style={{ width: '100%', minHeight: '100px', padding: '8px' }}
          />
        ),
      },
    ],
  },
};

// Stories 81-90: Styling Variations
export const CustomStyledContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Custom Styled',
        content: (
          <div style={{
            backgroundColor: '#f0f9ff',
            padding: '16px',
            borderRadius: '8px',
            border: '2px solid #0ea5e9',
          }}>
            Content with custom styling
          </div>
        ),
      },
    ],
  },
};

export const ColoredTitles: Story = {
  args: {
    items: [
      { id: '1', title: <span style={{ color: '#ef4444' }}>Red Title</span>, content: 'Content 1' },
      { id: '2', title: <span style={{ color: '#10b981' }}>Green Title</span>, content: 'Content 2' },
      { id: '3', title: <span style={{ color: '#3b82f6' }}>Blue Title</span>, content: 'Content 3' },
    ],
  },
};

export const GradientBackground: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Gradient Content',
        content: (
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
          }}>
            Content with gradient background
          </div>
        ),
      },
    ],
  },
};

export const WithShadow: Story = {
  args: {
    variant: 'separated',
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
        <Story />
      </div>
    ),
  ],
};

export const RoundedCorners: Story = {
  args: {
    variant: 'bordered',
    items: [
      { id: '1', title: 'Section 1', content: 'Content 1' },
      { id: '2', title: 'Section 2', content: 'Content 2' },
    ],
  },
};

export const IconsInTitles: Story = {
  args: {
    items: [
      { id: '1', title: <span>📧 Email Settings</span>, content: 'Configure email' },
      { id: '2', title: <span>🔒 Security</span>, content: 'Security settings' },
      { id: '3', title: <span>🔔 Notifications</span>, content: 'Notification preferences' },
    ],
  },
};

export const BadgesInTitles: Story = {
  args: {
    items: [
      {
        id: '1',
        title: (
          <span>
            Feature 1 <span style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              marginLeft: '8px',
            }}>New</span>
          </span>
        ),
        content: 'Content 1',
      },
      {
        id: '2',
        title: (
          <span>
            Feature 2 <span style={{
              backgroundColor: '#f59e0b',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              marginLeft: '8px',
            }}>Beta</span>
          </span>
        ),
        content: 'Content 2',
      },
    ],
  },
};

export const CenteredContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Centered',
        content: <div style={{ textAlign: 'center' }}>This content is centered</div>,
      },
    ],
  },
};

export const RightAlignedContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Right Aligned',
        content: <div style={{ textAlign: 'right' }}>This content is right aligned</div>,
      },
    ],
  },
};

export const JustifiedContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Justified',
        content: (
          <div style={{ textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </div>
        ),
      },
    ],
  },
};

// Stories 91-100: Advanced Scenarios
export const MultiColumnContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Multi-Column Layout',
        content: (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>Column 1 content</div>
            <div>Column 2 content</div>
          </div>
        ),
      },
    ],
  },
};

export const FlexboxContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Flexbox Layout',
        content: (
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
            <div style={{ flex: 1, backgroundColor: '#f3f4f6', padding: '16px' }}>Flex 1</div>
            <div style={{ flex: 1, backgroundColor: '#f3f4f6', padding: '16px' }}>Flex 2</div>
            <div style={{ flex: 1, backgroundColor: '#f3f4f6', padding: '16px' }}>Flex 3</div>
          </div>
        ),
      },
    ],
  },
};

export const GridContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Grid Layout',
        content: (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
          }}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} style={{
                backgroundColor: '#e5e7eb',
                padding: '16px',
                textAlign: 'center',
              }}>
                Item {i + 1}
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
};

export const ScrollableContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Scrollable Content',
        content: (
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i}>Line {i + 1}</div>
            ))}
          </div>
        ),
      },
    ],
  },
};

export const CardGridContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Product Grid',
        content: (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '16px',
          }}>
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} style={{
                border: '1px solid #e5e7eb',
                padding: '16px',
                borderRadius: '8px',
              }}>
                <div style={{
                  width: '100%',
                  height: '100px',
                  backgroundColor: '#f3f4f6',
                  marginBottom: '8px',
                }} />
                <div>Product {i + 1}</div>
                <div style={{ color: '#6b7280', fontSize: '12px' }}>$29.99</div>
              </div>
            ))}
          </div>
        ),
      },
    ],
  },
};

export const StepperContent: Story = {
  args: {
    allowMultiple: true,
    defaultExpandedIds: ['1'],
    items: [
      {
        id: '1',
        title: 'Step 1: Account Information',
        content: (
          <div>
            <div><label>Username: <input type="text" /></label></div>
            <div><label>Email: <input type="email" /></label></div>
          </div>
        ),
      },
      {
        id: '2',
        title: 'Step 2: Personal Details',
        content: (
          <div>
            <div><label>First Name: <input type="text" /></label></div>
            <div><label>Last Name: <input type="text" /></label></div>
          </div>
        ),
      },
      {
        id: '3',
        title: 'Step 3: Confirmation',
        content: <div>Review your information and submit.</div>,
      },
    ],
  },
};

export const ProgressContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Project Progress',
        content: (
          <div>
            <div style={{ marginBottom: '8px' }}>
              <div>Design: 100%</div>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#e5e7eb',
                borderRadius: '4px',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#10b981',
                  borderRadius: '4px',
                }} />
              </div>
            </div>
            <div style={{ marginBottom: '8px' }}>
              <div>Development: 60%</div>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#e5e7eb',
                borderRadius: '4px',
              }}>
                <div style={{
                  width: '60%',
                  height: '100%',
                  backgroundColor: '#3b82f6',
                  borderRadius: '4px',
                }} />
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
};

export const StatsContent: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Analytics Dashboard',
        content: (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            textAlign: 'center',
          }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>1,234</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Users</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>567</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Orders</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>$12.3K</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Revenue</div>
            </div>
          </div>
        ),
      },
    ],
  },
};

export const TimelineDetailContent: Story = {
  args: {
    variant: 'separated',
    items: [
      {
        id: '1',
        title: 'Q1 2024',
        content: (
          <div>
            <div style={{ marginBottom: '12px' }}>
              <strong>January</strong>
              <ul>
                <li>Feature A launched</li>
                <li>100 new users</li>
              </ul>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <strong>February</strong>
              <ul>
                <li>Feature B released</li>
                <li>150 new users</li>
              </ul>
            </div>
            <div>
              <strong>March</strong>
              <ul>
                <li>Major update</li>
                <li>200 new users</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
};

export const ComplexNestedStructure: Story = {
  args: {
    variant: 'bordered',
    items: [
      {
        id: '1',
        title: 'Organization Structure',
        content: (
          <div>
            <div style={{ marginBottom: '16px' }}>
              <strong>Engineering</strong>
              <div style={{ marginLeft: '16px' }}>
                <div>- Frontend Team (12 members)</div>
                <div>- Backend Team (15 members)</div>
                <div>- DevOps Team (8 members)</div>
              </div>
            </div>
            <div>
              <strong>Product</strong>
              <div style={{ marginLeft: '16px' }}>
                <div>- Product Managers (5 members)</div>
                <div>- Designers (7 members)</div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
};
