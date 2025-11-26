import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

/**
 * Props for the Header component
 */
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /**
   * The logo or brand element (text, image, or component)
   */
  logo?: ReactNode;

  /**
   * Navigation items to display in the header
   */
  navigation?: ReactNode;

  /**
   * Action items to display on the right side (e.g., buttons, user menu)
   */
  actions?: ReactNode;

  /**
   * The variant style of the header
   * @default 'default'
   */
  variant?: 'default' | 'transparent' | 'bordered';

  /**
   * Whether the header should be sticky at the top
   * @default false
   */
  sticky?: boolean;

  /**
   * The height of the header
   * @default 'medium'
   */
  height?: 'small' | 'medium' | 'large';

  /**
   * Whether to show a shadow under the header
   * @default true
   */
  showShadow?: boolean;
}

const StyledHeader = styled.header<{
  variant?: 'default' | 'transparent' | 'bordered';
  sticky?: boolean;
  height?: 'small' | 'medium' | 'large';
  showShadow?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  /* Height variants */
  ${({ height = 'medium' }) => {
    switch (height) {
      case 'small':
        return `
          min-height: 56px;
          padding: 8px 16px;
        `;
      case 'large':
        return `
          min-height: 80px;
          padding: 16px 32px;
        `;
      case 'medium':
      default:
        return `
          min-height: 64px;
          padding: 12px 24px;
        `;
    }
  }}

  /* Variant styles */
  ${({ variant = 'default' }) => {
    switch (variant) {
      case 'transparent':
        return `
          background-color: transparent;
        `;
      case 'bordered':
        return `
          background-color: white;
          border-bottom: 2px solid #e5e7eb;
        `;
      case 'default':
      default:
        return `
          background-color: white;
        `;
    }
  }}

  /* Shadow */
  ${({ showShadow = true, variant }) =>
    showShadow && variant !== 'bordered' &&
    `
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
                0 1px 2px 0 rgba(0, 0, 0, 0.06);
  `}

  /* Sticky positioning */
  ${({ sticky }) =>
    sticky &&
    `
    position: sticky;
    top: 0;
  `}
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  flex-shrink: 0;
`;

const NavigationSection = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ActionsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

/**
 * A versatile Header component for navigation and branding
 *
 * @example
 * ```tsx
 * <Header
 *   logo={<img src="/logo.png" alt="Logo" />}
 *   navigation={
 *     <>
 *       <a href="/home">Home</a>
 *       <a href="/about">About</a>
 *       <a href="/contact">Contact</a>
 *     </>
 *   }
 *   actions={
 *     <>
 *       <Button variant="outline">Sign In</Button>
 *       <Button>Sign Up</Button>
 *     </>
 *   }
 *   sticky
 * />
 * ```
 */
export const Header = ({
  logo,
  navigation,
  actions,
  variant = 'default',
  sticky = false,
  height = 'medium',
  showShadow = true,
  ...props
}: HeaderProps) => {
  return (
    <StyledHeader
      variant={variant}
      sticky={sticky}
      height={height}
      showShadow={showShadow}
      {...props}
    >
      {logo && <LogoSection>{logo}</LogoSection>}
      {navigation && <NavigationSection>{navigation}</NavigationSection>}
      {actions && <ActionsSection>{actions}</ActionsSection>}
    </StyledHeader>
  );
};
