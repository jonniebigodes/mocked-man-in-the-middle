import styled from '@emotion/styled';
import { SelectHTMLAttributes } from 'react';

/**
 * Option type for Select component
 */
export interface SelectOption {
  /**
   * The value of the option
   */
  value: string | number;

  /**
   * The label displayed for the option
   */
  label: string;

  /**
   * Whether the option is disabled
   */
  disabled?: boolean;
}

/**
 * Props for the Select component
 */
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Array of options to display in the select
   */
  options: SelectOption[];

  /**
   * The size of the select input
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Whether the select has an error state
   * @default false
   */
  hasError?: boolean;

  /**
   * Whether the select should take full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Placeholder text when no option is selected
   */
  placeholder?: string;

  /**
   * Label for the select input
   */
  label?: string;

  /**
   * Helper text displayed below the select
   */
  helperText?: string;
}

const SelectWrapper = styled.div<{ fullWidth?: boolean }>`
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

const StyledSelect = styled.select<{
  selectSize?: 'small' | 'medium' | 'large';
  hasError?: boolean;
  fullWidth?: boolean;
}>`
  font-family: inherit;
  border-radius: 6px;
  border: 2px solid #d1d5db;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: #333;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;

  /* Size variants */
  ${({ selectSize = 'medium' }) => {
    switch (selectSize) {
      case 'small':
        return `
          padding: 6px 12px;
          font-size: 14px;
        `;
      case 'large':
        return `
          padding: 14px 16px;
          font-size: 18px;
        `;
      case 'medium':
      default:
        return `
          padding: 10px 14px;
          font-size: 16px;
        `;
    }
  }}

  /* Full width */
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  /* Error state */
  ${({ hasError }) =>
    hasError &&
    `
    border-color: #dc3545;

    &:focus {
      border-color: #dc3545;
      outline: none;
      box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
    }
  `}

  /* Hover state */
  &:hover:not(:disabled) {
    border-color: #9ca3af;
  }

  /* Focus state */
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  /* Disabled state */
  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Placeholder styling */
  &:invalid {
    color: #9ca3af;
  }
`;

const HelperText = styled.span<{ hasError?: boolean }>`
  font-size: 12px;
  color: ${({ hasError }) => (hasError ? '#dc3545' : '#6b7280')};
`;

/**
 * A versatile Select component with multiple sizes and states
 *
 * @example
 * ```tsx
 * <Select
 *   label="Choose an option"
 *   options={[
 *     { value: '1', label: 'Option 1' },
 *     { value: '2', label: 'Option 2' }
 *   ]}
 *   placeholder="Select an option"
 *   onChange={handleChange}
 * />
 * ```
 */
export const Select = ({
  options,
  size = 'medium',
  hasError = false,
  fullWidth = false,
  placeholder,
  label,
  helperText,
  disabled,
  id,
  ...props
}: SelectProps) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <SelectWrapper fullWidth={fullWidth}>
      {label && <Label htmlFor={selectId}>{label}</Label>}
      <StyledSelect
        id={selectId}
        selectSize={size}
        hasError={hasError}
        fullWidth={fullWidth}
        disabled={disabled}
        {...props}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {helperText && <HelperText hasError={hasError}>{helperText}</HelperText>}
    </SelectWrapper>
  );
};
