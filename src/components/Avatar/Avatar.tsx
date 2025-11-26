import styled from '@emotion/styled';
import { ImgHTMLAttributes } from 'react';

/**
 * Props for the Avatar component
 */
export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
  /**
   * The image source URL
   */
  src?: string;

  /**
   * Alternative text for the image
   */
  alt?: string;

  /**
   * The size of the avatar
   * @default 'medium'
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

  /**
   * The shape of the avatar
   * @default 'circle'
   */
  shape?: 'circle' | 'rounded' | 'square';

  /**
   * Initials to display when no image is provided
   */
  initials?: string;

  /**
   * Custom background color for the avatar (when using initials)
   */
  backgroundColor?: string;

  /**
   * Custom text color for the initials
   */
  textColor?: string;

  /**
   * Whether to show a border around the avatar
   * @default false
   */
  showBorder?: boolean;

  /**
   * Border color for the avatar
   * @default '#e5e7eb'
   */
  borderColor?: string;

  /**
   * Status indicator (online, offline, busy, away)
   */
  status?: 'online' | 'offline' | 'busy' | 'away';
}

const AvatarWrapper = styled.div<{
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${({ size = 'medium' }) => {
    switch (size) {
      case 'xsmall':
        return `
          width: 24px;
          height: 24px;
        `;
      case 'small':
        return `
          width: 32px;
          height: 32px;
        `;
      case 'large':
        return `
          width: 64px;
          height: 64px;
        `;
      case 'xlarge':
        return `
          width: 96px;
          height: 96px;
        `;
      case 'medium':
      default:
        return `
          width: 48px;
          height: 48px;
        `;
    }
  }}
`;

const AvatarImage = styled.img<{
  shape?: 'circle' | 'rounded' | 'square';
  showBorder?: boolean;
  borderColor?: string;
}>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ shape = 'circle' }) => {
    switch (shape) {
      case 'rounded':
        return `border-radius: 8px;`;
      case 'square':
        return `border-radius: 0;`;
      case 'circle':
      default:
        return `border-radius: 50%;`;
    }
  }}

  ${({ showBorder, borderColor = '#e5e7eb' }) =>
    showBorder &&
    `
    border: 2px solid ${borderColor};
  `}
`;

const AvatarPlaceholder = styled.div<{
  shape?: 'circle' | 'rounded' | 'square';
  showBorder?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor = '#007bff' }) => backgroundColor};
  color: ${({ textColor = '#ffffff' }) => textColor};
  font-weight: 600;
  text-transform: uppercase;

  ${({ size = 'medium' }) => {
    switch (size) {
      case 'xsmall':
        return `font-size: 10px;`;
      case 'small':
        return `font-size: 12px;`;
      case 'large':
        return `font-size: 24px;`;
      case 'xlarge':
        return `font-size: 32px;`;
      case 'medium':
      default:
        return `font-size: 16px;`;
    }
  }}

  ${({ shape = 'circle' }) => {
    switch (shape) {
      case 'rounded':
        return `border-radius: 8px;`;
      case 'square':
        return `border-radius: 0;`;
      case 'circle':
      default:
        return `border-radius: 50%;`;
    }
  }}

  ${({ showBorder, borderColor = '#e5e7eb' }) =>
    showBorder &&
    `
    border: 2px solid ${borderColor};
  `}
`;

const StatusIndicator = styled.div<{
  status?: 'online' | 'offline' | 'busy' | 'away';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
}>`
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid white;
  border-radius: 50%;

  ${({ size = 'medium' }) => {
    switch (size) {
      case 'xsmall':
        return `
          width: 8px;
          height: 8px;
        `;
      case 'small':
        return `
          width: 10px;
          height: 10px;
        `;
      case 'large':
        return `
          width: 16px;
          height: 16px;
        `;
      case 'xlarge':
        return `
          width: 20px;
          height: 20px;
        `;
      case 'medium':
      default:
        return `
          width: 12px;
          height: 12px;
        `;
    }
  }}

  ${({ status = 'online' }) => {
    switch (status) {
      case 'online':
        return `background-color: #10b981;`;
      case 'busy':
        return `background-color: #ef4444;`;
      case 'away':
        return `background-color: #f59e0b;`;
      case 'offline':
      default:
        return `background-color: #6b7280;`;
    }
  }}
`;

/**
 * A versatile Avatar component for displaying user profile images or initials
 *
 * @example
 * ```tsx
 * <Avatar
 *   src="/path/to/image.jpg"
 *   alt="User Name"
 *   size="medium"
 *   shape="circle"
 *   status="online"
 * />
 *
 * // With initials fallback
 * <Avatar
 *   initials="JD"
 *   size="large"
 *   backgroundColor="#007bff"
 * />
 * ```
 */
export const Avatar = ({
  src,
  alt = 'Avatar',
  size = 'medium',
  shape = 'circle',
  initials,
  backgroundColor,
  textColor,
  showBorder = false,
  borderColor,
  status,
  ...props
}: AvatarProps) => {
  return (
    <AvatarWrapper size={size}>
      {src ? (
        <AvatarImage
          src={src}
          alt={alt}
          shape={shape}
          showBorder={showBorder}
          borderColor={borderColor}
          {...props}
        />
      ) : (
        <AvatarPlaceholder
          shape={shape}
          showBorder={showBorder}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          textColor={textColor}
          size={size}
        >
          {initials || alt.charAt(0)}
        </AvatarPlaceholder>
      )}
      {status && <StatusIndicator status={status} size={size} />}
    </AvatarWrapper>
  );
};
