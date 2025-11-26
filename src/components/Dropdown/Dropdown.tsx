import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

/**
 * Menu item structure for Dropdown component
 */
export interface DropdownMenuItem {
  /**
   * Unique identifier for the menu item
   */
  id: string;

  /**
   * The label to display
   */
  label: ReactNode;

  /**
   * Icon to display before the label
   */
  icon?: ReactNode;

  /**
   * Whether this item is disabled
   */
  disabled?: boolean;

  /**
   * Whether this item is a divider
   */
  isDivider?: boolean;

  /**
   * Click handler for the menu item
   */
  onClick?: () => void;
}

/**
 * Props for the Dropdown component
 */
export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * The trigger element (button, link, etc.)
   */
  trigger: ReactNode;

  /**
   * Array of menu items to display
   */
  items: DropdownMenuItem[];

  /**
   * Position of the dropdown menu
   * @default 'bottom-left'
   */
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

  /**
   * Whether the dropdown is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the dropdown is open (controlled)
   */
  isOpen?: boolean;

  /**
   * Callback when dropdown open state changes
   */
  onOpenChange?: (isOpen: boolean) => void;

  /**
   * Width of the dropdown menu
   */
  menuWidth?: string;
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownTrigger = styled.div<{ isDisabled?: boolean }>`
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ isDisabled }) => (isDisabled ? '0.6' : '1')};
`;

const DropdownMenu = styled.div<{
  isOpen?: boolean;
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  menuWidth?: string;
}>`
  position: absolute;
  z-index: 1000;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  min-width: 200px;
  ${({ menuWidth }) => menuWidth && `width: ${menuWidth};`}
  overflow: hidden;

  /* Position variants */
  ${({ position = 'bottom-left' }) => {
    switch (position) {
      case 'bottom-right':
        return `
          top: calc(100% + 8px);
          right: 0;
        `;
      case 'top-left':
        return `
          bottom: calc(100% + 8px);
          left: 0;
        `;
      case 'top-right':
        return `
          bottom: calc(100% + 8px);
          right: 0;
        `;
      case 'bottom-left':
      default:
        return `
          top: calc(100% + 8px);
          left: 0;
        `;
    }
  }}

  /* Animation */
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen, position = 'bottom-left' }) => {
    const isTop = position.startsWith('top');
    if (isOpen) {
      return 'translateY(0) scale(1)';
    }
    return `translateY(${isTop ? '8px' : '-8px'}) scale(0.95)`;
  }};
  transition: opacity 0.2s ease-in-out,
              transform 0.2s ease-in-out,
              visibility 0.2s ease-in-out;
`;

const MenuItemContainer = styled.div<{
  isDisabled?: boolean;
  isDivider?: boolean;
}>`
  ${({ isDivider }) =>
    isDivider
      ? `
    height: 1px;
    background-color: #e5e7eb;
    margin: 4px 0;
  `
      : `
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    color: #374151;
    font-size: 14px;

    &:hover {
      background-color: #f3f4f6;
    }

    &:active {
      background-color: #e5e7eb;
    }
  `}

  ${({ isDisabled, isDivider }) =>
    isDisabled && !isDivider &&
    `
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
`;

const MenuItemIcon = styled.span`
  display: flex;
  align-items: center;
  color: #6b7280;
  flex-shrink: 0;
`;

const MenuItemLabel = styled.span`
  flex: 1;
`;

/**
 * A versatile Dropdown component for displaying contextual menus
 *
 * @example
 * ```tsx
 * <Dropdown
 *   trigger={<button>Open Menu</button>}
 *   items={[
 *     {
 *       id: '1',
 *       label: 'Edit',
 *       icon: <EditIcon />,
 *       onClick: () => console.log('Edit clicked')
 *     },
 *     {
 *       id: '2',
 *       label: 'Delete',
 *       icon: <DeleteIcon />,
 *       onClick: () => console.log('Delete clicked')
 *     },
 *     {
 *       id: 'divider',
 *       isDivider: true
 *     },
 *     {
 *       id: '3',
 *       label: 'Settings',
 *       onClick: () => console.log('Settings clicked')
 *     }
 *   ]}
 *   position="bottom-left"
 * />
 * ```
 */
export const Dropdown = ({
  trigger,
  items,
  position = 'bottom-left',
  disabled = false,
  isOpen: controlledIsOpen,
  onOpenChange,
  menuWidth,
  ...props
}: DropdownProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (disabled) return;

    const newIsOpen = !isOpen;
    if (!isControlled) {
      setInternalIsOpen(newIsOpen);
    }
    onOpenChange?.(newIsOpen);
  };

  const handleClose = () => {
    if (!isControlled) {
      setInternalIsOpen(false);
    }
    onOpenChange?.(false);
  };

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.disabled || item.isDivider) return;

    item.onClick?.();
    handleClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        handleClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <DropdownContainer ref={dropdownRef} {...props}>
      <DropdownTrigger onClick={handleToggle} isDisabled={disabled}>
        {trigger}
      </DropdownTrigger>
      <DropdownMenu
        isOpen={isOpen}
        position={position}
        menuWidth={menuWidth}
        role="menu"
      >
        {items.map((item) => {
          if (item.isDivider) {
            return (
              <MenuItemContainer key={item.id} isDivider role="separator" />
            );
          }

          return (
            <MenuItemContainer
              key={item.id}
              onClick={() => handleItemClick(item)}
              isDisabled={item.disabled}
              role="menuitem"
              tabIndex={item.disabled ? -1 : 0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleItemClick(item);
                }
              }}
            >
              {item.icon && <MenuItemIcon>{item.icon}</MenuItemIcon>}
              <MenuItemLabel>{item.label}</MenuItemLabel>
            </MenuItemContainer>
          );
        })}
      </DropdownMenu>
    </DropdownContainer>
  );
};
