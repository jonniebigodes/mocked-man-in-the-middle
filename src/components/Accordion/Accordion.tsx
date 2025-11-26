import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode, useState } from 'react';

/**
 * Item structure for Accordion component
 */
export interface AccordionItem {
  /**
   * Unique identifier for the accordion item
   */
  id: string;

  /**
   * The title/header of the accordion item
   */
  title: ReactNode;

  /**
   * The content to display when expanded
   */
  content: ReactNode;

  /**
   * Whether this item is disabled
   */
  disabled?: boolean;
}

/**
 * Props for the Accordion component
 */
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Array of accordion items
   */
  items: AccordionItem[];

  /**
   * Whether multiple items can be open at once
   * @default false
   */
  allowMultiple?: boolean;

  /**
   * Initially expanded item IDs
   */
  defaultExpandedIds?: string[];

  /**
   * Controlled expanded item IDs
   */
  expandedIds?: string[];

  /**
   * Callback when expansion state changes
   */
  onExpandedChange?: (expandedIds: string[]) => void;

  /**
   * The variant style of the accordion
   * @default 'default'
   */
  variant?: 'default' | 'bordered' | 'separated';

  /**
   * Whether to show dividers between items
   * @default true
   */
  showDividers?: boolean;
}

const AccordionContainer = styled.div<{
  variant?: 'default' | 'bordered' | 'separated';
}>`
  width: 100%;

  ${({ variant = 'default' }) => {
    switch (variant) {
      case 'bordered':
        return `
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
        `;
      case 'separated':
        return `
          display: flex;
          flex-direction: column;
          gap: 12px;
        `;
      case 'default':
      default:
        return ``;
    }
  }}
`;

const AccordionItemContainer = styled.div<{
  variant?: 'default' | 'bordered' | 'separated';
  isDisabled?: boolean;
}>`
  ${({ variant }) =>
    variant === 'separated' &&
    `
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
  `}

  ${({ isDisabled }) =>
    isDisabled &&
    `
    opacity: 0.6;
    pointer-events: none;
  `}
`;

const AccordionHeader = styled.button<{
  isExpanded?: boolean;
  variant?: 'default' | 'bordered' | 'separated';
  showDivider?: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  text-align: left;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f9fafb;
  }

  &:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: -2px;
  }

  ${({ isExpanded, showDivider, variant }) =>
    isExpanded && showDivider && variant !== 'separated' &&
    `
    border-bottom: 1px solid #e5e7eb;
  `}

  ${({ variant }) =>
    variant === 'default' &&
    `
    &:not(:first-of-type) {
      border-top: 1px solid #e5e7eb;
    }
  `}
`;

const AccordionTitle = styled.span`
  flex: 1;
`;

const AccordionIcon = styled.span<{ isExpanded?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease-in-out;
  color: #6b7280;

  ${({ isExpanded }) =>
    isExpanded &&
    `
    transform: rotate(180deg);
  `}

  &::before {
    content: '▼';
    font-size: 12px;
  }
`;

const AccordionContent = styled.div<{
  isExpanded?: boolean;
  showDivider?: boolean;
}>`
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: #ffffff;

  ${({ isExpanded }) => {
    if (isExpanded) {
      return `
        max-height: 1000px;
        opacity: 1;
      `;
    }
    return `
      max-height: 0;
      opacity: 0;
    `;
  }}

  ${({ showDivider, isExpanded }) =>
    showDivider && isExpanded &&
    `
    border-bottom: 1px solid #e5e7eb;
  `}
`;

const AccordionContentInner = styled.div`
  padding: 16px 20px;
  color: #374151;
  font-size: 14px;
  line-height: 1.6;
`;

/**
 * A versatile Accordion component for collapsible content sections
 *
 * @example
 * ```tsx
 * <Accordion
 *   items={[
 *     {
 *       id: '1',
 *       title: 'Section 1',
 *       content: 'Content for section 1'
 *     },
 *     {
 *       id: '2',
 *       title: 'Section 2',
 *       content: 'Content for section 2'
 *     }
 *   ]}
 *   allowMultiple
 *   variant="bordered"
 * />
 * ```
 */
export const Accordion = ({
  items,
  allowMultiple = false,
  defaultExpandedIds = [],
  expandedIds: controlledExpandedIds,
  onExpandedChange,
  variant = 'default',
  showDividers = true,
  ...props
}: AccordionProps) => {
  const [internalExpandedIds, setInternalExpandedIds] = useState<string[]>(defaultExpandedIds);

  const isControlled = controlledExpandedIds !== undefined;
  const expandedIds = isControlled ? controlledExpandedIds : internalExpandedIds;

  const handleToggle = (itemId: string) => {
    let newExpandedIds: string[];

    if (expandedIds.includes(itemId)) {
      newExpandedIds = expandedIds.filter((id) => id !== itemId);
    } else {
      if (allowMultiple) {
        newExpandedIds = [...expandedIds, itemId];
      } else {
        newExpandedIds = [itemId];
      }
    }

    if (!isControlled) {
      setInternalExpandedIds(newExpandedIds);
    }

    onExpandedChange?.(newExpandedIds);
  };

  return (
    <AccordionContainer variant={variant} {...props}>
      {items.map((item) => {
        const isExpanded = expandedIds.includes(item.id);

        return (
          <AccordionItemContainer
            key={item.id}
            variant={variant}
            isDisabled={item.disabled}
          >
            <AccordionHeader
              onClick={() => handleToggle(item.id)}
              isExpanded={isExpanded}
              variant={variant}
              showDivider={showDividers}
              disabled={item.disabled}
              aria-expanded={isExpanded}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-header-${item.id}`}
            >
              <AccordionTitle>{item.title}</AccordionTitle>
              <AccordionIcon isExpanded={isExpanded} />
            </AccordionHeader>
            <AccordionContent
              isExpanded={isExpanded}
              showDivider={showDividers && variant !== 'separated'}
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-header-${item.id}`}
            >
              <AccordionContentInner>{item.content}</AccordionContentInner>
            </AccordionContent>
          </AccordionItemContainer>
        );
      })}
    </AccordionContainer>
  );
};
