import styled from '@emotion/styled';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

/**
 * Props for the Input component
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * The size of the input
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The variant style of the input
   * @default 'outlined'
   */
  variant?: 'outlined' | 'filled' | 'unstyled';

  /**
   * Whether the input has an error state
   * @default false
   */
  hasError?: boolean;

  /**
   * Whether the input should take full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Label for the input
   */
  label?: string;

  /**
   * Helper text displayed below the input
   */
  helperText?: string;

  /**
   * Icon or element to display at the start of the input
   */
  startAdornment?: ReactNode;

  /**
   * Icon or element to display at the end of the input
   */
  endAdornment?: ReactNode;
}

const InputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: 6px;
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const InputContainer = styled.div<{
  fullWidth?: boolean;
  hasError?: boolean;
  variant?: 'outlined' | 'filled' | 'unstyled';
  isDisabled?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  ${({ variant = 'outlined', hasError, isDisabled }) => {
    if (variant === 'unstyled') {
      return ``;
    }

    const baseStyles = `
      border-radius: 6px;
      transition: all 0.2s ease-in-out;
      padding: 0 14px;
    `;

    if (variant === 'filled') {
      return `
        ${baseStyles}
        background-color: ${isDisabled ? '#f3f4f6' : '#f9fafb'};
        border: 2px solid transparent;

        &:focus-within {
          background-color: white;
          border-color: ${hasError ? '#dc3545' : '#007bff'};
          box-shadow: 0 0 0 3px ${hasError ? 'rgba(220, 53, 69, 0.1)' : 'rgba(0, 123, 255, 0.1)'};
        }

        &:hover:not(:focus-within) {
          background-color: ${isDisabled ? '#f3f4f6' : '#f3f4f6'};
        }
      `;
    }

    // outlined variant
    return `
      ${baseStyles}
      background-color: white;
      border: 2px solid ${hasError ? '#dc3545' : '#d1d5db'};

      &:focus-within {
        border-color: ${hasError ? '#dc3545' : '#007bff'};
        box-shadow: 0 0 0 3px ${hasError ? 'rgba(220, 53, 69, 0.1)' : 'rgba(0, 123, 255, 0.1)'};
      }

      &:hover:not(:focus-within) {
        border-color: ${hasError ? '#dc3545' : '#9ca3af'};
      }

      ${isDisabled && `
        background-color: #f3f4f6;
        border-color: #d1d5db;
      `}
    `;
  }}
`;

const StyledInput = styled.input<{
  inputSize?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'filled' | 'unstyled';
  hasStartAdornment?: boolean;
  hasEndAdornment?: boolean;
}>`
  flex: 1;
  font-family: inherit;
  border: none;
  outline: none;
  color: #333;
  background: transparent;

  ${({ variant = 'outlined' }) => {
    if (variant === 'unstyled') {
      return `
        padding: 10px 0;
        border-bottom: 1px solid #d1d5db;
        border-radius: 0;

        &:focus {
          border-bottom-color: #007bff;
        }
      `;
    }
    return '';
  }}

  /* Size variants */
  ${({ inputSize = 'medium', variant }) => {
    if (variant === 'unstyled') {
      return '';
    }

    switch (inputSize) {
      case 'small':
        return `
          padding: 6px 0;
          font-size: 14px;
          height: 32px;
        `;
      case 'large':
        return `
          padding: 14px 0;
          font-size: 18px;
          height: 52px;
        `;
      case 'medium':
      default:
        return `
          padding: 10px 0;
          font-size: 16px;
          height: 42px;
        `;
    }
  }}

  /* Placeholder */
  &::placeholder {
    color: #9ca3af;
  }

  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const Adornment = styled.div`
  display: flex;
  align-items: center;
  color: #6b7280;
  flex-shrink: 0;
`;

const HelperText = styled.span<{ hasError?: boolean }>`
  font-size: 12px;
  color: ${({ hasError }) => (hasError ? '#dc3545' : '#6b7280')};
`;

/**
 * A versatile Input component with multiple variants and states
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   helperText="We'll never share your email"
 *   size="medium"
 *   variant="outlined"
 * />
 *
 * // With adornments
 * <Input
 *   placeholder="Search"
 *   startAdornment={<SearchIcon />}
 *   endAdornment={<ClearButton />}
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'medium',
      variant = 'outlined',
      hasError = false,
      fullWidth = false,
      label,
      helperText,
      startAdornment,
      endAdornment,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <InputWrapper fullWidth={fullWidth}>
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <InputContainer
          fullWidth={fullWidth}
          hasError={hasError}
          variant={variant}
          isDisabled={disabled}
        >
          {startAdornment && <Adornment>{startAdornment}</Adornment>}
          <StyledInput
            id={inputId}
            ref={ref}
            inputSize={size}
            variant={variant}
            disabled={disabled}
            hasStartAdornment={!!startAdornment}
            hasEndAdornment={!!endAdornment}
            {...props}
          />
          {endAdornment && <Adornment>{endAdornment}</Adornment>}
        </InputContainer>
        {helperText && <HelperText hasError={hasError}>{helperText}</HelperText>}
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';
