import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

/**
 * Props for the Divider component
 */
export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The orientation of the divider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The variant style of the divider
   * @default 'solid'
   */
  variant?: 'solid' | 'dashed' | 'dotted';

  /**
   * The thickness of the divider in pixels
   * @default 1
   */
  thickness?: number;

  /**
   * The color of the divider
   * @default '#e5e7eb'
   */
  color?: string;

  /**
   * Spacing around the divider (margin)
   * @default 'medium'
   */
  spacing?: 'none' | 'small' | 'medium' | 'large';

  /**
   * Text or element to display in the center of the divider
   */
  label?: ReactNode;

  /**
   * Alignment of the label
   * @default 'center'
   */
  labelAlign?: 'left' | 'center' | 'right';

  /**
   * Whether the divider should take full width/height
   * @default true
   */
  fullSize?: boolean;
}

const StyledDivider = styled.div<{
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  thickness?: number;
  color?: string;
  spacing?: 'none' | 'small' | 'medium' | 'large';
  fullSize?: boolean;
  hasLabel?: boolean;
}>`
  display: flex;
  align-items: center;
  border: none;

  ${({ orientation = 'horizontal', fullSize = true }) => {
    if (orientation === 'vertical') {
      return `
        flex-direction: column;
        width: auto;
        ${fullSize ? 'height: 100%;' : ''}
        min-height: 24px;
      `;
    }
    return `
      flex-direction: row;
      height: auto;
      ${fullSize ? 'width: 100%;' : ''}
      min-width: 24px;
    `;
  }}

  /* Spacing */
  ${({ spacing = 'medium', orientation = 'horizontal' }) => {
    const spacingValues = {
      none: '0',
      small: '8px',
      medium: '16px',
      large: '24px',
    };

    if (orientation === 'vertical') {
      return `
        margin-left: ${spacingValues[spacing]};
        margin-right: ${spacingValues[spacing]};
      `;
    }
    return `
      margin-top: ${spacingValues[spacing]};
      margin-bottom: ${spacingValues[spacing]};
    `;
  }}

  /* Hide the line when there's a label */
  ${({ hasLabel }) =>
    hasLabel &&
    `
    gap: 12px;
  `}
`;

const DividerLine = styled.div<{
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  thickness?: number;
  color?: string;
  position?: 'before' | 'after' | 'full';
}>`
  ${({ orientation = 'horizontal', thickness = 1, color = '#e5e7eb', variant = 'solid' }) => {
    const borderStyle = variant === 'solid' ? 'solid' : variant === 'dashed' ? 'dashed' : 'dotted';

    if (orientation === 'vertical') {
      return `
        width: ${thickness}px;
        height: 100%;
        border-left: ${thickness}px ${borderStyle} ${color};
      `;
    }
    return `
      height: ${thickness}px;
      width: 100%;
      border-top: ${thickness}px ${borderStyle} ${color};
    `;
  }}

  ${({ position }) => {
    if (position === 'before' || position === 'after') {
      return `flex: 0 1 auto;`;
    }
    return `flex: 1;`;
  }}
`;

const DividerLabel = styled.span<{
  labelAlign?: 'left' | 'center' | 'right';
  orientation?: 'horizontal' | 'vertical';
}>`
  flex-shrink: 0;
  font-size: 14px;
  color: #6b7280;
  white-space: nowrap;
  padding: 0 8px;

  ${({ orientation = 'horizontal' }) => {
    if (orientation === 'vertical') {
      return `
        padding: 8px 0;
      `;
    }
    return `
      padding: 0 8px;
    `;
  }}
`;

/**
 * A versatile Divider component for separating content
 *
 * @example
 * ```tsx
 * // Simple horizontal divider
 * <Divider />
 *
 * // Vertical divider
 * <Divider orientation="vertical" />
 *
 * // With label
 * <Divider label="OR" />
 *
 * // Dashed variant
 * <Divider variant="dashed" spacing="large" />
 * ```
 */
export const Divider = ({
  orientation = 'horizontal',
  variant = 'solid',
  thickness = 1,
  color = '#e5e7eb',
  spacing = 'medium',
  label,
  labelAlign = 'center',
  fullSize = true,
  ...props
}: DividerProps) => {
  const hasLabel = !!label;

  const renderContent = () => {
    if (!hasLabel) {
      return (
        <DividerLine
          orientation={orientation}
          variant={variant}
          thickness={thickness}
          color={color}
          position="full"
        />
      );
    }

    const showLeftLine = labelAlign === 'center' || labelAlign === 'right';
    const showRightLine = labelAlign === 'center' || labelAlign === 'left';

    return (
      <>
        {showLeftLine && (
          <DividerLine
            orientation={orientation}
            variant={variant}
            thickness={thickness}
            color={color}
            position="before"
          />
        )}
        <DividerLabel labelAlign={labelAlign} orientation={orientation}>
          {label}
        </DividerLabel>
        {showRightLine && (
          <DividerLine
            orientation={orientation}
            variant={variant}
            thickness={thickness}
            color={color}
            position="after"
          />
        )}
      </>
    );
  };

  return (
    <StyledDivider
      orientation={orientation}
      variant={variant}
      thickness={thickness}
      color={color}
      spacing={spacing}
      fullSize={fullSize}
      hasLabel={hasLabel}
      role="separator"
      aria-orientation={orientation}
      {...props}
    >
      {renderContent()}
    </StyledDivider>
  );
};
