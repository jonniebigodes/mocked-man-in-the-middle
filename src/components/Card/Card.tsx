import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

/**
 * Props for the Card component
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The variant style of the card
   * @default 'default'
   */
  variant?: 'default' | 'elevated' | 'outlined';

  /**
   * The padding size of the card
   * @default 'medium'
   */
  padding?: 'none' | 'small' | 'medium' | 'large';

  /**
   * Whether the card should be hoverable with elevation effect
   * @default false
   */
  hoverable?: boolean;

  /**
   * Whether the card should be clickable (shows pointer cursor)
   * @default false
   */
  clickable?: boolean;

  /**
   * The header content of the card
   */
  header?: ReactNode;

  /**
   * The footer content of the card
   */
  footer?: ReactNode;

  /**
   * The main content of the card
   */
  children: ReactNode;
}

const StyledCard = styled.div<{
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
  hoverable?: boolean;
  clickable?: boolean;
}>`
  border-radius: 12px;
  background-color: white;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  /* Variant styles */
  ${({ variant = 'default' }) => {
    switch (variant) {
      case 'elevated':
        return `
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                      0 2px 4px -1px rgba(0, 0, 0, 0.06);
        `;
      case 'outlined':
        return `
          border: 2px solid #e5e7eb;
          box-shadow: none;
        `;
      case 'default':
      default:
        return `
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
                      0 1px 2px 0 rgba(0, 0, 0, 0.06);
        `;
    }
  }}

  /* Padding variants */
  ${({ padding = 'medium' }) => {
    switch (padding) {
      case 'none':
        return `padding: 0;`;
      case 'small':
        return `padding: 12px;`;
      case 'large':
        return `padding: 32px;`;
      case 'medium':
      default:
        return `padding: 20px;`;
    }
  }}

  /* Hoverable effect */
  ${({ hoverable }) =>
    hoverable &&
    `
    &:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                  0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transform: translateY(-2px);
    }
  `}

  /* Clickable cursor */
  ${({ clickable }) =>
    clickable &&
    `
    cursor: pointer;
  `}

  /* Focus visible */
  ${({ clickable }) =>
    clickable &&
    `
    &:focus-visible {
      outline: 2px solid #007bff;
      outline-offset: 2px;
    }
  `}
`;

const CardHeader = styled.div<{ hasPadding?: boolean }>`
  ${({ hasPadding }) =>
    hasPadding &&
    `
    padding-bottom: 16px;
    border-bottom: 1px solid #e5e7eb;
  `}
  font-weight: 600;
  font-size: 18px;
  color: #111827;
`;

const CardContent = styled.div<{ hasPadding?: boolean }>`
  flex: 1;
  ${({ hasPadding }) =>
    hasPadding &&
    `
    padding-top: 16px;
    padding-bottom: 16px;
  `}
  color: #374151;
`;

const CardFooter = styled.div<{ hasPadding?: boolean }>`
  ${({ hasPadding }) =>
    hasPadding &&
    `
    padding-top: 16px;
    border-top: 1px solid #e5e7eb;
  `}
  color: #6b7280;
  font-size: 14px;
`;

/**
 * A versatile Card component with multiple variants and customizable sections
 *
 * @example
 * ```tsx
 * <Card
 *   variant="elevated"
 *   padding="medium"
 *   hoverable
 *   header="Card Title"
 *   footer="Card Footer"
 * >
 *   Card content goes here
 * </Card>
 * ```
 */
export const Card = ({
  variant = 'default',
  padding = 'medium',
  hoverable = false,
  clickable = false,
  header,
  footer,
  children,
  ...props
}: CardProps) => {
  const hasPadding = padding !== 'none';

  return (
    <StyledCard
      variant={variant}
      padding={padding}
      hoverable={hoverable}
      clickable={clickable}
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      {...props}
    >
      {header && <CardHeader hasPadding={hasPadding}>{header}</CardHeader>}
      <CardContent hasPadding={hasPadding && (!!header || !!footer)}>
        {children}
      </CardContent>
      {footer && <CardFooter hasPadding={hasPadding}>{footer}</CardFooter>}
    </StyledCard>
  );
};
