import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

/**
 * Props for the Button component
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant style of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline';

  /**
   * The size of the button
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Whether the button is in a loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Whether the button should take full width
   * @default false
   */
  fullWidth?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: inherit;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  /* Size variants */
  ${({ size = 'medium' }) => {
    switch (size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 14px;
        `;
      case 'large':
        return `
          padding: 16px 32px;
          font-size: 18px;
        `;
      case 'medium':
      default:
        return `
          padding: 12px 24px;
          font-size: 16px;
        `;
    }
  }}

  /* Variant styles */
  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'secondary':
        return `
          background-color: #6c757d;
          color: white;

          &:hover:not(:disabled) {
            background-color: #5a6268;
          }

          &:active:not(:disabled) {
            background-color: #545b62;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: #007bff;
          border: 2px solid #007bff;

          &:hover:not(:disabled) {
            background-color: #007bff;
            color: white;
          }

          &:active:not(:disabled) {
            background-color: #0056b3;
            border-color: #0056b3;
          }
        `;
      case 'primary':
      default:
        return `
          background-color: #007bff;
          color: white;

          &:hover:not(:disabled) {
            background-color: #0056b3;
          }

          &:active:not(:disabled) {
            background-color: #004085;
          }
        `;
    }
  }}

  /* Full width */
  ${({ fullWidth }) => fullWidth && `
    width: 100%;
  `}

  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Loading state */
  ${({ isLoading }) => isLoading && `
    position: relative;
    color: transparent;
    pointer-events: none;

    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 50%;
      left: 50%;
      margin-left: -8px;
      margin-top: -8px;
      border: 2px solid #ffffff;
      border-radius: 50%;
      border-top-color: transparent;
      animation: spinner 0.6s linear infinite;
    }

    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
  `}

  /* Focus visible */
  &:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

/**
 * A versatile Button component with multiple variants and sizes
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = ({
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  fullWidth = false,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      isLoading={isLoading}
      fullWidth={fullWidth}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
