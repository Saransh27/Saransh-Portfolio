'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Example styled component using CSS-in-JS
export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.md};

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.sm};
  }
`;

export const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-weight: 600;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.variant === 'primary'
      ? css`
          background-color: ${props.theme.colors.primary};
          color: ${props.theme.colors.background};

          &:hover {
            opacity: 0.9;
          }
        `
      : css`
          background-color: ${props.theme.colors.secondary};
          color: ${props.theme.colors.foreground};
          border: 1px solid ${props.theme.colors.border};

          &:hover {
            background-color: ${props.theme.colors.accent};
          }
        `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledCard = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  padding: ${(props) => props.theme.spacing.lg};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const StyledHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.foreground};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

export const StyledText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.muted};
`;

// Utility CSS function for inline styles
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const gridLayout = (columns: number = 3) => css`
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
