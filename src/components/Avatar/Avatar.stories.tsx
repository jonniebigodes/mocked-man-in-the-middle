import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample image URLs for testing
const sampleImage1 = 'https://i.pravatar.cc/150?img=1';
const sampleImage2 = 'https://i.pravatar.cc/150?img=2';
const sampleImage3 = 'https://i.pravatar.cc/150?img=3';

// Stories 1-10: Basic Sizes with Images
export const Default: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
  },
};

export const XSmall: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    size: 'xsmall',
  },
};

export const Small: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    size: 'large',
  },
};

export const XLarge: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    size: 'xlarge',
  },
};

export const CircleShape: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    shape: 'circle',
    size: 'large',
  },
};

export const RoundedShape: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    shape: 'rounded',
    size: 'large',
  },
};

export const SquareShape: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    shape: 'square',
    size: 'large',
  },
};

export const WithBorder: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    showBorder: true,
    size: 'large',
  },
};

// Stories 11-20: Initials Variations
export const WithInitials: Story = {
  args: {
    initials: 'JD',
    alt: 'John Doe',
    size: 'large',
  },
};

export const InitialsXSmall: Story = {
  args: {
    initials: 'AB',
    alt: 'User',
    size: 'xsmall',
  },
};

export const InitialsSmall: Story = {
  args: {
    initials: 'CD',
    alt: 'User',
    size: 'small',
  },
};

export const InitialsMedium: Story = {
  args: {
    initials: 'EF',
    alt: 'User',
    size: 'medium',
  },
};

export const InitialsLarge: Story = {
  args: {
    initials: 'GH',
    alt: 'User',
    size: 'large',
  },
};

export const InitialsXLarge: Story = {
  args: {
    initials: 'IJ',
    alt: 'User',
    size: 'xlarge',
  },
};

export const SingleInitial: Story = {
  args: {
    initials: 'A',
    alt: 'User',
    size: 'large',
  },
};

export const ThreeInitials: Story = {
  args: {
    initials: 'ABC',
    alt: 'User',
    size: 'large',
  },
};

export const InitialsCircle: Story = {
  args: {
    initials: 'KL',
    shape: 'circle',
    size: 'large',
  },
};

export const InitialsRounded: Story = {
  args: {
    initials: 'MN',
    shape: 'rounded',
    size: 'large',
  },
};

// Stories 21-30: Status Indicators
export const OnlineStatus: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    status: 'online',
    size: 'large',
  },
};

export const OfflineStatus: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    status: 'offline',
    size: 'large',
  },
};

export const BusyStatus: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    status: 'busy',
    size: 'large',
  },
};

export const AwayStatus: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    status: 'away',
    size: 'large',
  },
};

export const OnlineStatusWithInitials: Story = {
  args: {
    initials: 'OP',
    alt: 'User',
    status: 'online',
    size: 'large',
  },
};

export const BusyStatusWithInitials: Story = {
  args: {
    initials: 'QR',
    alt: 'User',
    status: 'busy',
    size: 'large',
  },
};

export const AwayStatusWithInitials: Story = {
  args: {
    initials: 'ST',
    alt: 'User',
    status: 'away',
    size: 'large',
  },
};

export const StatusSmallSize: Story = {
  args: {
    src: sampleImage2,
    alt: 'User Avatar',
    status: 'online',
    size: 'small',
  },
};

export const StatusXLargeSize: Story = {
  args: {
    src: sampleImage2,
    alt: 'User Avatar',
    status: 'online',
    size: 'xlarge',
  },
};

export const StatusWithBorder: Story = {
  args: {
    src: sampleImage2,
    alt: 'User Avatar',
    status: 'online',
    showBorder: true,
    size: 'large',
  },
};

// Stories 31-40: Custom Colors
export const CustomBackgroundColor: Story = {
  args: {
    initials: 'UV',
    backgroundColor: '#ef4444',
    size: 'large',
  },
};

export const CustomTextColor: Story = {
  args: {
    initials: 'WX',
    backgroundColor: '#fef3c7',
    textColor: '#92400e',
    size: 'large',
  },
};

export const GreenBackground: Story = {
  args: {
    initials: 'YZ',
    backgroundColor: '#10b981',
    size: 'large',
  },
};

export const PurpleBackground: Story = {
  args: {
    initials: 'AB',
    backgroundColor: '#8b5cf6',
    size: 'large',
  },
};

export const OrangeBackground: Story = {
  args: {
    initials: 'CD',
    backgroundColor: '#f97316',
    size: 'large',
  },
};

export const PinkBackground: Story = {
  args: {
    initials: 'EF',
    backgroundColor: '#ec4899',
    size: 'large',
  },
};

export const TealBackground: Story = {
  args: {
    initials: 'GH',
    backgroundColor: '#14b8a6',
    size: 'large',
  },
};

export const IndigoBackground: Story = {
  args: {
    initials: 'IJ',
    backgroundColor: '#6366f1',
    size: 'large',
  },
};

export const DarkBackground: Story = {
  args: {
    initials: 'KL',
    backgroundColor: '#1f2937',
    size: 'large',
  },
};

export const LightBackground: Story = {
  args: {
    initials: 'MN',
    backgroundColor: '#f3f4f6',
    textColor: '#374151',
    size: 'large',
  },
};

// Stories 41-50: Border Variations
export const BlueBorder: Story = {
  args: {
    src: sampleImage3,
    alt: 'User Avatar',
    showBorder: true,
    borderColor: '#3b82f6',
    size: 'large',
  },
};

export const GreenBorder: Story = {
  args: {
    src: sampleImage3,
    alt: 'User Avatar',
    showBorder: true,
    borderColor: '#10b981',
    size: 'large',
  },
};

export const RedBorder: Story = {
  args: {
    src: sampleImage3,
    alt: 'User Avatar',
    showBorder: true,
    borderColor: '#ef4444',
    size: 'large',
  },
};

export const GoldBorder: Story = {
  args: {
    src: sampleImage3,
    alt: 'User Avatar',
    showBorder: true,
    borderColor: '#f59e0b',
    size: 'large',
  },
};

export const PurpleBorder: Story = {
  args: {
    src: sampleImage3,
    alt: 'User Avatar',
    showBorder: true,
    borderColor: '#8b5cf6',
    size: 'large',
  },
};

export const BorderWithInitials: Story = {
  args: {
    initials: 'OP',
    showBorder: true,
    borderColor: '#3b82f6',
    size: 'large',
  },
};

export const BorderSquareShape: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    showBorder: true,
    shape: 'square',
    size: 'large',
  },
};

export const BorderRoundedShape: Story = {
  args: {
    src: sampleImage1,
    alt: 'User Avatar',
    showBorder: true,
    shape: 'rounded',
    size: 'large',
  },
};

export const BorderWithStatus: Story = {
  args: {
    src: sampleImage2,
    alt: 'User Avatar',
    showBorder: true,
    borderColor: '#10b981',
    status: 'online',
    size: 'large',
  },
};

export const ThickBorderCustomColor: Story = {
  args: {
    initials: 'QR',
    showBorder: true,
    borderColor: '#dc2626',
    backgroundColor: '#fef2f2',
    textColor: '#dc2626',
    size: 'large',
  },
};

// Stories 51-60: Shape and Size Combinations
export const XSmallCircle: Story = {
  args: {
    src: sampleImage1,
    size: 'xsmall',
    shape: 'circle',
  },
};

export const XSmallRounded: Story = {
  args: {
    src: sampleImage1,
    size: 'xsmall',
    shape: 'rounded',
  },
};

export const XSmallSquare: Story = {
  args: {
    src: sampleImage1,
    size: 'xsmall',
    shape: 'square',
  },
};

export const SmallCircle: Story = {
  args: {
    src: sampleImage2,
    size: 'small',
    shape: 'circle',
  },
};

export const SmallRounded: Story = {
  args: {
    src: sampleImage2,
    size: 'small',
    shape: 'rounded',
  },
};

export const SmallSquare: Story = {
  args: {
    src: sampleImage2,
    size: 'small',
    shape: 'square',
  },
};

export const LargeCircle: Story = {
  args: {
    src: sampleImage3,
    size: 'large',
    shape: 'circle',
  },
};

export const LargeRounded: Story = {
  args: {
    src: sampleImage3,
    size: 'large',
    shape: 'rounded',
  },
};

export const LargeSquare: Story = {
  args: {
    src: sampleImage3,
    size: 'large',
    shape: 'square',
  },
};

export const XLargeCircle: Story = {
  args: {
    src: sampleImage1,
    size: 'xlarge',
    shape: 'circle',
  },
};

// Stories 61-70: Complex Combinations
export const InitialsSquareWithStatus: Story = {
  args: {
    initials: 'ST',
    shape: 'square',
    status: 'online',
    size: 'large',
  },
};

export const InitialsRoundedWithStatus: Story = {
  args: {
    initials: 'UV',
    shape: 'rounded',
    status: 'busy',
    size: 'large',
  },
};

export const CustomColorWithBorder: Story = {
  args: {
    initials: 'WX',
    backgroundColor: '#8b5cf6',
    showBorder: true,
    borderColor: '#6d28d9',
    size: 'large',
  },
};

export const CustomColorWithStatus: Story = {
  args: {
    initials: 'YZ',
    backgroundColor: '#14b8a6',
    status: 'online',
    size: 'large',
  },
};

export const BorderStatusAndCustomColor: Story = {
  args: {
    initials: 'AB',
    backgroundColor: '#f59e0b',
    showBorder: true,
    borderColor: '#d97706',
    status: 'away',
    size: 'large',
  },
};

export const SquareBorderStatus: Story = {
  args: {
    src: sampleImage1,
    shape: 'square',
    showBorder: true,
    status: 'online',
    size: 'large',
  },
};

export const RoundedBorderStatus: Story = {
  args: {
    src: sampleImage2,
    shape: 'rounded',
    showBorder: true,
    borderColor: '#ec4899',
    status: 'busy',
    size: 'large',
  },
};

export const AllFeaturesEnabled: Story = {
  args: {
    src: sampleImage3,
    shape: 'rounded',
    showBorder: true,
    borderColor: '#10b981',
    status: 'online',
    size: 'xlarge',
  },
};

export const SmallWithAllFeatures: Story = {
  args: {
    initials: 'CD',
    shape: 'rounded',
    showBorder: true,
    borderColor: '#3b82f6',
    backgroundColor: '#dbeafe',
    textColor: '#1e40af',
    status: 'online',
    size: 'small',
  },
};

export const XSmallWithStatus: Story = {
  args: {
    src: sampleImage1,
    status: 'online',
    size: 'xsmall',
    showBorder: true,
  },
};

// Stories 71-80: Fallback and Edge Cases
export const NoImage: Story = {
  args: {
    alt: 'User',
    size: 'large',
  },
};

export const NoImageWithSize: Story = {
  args: {
    alt: 'Jane',
    size: 'xlarge',
  },
};

export const EmptyInitials: Story = {
  args: {
    initials: '',
    alt: 'Empty',
    size: 'large',
  },
};

export const LongName: Story = {
  args: {
    alt: 'Christopher',
    size: 'large',
  },
};

export const ShortName: Story = {
  args: {
    alt: 'A',
    size: 'large',
  },
};

export const NumberInitials: Story = {
  args: {
    initials: '42',
    size: 'large',
  },
};

export const SpecialCharacterInitials: Story = {
  args: {
    initials: '#1',
    size: 'large',
  },
};

export const LowercaseInitials: Story = {
  args: {
    initials: 'ab',
    size: 'large',
  },
};

export const MixedCaseInitials: Story = {
  args: {
    initials: 'Xy',
    size: 'large',
  },
};

export const WhitespaceInitials: Story = {
  args: {
    initials: 'A B',
    size: 'large',
  },
};

// Stories 81-90: Use Case Scenarios
export const UserProfile: Story = {
  args: {
    src: sampleImage1,
    alt: 'John Doe',
    size: 'xlarge',
    status: 'online',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Story />
        <div>
          <div style={{ fontWeight: 'bold' }}>John Doe</div>
          <div style={{ color: '#6b7280', fontSize: '14px' }}>Software Engineer</div>
        </div>
      </div>
    ),
  ],
};

export const CommentAvatar: Story = {
  args: {
    src: sampleImage2,
    alt: 'Sarah Smith',
    size: 'small',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '12px' }}>
        <Story />
        <div>
          <div style={{ fontWeight: '600', fontSize: '14px' }}>Sarah Smith</div>
          <div style={{ fontSize: '14px', color: '#374151' }}>
            Great work on this project! Looking forward to the next iteration.
          </div>
        </div>
      </div>
    ),
  ],
};

export const ChatMessage: Story = {
  args: {
    initials: 'MJ',
    size: 'small',
    status: 'online',
    backgroundColor: '#8b5cf6',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
        <Story />
        <div style={{
          backgroundColor: '#f3f4f6',
          padding: '8px 12px',
          borderRadius: '12px',
          maxWidth: '300px',
        }}>
          <div style={{ fontWeight: '600', fontSize: '12px', marginBottom: '4px' }}>Mike Johnson</div>
          <div style={{ fontSize: '14px' }}>Hey, are we still meeting at 3pm?</div>
        </div>
      </div>
    ),
  ],
};

export const TeamMemberCard: Story = {
  args: {
    src: sampleImage3,
    alt: 'Emily Chen',
    size: 'large',
    showBorder: true,
    borderColor: '#3b82f6',
  },
  decorators: [
    (Story) => (
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '24px',
        textAlign: 'center',
        width: '200px',
      }}>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Emily Chen</div>
        <div style={{ color: '#6b7280', fontSize: '14px' }}>Product Designer</div>
      </div>
    ),
  ],
};

export const NavigationAvatar: Story = {
  args: {
    initials: 'DW',
    size: 'small',
    status: 'online',
    backgroundColor: '#10b981',
  },
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        backgroundColor: '#1f2937',
        color: 'white',
      }}>
        <div style={{ fontWeight: 'bold' }}>My App</div>
        <Story />
      </div>
    ),
  ],
};

export const ListItem: Story = {
  args: {
    src: sampleImage1,
    size: 'medium',
    status: 'away',
  },
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        cursor: 'pointer',
      }}>
        <Story />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: '600' }}>Alex Turner</div>
          <div style={{ fontSize: '14px', color: '#6b7280' }}>Last seen 2 hours ago</div>
        </div>
      </div>
    ),
  ],
};

export const NotificationAvatar: Story = {
  args: {
    initials: 'RP',
    size: 'small',
    backgroundColor: '#ec4899',
  },
  decorators: [
    (Story) => (
      <div style={{
        display: 'flex',
        gap: '12px',
        padding: '12px',
        backgroundColor: '#fef3c7',
        borderRadius: '8px',
      }}>
        <Story />
        <div>
          <div style={{ fontSize: '14px', fontWeight: '600' }}>Rachel Park mentioned you</div>
          <div style={{ fontSize: '13px', color: '#6b7280' }}>in "Q4 Planning Discussion"</div>
        </div>
      </div>
    ),
  ],
};

export const BadgeAvatar: Story = {
  args: {
    src: sampleImage2,
    size: 'xlarge',
    shape: 'rounded',
    showBorder: true,
    borderColor: '#f59e0b',
  },
  decorators: [
    (Story) => (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Story />
        <div style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          backgroundColor: '#ef4444',
          color: 'white',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 'bold',
          border: '2px solid white',
        }}>
          5
        </div>
      </div>
    ),
  ],
};

export const OnlineUsersGroup: Story = {
  args: {
    src: sampleImage1,
    size: 'medium',
    status: 'online',
    showBorder: true,
    borderColor: 'white',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginLeft: '-8px' }}>
          <Avatar src={sampleImage1} size="medium" status="online" showBorder borderColor="white" />
        </div>
        <div style={{ marginLeft: '-8px' }}>
          <Avatar src={sampleImage2} size="medium" status="online" showBorder borderColor="white" />
        </div>
        <div style={{ marginLeft: '-8px' }}>
          <Avatar src={sampleImage3} size="medium" status="online" showBorder borderColor="white" />
        </div>
        <div style={{ marginLeft: '-8px' }}>
          <Avatar initials="+5" size="medium" backgroundColor="#6b7280" showBorder borderColor="white" />
        </div>
      </div>
    ),
  ],
};

export const SettingsMenu: Story = {
  args: {
    initials: 'TK',
    size: 'large',
    backgroundColor: '#6366f1',
  },
  decorators: [
    (Story) => (
      <div style={{
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '16px',
        width: '250px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <Story />
          <div>
            <div style={{ fontWeight: '600' }}>Tom Kelly</div>
            <div style={{ fontSize: '13px', color: '#6b7280' }}>tom@example.com</div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '12px' }}>
          <div style={{ padding: '8px', cursor: 'pointer' }}>Profile Settings</div>
          <div style={{ padding: '8px', cursor: 'pointer' }}>Account</div>
          <div style={{ padding: '8px', cursor: 'pointer', color: '#ef4444' }}>Logout</div>
        </div>
      </div>
    ),
  ],
};

// Stories 91-100: Size Comparison and Arrangements
export const AllSizesComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar src={sampleImage1} size="xsmall" />
      <Avatar src={sampleImage1} size="small" />
      <Avatar src={sampleImage1} size="medium" />
      <Avatar src={sampleImage1} size="large" />
      <Avatar src={sampleImage1} size="xlarge" />
    </div>
  ),
};

export const AllShapesComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar src={sampleImage1} size="large" shape="circle" />
      <Avatar src={sampleImage1} size="large" shape="rounded" />
      <Avatar src={sampleImage1} size="large" shape="square" />
    </div>
  ),
};

export const AllStatusComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Avatar src={sampleImage1} size="large" status="online" />
      <Avatar src={sampleImage1} size="large" status="away" />
      <Avatar src={sampleImage1} size="large" status="busy" />
      <Avatar src={sampleImage1} size="large" status="offline" />
    </div>
  ),
};

export const InitialsColorGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
      <Avatar initials="AA" backgroundColor="#ef4444" size="medium" />
      <Avatar initials="BB" backgroundColor="#f97316" size="medium" />
      <Avatar initials="CC" backgroundColor="#f59e0b" size="medium" />
      <Avatar initials="DD" backgroundColor="#84cc16" size="medium" />
      <Avatar initials="EE" backgroundColor="#10b981" size="medium" />
      <Avatar initials="FF" backgroundColor="#14b8a6" size="medium" />
      <Avatar initials="GG" backgroundColor="#06b6d4" size="medium" />
      <Avatar initials="HH" backgroundColor="#3b82f6" size="medium" />
      <Avatar initials="II" backgroundColor="#6366f1" size="medium" />
      <Avatar initials="JJ" backgroundColor="#8b5cf6" size="medium" />
      <Avatar initials="KK" backgroundColor="#a855f7" size="medium" />
      <Avatar initials="LL" backgroundColor="#ec4899" size="medium" />
    </div>
  ),
};

export const TeamGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '600px' }}>
      {[
        { name: 'Alice Johnson', initials: 'AJ', color: '#ef4444' },
        { name: 'Bob Smith', initials: 'BS', color: '#3b82f6' },
        { name: 'Carol White', initials: 'CW', color: '#10b981' },
        { name: 'David Lee', initials: 'DL', color: '#f59e0b' },
        { name: 'Emma Davis', initials: 'ED', color: '#8b5cf6' },
        { name: 'Frank Miller', initials: 'FM', color: '#ec4899' },
      ].map((person) => (
        <div key={person.initials} style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
            <Avatar initials={person.initials} backgroundColor={person.color} size="large" />
          </div>
          <div style={{ fontSize: '14px', fontWeight: '600' }}>{person.name}</div>
        </div>
      ))}
    </div>
  ),
};

export const StackedAvatars: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={sampleImage1} size="medium" showBorder borderColor="white" style={{ marginLeft: '-8px', zIndex: 4 }} />
      <Avatar src={sampleImage2} size="medium" showBorder borderColor="white" style={{ marginLeft: '-8px', zIndex: 3 }} />
      <Avatar src={sampleImage3} size="medium" showBorder borderColor="white" style={{ marginLeft: '-8px', zIndex: 2 }} />
      <Avatar initials="+12" size="medium" backgroundColor="#6b7280" showBorder borderColor="white" style={{ marginLeft: '-8px', zIndex: 1 }} />
    </div>
  ),
};

export const ChatList: Story = {
  render: () => (
    <div style={{ width: '300px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
      {[
        { name: 'Sarah Wilson', initials: 'SW', status: 'online' as const, color: '#3b82f6' },
        { name: 'Mike Brown', initials: 'MB', status: 'away' as const, color: '#10b981' },
        { name: 'Lisa Anderson', initials: 'LA', status: 'busy' as const, color: '#ec4899' },
        { name: 'Tom Garcia', initials: 'TG', status: 'offline' as const, color: '#f59e0b' },
      ].map((user, index) => (
        <div
          key={user.initials}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px',
            borderBottom: index < 3 ? '1px solid #e5e7eb' : 'none',
            cursor: 'pointer',
          }}
        >
          <Avatar initials={user.initials} backgroundColor={user.color} status={user.status} size="medium" />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: '600', fontSize: '14px' }}>{user.name}</div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              {user.status === 'online' ? 'Active now' : `Status: ${user.status}`}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: '16px',
      maxWidth: '500px',
    }}>
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
            <Avatar
              initials={`U${i + 1}`}
              backgroundColor={['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'][i % 6]}
              size="large"
            />
          </div>
          <div style={{ fontSize: '12px' }}>User {i + 1}</div>
        </div>
      ))}
    </div>
  ),
};

export const WithTooltip: Story = {
  args: {
    src: sampleImage1,
    size: 'medium',
    status: 'online',
  },
  decorators: [
    (Story) => (
      <div title="John Doe - Online">
        <Story />
      </div>
    ),
  ],
};

export const WithClickHandler: Story = {
  args: {
    initials: 'JS',
    size: 'large',
    backgroundColor: '#3b82f6',
  },
  decorators: [
    (Story) => (
      <div
        onClick={() => alert('Avatar clicked!')}
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={0}
      >
        <Story />
      </div>
    ),
  ],
};
