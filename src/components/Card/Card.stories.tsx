import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default card variant with medium padding
 */
export const Default: Story = {
  args: {
    children: 'This is a default card with some content.',
  },
};

/**
 * Elevated card variant with enhanced shadow
 */
export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: 'This is an elevated card with enhanced shadow.',
  },
};

/**
 * Outlined card variant with border
 */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'This is an outlined card with a visible border.',
  },
};

/**
 * Card with header section
 */
export const WithHeader: Story = {
  args: {
    header: 'Card Title',
    children: 'This card has a header section with a title.',
  },
};

/**
 * Card with footer section
 */
export const WithFooter: Story = {
  args: {
    children: 'This card has a footer section below.',
    footer: 'Card Footer',
  },
};

/**
 * Card with both header and footer
 */
export const WithHeaderAndFooter: Story = {
  args: {
    header: 'Card Title',
    children: 'This card has both header and footer sections.',
    footer: 'Last updated: Today',
  },
};

/**
 * Card with small padding
 */
export const SmallPadding: Story = {
  args: {
    padding: 'small',
    children: 'This card has small padding.',
  },
};

/**
 * Card with large padding
 */
export const LargePadding: Story = {
  args: {
    padding: 'large',
    children: 'This card has large padding for more spacious content.',
  },
};

/**
 * Card with no padding
 */
export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: 'This card has no padding.',
  },
};

/**
 * Hoverable card with elevation effect
 */
export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: 'Hover over this card to see the elevation effect.',
  },
};

/**
 * Clickable card with pointer cursor
 */
export const Clickable: Story = {
  args: {
    clickable: true,
    children: 'This card is clickable and shows a pointer cursor.',
  },
};

/**
 * Elevated card with header
 */
export const ElevatedWithHeader: Story = {
  args: {
    variant: 'elevated',
    header: 'Elevated Card',
    children: 'This is an elevated card with a header.',
  },
};

/**
 * Outlined card with footer
 */
export const OutlinedWithFooter: Story = {
  args: {
    variant: 'outlined',
    children: 'This is an outlined card with a footer.',
    footer: 'Footer content',
  },
};

/**
 * Hoverable elevated card
 */
export const HoverableElevated: Story = {
  args: {
    variant: 'elevated',
    hoverable: true,
    children: 'Hover over this elevated card for enhanced effect.',
  },
};

/**
 * Clickable outlined card
 */
export const ClickableOutlined: Story = {
  args: {
    variant: 'outlined',
    clickable: true,
    children: 'This outlined card is clickable.',
  },
};

/**
 * Card with small padding and header
 */
export const SmallPaddingWithHeader: Story = {
  args: {
    padding: 'small',
    header: 'Compact Card',
    children: 'This card has small padding with a header.',
  },
};

/**
 * Card with large padding and footer
 */
export const LargePaddingWithFooter: Story = {
  args: {
    padding: 'large',
    children: 'This card has large padding with a footer.',
    footer: 'Spacious footer',
  },
};

/**
 * Hoverable card with header and footer
 */
export const HoverableWithHeaderAndFooter: Story = {
  args: {
    hoverable: true,
    header: 'Interactive Card',
    children: 'This hoverable card has both header and footer.',
    footer: 'Updated recently',
  },
};

/**
 * Clickable card with header and footer
 */
export const ClickableWithHeaderAndFooter: Story = {
  args: {
    clickable: true,
    header: 'Actionable Card',
    children: 'Click anywhere on this card.',
    footer: 'Click to view details',
  },
};

/**
 * Elevated hoverable card with header
 */
export const ElevatedHoverableWithHeader: Story = {
  args: {
    variant: 'elevated',
    hoverable: true,
    header: 'Premium Card',
    children: 'This elevated hoverable card has a header.',
  },
};

/**
 * Outlined clickable card with footer
 */
export const OutlinedClickableWithFooter: Story = {
  args: {
    variant: 'outlined',
    clickable: true,
    children: 'This outlined clickable card has a footer.',
    footer: 'Click for more',
  },
};

/**
 * Card with no padding but with header
 */
export const NoPaddingWithHeader: Story = {
  args: {
    padding: 'none',
    header: 'No Padding Card',
    children: 'This card has no padding but includes a header.',
  },
};

/**
 * Card with long content
 */
export const WithLongContent: Story = {
  args: {
    header: 'Article Card',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    footer: 'Read more...',
  },
};

/**
 * Card with rich header content
 */
export const WithRichHeader: Story = {
  args: {
    header: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '24px' }}>📄</span>
        <span>Document Title</span>
      </div>
    ),
    children: 'This card has a rich header with an icon.',
  },
};

/**
 * Card with rich footer content
 */
export const WithRichFooter: Story = {
  args: {
    children: 'This card has a rich footer with multiple elements.',
    footer: (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Last updated: Jan 2025</span>
        <span style={{ color: '#007bff' }}>View details →</span>
      </div>
    ),
  },
};

/**
 * Elevated card with small padding
 */
export const ElevatedSmallPadding: Story = {
  args: {
    variant: 'elevated',
    padding: 'small',
    children: 'Elevated card with compact spacing.',
  },
};

/**
 * Outlined card with large padding
 */
export const OutlinedLargePadding: Story = {
  args: {
    variant: 'outlined',
    padding: 'large',
    children: 'Outlined card with generous spacing.',
  },
};

/**
 * Hoverable card with small padding
 */
export const HoverableSmallPadding: Story = {
  args: {
    hoverable: true,
    padding: 'small',
    children: 'Hover over this compact interactive card.',
  },
};

/**
 * Clickable card with large padding
 */
export const ClickableLargePadding: Story = {
  args: {
    clickable: true,
    padding: 'large',
    children: 'Click this spacious card.',
  },
};

/**
 * Elevated hoverable clickable card
 */
export const ElevatedHoverableClickable: Story = {
  args: {
    variant: 'elevated',
    hoverable: true,
    clickable: true,
    header: 'Interactive Premium Card',
    children: 'This card combines elevation, hover effects, and clickability.',
    footer: 'Click to interact',
  },
};

/**
 * Outlined hoverable clickable card
 */
export const OutlinedHoverableClickable: Story = {
  args: {
    variant: 'outlined',
    hoverable: true,
    clickable: true,
    header: 'Interactive Outlined Card',
    children: 'This outlined card is both hoverable and clickable.',
    footer: 'Hover and click',
  },
};

/**
 * Card with multiple paragraphs
 */
export const WithMultipleParagraphs: Story = {
  args: {
    header: 'Multi-paragraph Content',
    children: (
      <>
        <p style={{ margin: '0 0 12px 0' }}>
          This is the first paragraph of content in the card.
        </p>
        <p style={{ margin: '0 0 12px 0' }}>
          This is the second paragraph with more information.
        </p>
        <p style={{ margin: '0' }}>
          This is the final paragraph in the card.
        </p>
      </>
    ),
  },
};

/**
 * Card with list content
 */
export const WithListContent: Story = {
  args: {
    header: 'Features List',
    children: (
      <ul style={{ margin: '0', paddingLeft: '20px' }}>
        <li>Feature one</li>
        <li>Feature two</li>
        <li>Feature three</li>
        <li>Feature four</li>
      </ul>
    ),
    footer: '4 features available',
  },
};

/**
 * Card with image placeholder
 */
export const WithImagePlaceholder: Story = {
  args: {
    padding: 'none',
    children: (
      <>
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
          }}
        >
          Image Placeholder
        </div>
        <div style={{ padding: '20px' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Image Card</h3>
          <p style={{ margin: '0' }}>
            This card contains an image placeholder above the content.
          </p>
        </div>
      </>
    ),
  },
};

/**
 * Card with stats layout
 */
export const WithStatsLayout: Story = {
  args: {
    header: 'Statistics',
    children: (
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'space-around' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#007bff' }}>42</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>Projects</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#007bff' }}>128</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>Tasks</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#007bff' }}>95%</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>Complete</div>
        </div>
      </div>
    ),
  },
};

/**
 * Elevated card with no padding and header
 */
export const ElevatedNoPaddingWithHeader: Story = {
  args: {
    variant: 'elevated',
    padding: 'none',
    header: 'No Padding Elevated',
    children: 'This elevated card has no padding but includes a header.',
  },
};

/**
 * Outlined card with no padding and footer
 */
export const OutlinedNoPaddingWithFooter: Story = {
  args: {
    variant: 'outlined',
    padding: 'none',
    children: 'This outlined card has no padding but includes a footer.',
    footer: 'Footer section',
  },
};

/**
 * Hoverable elevated card with large padding
 */
export const HoverableElevatedLargePadding: Story = {
  args: {
    variant: 'elevated',
    hoverable: true,
    padding: 'large',
    children: 'Hover over this spacious elevated card.',
  },
};

/**
 * Clickable outlined card with small padding
 */
export const ClickableOutlinedSmallPadding: Story = {
  args: {
    variant: 'outlined',
    clickable: true,
    padding: 'small',
    children: 'Click this compact outlined card.',
  },
};

/**
 * Card with header, content, and action buttons
 */
export const WithActionButtons: Story = {
  args: {
    header: 'Confirm Action',
    children: 'Are you sure you want to proceed with this action?',
    footer: (
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <button
          style={{
            padding: '8px 16px',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            background: 'white',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
        <button
          style={{
            padding: '8px 16px',
            border: 'none',
            borderRadius: '6px',
            background: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Confirm
        </button>
      </div>
    ),
  },
};

/**
 * Card with badge in header
 */
export const WithBadgeInHeader: Story = {
  args: {
    header: (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>Notification</span>
        <span
          style={{
            fontSize: '12px',
            padding: '4px 8px',
            borderRadius: '12px',
            background: '#dc3545',
            color: 'white',
          }}
        >
          New
        </span>
      </div>
    ),
    children: 'You have a new notification waiting for you.',
  },
};

/**
 * Card with pricing layout
 */
export const WithPricingLayout: Story = {
  args: {
    variant: 'elevated',
    hoverable: true,
    header: (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Pro Plan</h3>
        <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#007bff' }}>
          $29
          <span style={{ fontSize: '18px', color: '#6b7280' }}>/month</span>
        </div>
      </div>
    ),
    children: (
      <ul style={{ margin: '0', paddingLeft: '20px' }}>
        <li>Unlimited projects</li>
        <li>Priority support</li>
        <li>Advanced analytics</li>
        <li>Custom integrations</li>
      </ul>
    ),
    footer: (
      <button
        style={{
          width: '100%',
          padding: '12px',
          border: 'none',
          borderRadius: '6px',
          background: '#007bff',
          color: 'white',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Subscribe Now
      </button>
    ),
  },
};

/**
 * Card with profile layout
 */
export const WithProfileLayout: Story = {
  args: {
    children: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#007bff',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          JD
        </div>
        <div>
          <h3 style={{ margin: '0 0 4px 0' }}>John Doe</h3>
          <p style={{ margin: '0', color: '#6b7280', fontSize: '14px' }}>
            Software Engineer
          </p>
        </div>
      </div>
    ),
  },
};

/**
 * Card with timeline layout
 */
export const WithTimelineLayout: Story = {
  args: {
    header: 'Activity Timeline',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <div style={{ fontWeight: '600' }}>Task completed</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>2 hours ago</div>
        </div>
        <div>
          <div style={{ fontWeight: '600' }}>Comment added</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>5 hours ago</div>
        </div>
        <div>
          <div style={{ fontWeight: '600' }}>Project created</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>1 day ago</div>
        </div>
      </div>
    ),
  },
};

/**
 * Card with progress indicator
 */
export const WithProgressIndicator: Story = {
  args: {
    header: 'Project Progress',
    children: (
      <>
        <div style={{ marginBottom: '8px' }}>75% Complete</div>
        <div
          style={{
            width: '100%',
            height: '8px',
            background: '#e5e7eb',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '75%',
              height: '100%',
              background: '#007bff',
            }}
          />
        </div>
      </>
    ),
    footer: '3 of 4 tasks completed',
  },
};

/**
 * Compact card with minimal content
 */
export const CompactMinimal: Story = {
  args: {
    padding: 'small',
    children: 'Minimal',
  },
};

/**
 * Card with warning style
 */
export const WithWarningStyle: Story = {
  args: {
    variant: 'outlined',
    header: (
      <div style={{ color: '#dc3545', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '20px' }}>⚠️</span>
        <span>Warning</span>
      </div>
    ),
    children: 'This action cannot be undone. Please proceed with caution.',
    footer: (
      <div style={{ color: '#dc3545', fontSize: '12px' }}>
        This is a destructive operation
      </div>
    ),
  },
};

/**
 * Card with success style
 */
export const WithSuccessStyle: Story = {
  args: {
    variant: 'elevated',
    header: (
      <div style={{ color: '#28a745', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '20px' }}>✓</span>
        <span>Success</span>
      </div>
    ),
    children: 'Your operation completed successfully!',
    footer: (
      <div style={{ color: '#28a745', fontSize: '12px' }}>
        All changes have been saved
      </div>
    ),
  },
};
