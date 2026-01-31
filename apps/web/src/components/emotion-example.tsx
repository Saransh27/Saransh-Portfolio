'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'next/link';

const ExampleContainer = styled.div`
  padding: ${(props) => props.theme.spacing.xl};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: ${(props) => props.theme.borderRadius.lg};
  margin: ${(props) => props.theme.spacing.lg} 0;
`;

const ExampleHeading = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const ExampleText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
`;

const AnimatedBox = styled.div`
  background-color: white;
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin-top: ${(props) => props.theme.spacing.md};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    text-decoration: underline;
  }
`;

export default function EmotionExample() {
  return (
    <ExampleContainer>
      <ExampleHeading>CSS-in-JS with Emotion 🎨</ExampleHeading>
      <ExampleText>
        This component is styled using Emotion CSS-in-JS. It supports theming,
        TypeScript, and works seamlessly with Next.js 16 and React 19!
      </ExampleText>
      <AnimatedBox>
        <p>
          <strong>Hover me!</strong> This box has animations powered by Emotion.
        </p>
        <StyledLink href="/about">Learn more →</StyledLink>
      </AnimatedBox>
    </ExampleContainer>
  );
}
