import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode } from "react";

/**
 * Props for the Footer component
 */
export interface FooterProps
  extends Omit<HTMLAttributes<HTMLElement>, "content"> {
  /**
   * The copyright text or element
   */
  copyright?: ReactNode;

  /**
   * Links to display in the footer
   */
  links?: ReactNode;

  /**
   * Social media icons or elements
   */
  socialMedia?: ReactNode;

  /**
   * Additional content sections (e.g., columns of links)
   */
  content?: ReactNode;

  /**
   * The variant style of the footer
   * @default 'default'
   */
  variant?: "default" | "minimal" | "bordered";

  /**
   * The layout style of the footer
   * @default 'stacked'
   */
  layout?: "stacked" | "inline" | "columns";

  /**
   * Background color variant
   * @default 'light'
   */
  background?: "light" | "dark" | "transparent";
}

const StyledFooter = styled.footer<{
  variant?: "default" | "minimal" | "bordered";
  layout?: "stacked" | "inline" | "columns";
  background?: "light" | "dark" | "transparent";
}>`
  width: 100%;
  transition: all 0.3s ease-in-out;
  padding: 32px 24px;

  /* Background variants */
  ${({ background = "light" }) => {
    switch (background) {
      case "dark":
        return `
          background-color: #1f2937;
          color: #f3f4f6;
        `;
      case "transparent":
        return `
          background-color: transparent;
          color: #374151;
        `;
      case "light":
      default:
        return `
          background-color: #f9fafb;
          color: #374151;
        `;
    }
  }}

  /* Variant styles */
  ${({ variant = "default" }) => {
    switch (variant) {
      case "minimal":
        return `
          padding: 16px 24px;
        `;
      case "bordered":
        return `
          border-top: 2px solid #e5e7eb;
        `;
      case "default":
      default:
        return ``;
    }
  }}

  /* Layout styles */
  ${({ layout = "stacked" }) => {
    switch (layout) {
      case "inline":
        return `
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        `;
      case "columns":
        return `
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
        `;
      case "stacked":
      default:
        return `
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        `;
    }
  }}

  @media (max-width: 768px) {
    padding: 24px 16px;

    ${({ layout }) =>
      layout === "inline" &&
      `
      flex-direction: column;
      align-items: center;
      text-align: center;
    `}
  }
`;

const ContentSection = styled.div<{
  layout?: "stacked" | "inline" | "columns";
}>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  ${({ layout }) =>
    layout === "inline" &&
    `
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `}
`;

const LinksSection = styled.div<{
  background?: "light" | "dark" | "transparent";
}>`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  a {
    color: ${({ background }) =>
      background === "dark" ? "#d1d5db" : "#6b7280"};
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ background }) =>
        background === "dark" ? "#f3f4f6" : "#111827"};
    }
  }
`;

const SocialMediaSection = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;

const CopyrightSection = styled.div<{
  background?: "light" | "dark" | "transparent";
}>`
  font-size: 14px;
  color: ${({ background }) => (background === "dark" ? "#9ca3af" : "#6b7280")};
`;

/**
 * A versatile Footer component for site navigation and information
 *
 * @example
 * ```tsx
 * <Footer
 *   copyright="© 2024 My Company. All rights reserved."
 *   links={
 *     <>
 *       <a href="/privacy">Privacy Policy</a>
 *       <a href="/terms">Terms of Service</a>
 *       <a href="/contact">Contact</a>
 *     </>
 *   }
 *   socialMedia={
 *     <>
 *       <a href="https://twitter.com">Twitter</a>
 *       <a href="https://facebook.com">Facebook</a>
 *     </>
 *   }
 *   layout="stacked"
 *   background="dark"
 * />
 * ```
 */
export const Footer = ({
  copyright,
  links,
  socialMedia,
  content,
  variant = "default",
  layout = "stacked",
  background = "light",
  ...props
}: FooterProps) => {
  return (
    <StyledFooter
      variant={variant}
      layout={layout}
      background={background}
      {...props}
    >
      {content && <ContentSection layout={layout}>{content}</ContentSection>}
      {links && <LinksSection background={background}>{links}</LinksSection>}
      {socialMedia && <SocialMediaSection>{socialMedia}</SocialMediaSection>}
      {copyright && (
        <CopyrightSection background={background}>{copyright}</CopyrightSection>
      )}
    </StyledFooter>
  );
};
