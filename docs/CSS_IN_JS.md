# CSS-in-JS with Emotion

This project uses **Emotion** for CSS-in-JS styling alongside Tailwind CSS.

## Features

✅ **Emotion v11** - Modern CSS-in-JS library
✅ **TypeScript Support** - Fully typed theme system
✅ **Server-Side Rendering** - Optimized for Next.js 16
✅ **Theme System** - Light/dark mode with typed themes
✅ **Performance** - Zero-runtime overhead with Next.js compiler

## Usage

### Basic Styled Components

```tsx
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  
  &:hover {
    opacity: 0.9;
  }
`;
```

### Using CSS Prop

```tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export function Component() {
  return (
    <div css={css`
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 2rem;
      border-radius: 1rem;
    `}>
      Styled with css prop
    </div>
  );
}
```

### Using Pre-built Components

```tsx
import { StyledButton, StyledCard, StyledContainer } from '@/components/styled';

export function MyComponent() {
  return (
    <StyledContainer>
      <StyledCard>
        <StyledButton variant="primary">Click me</StyledButton>
      </StyledCard>
    </StyledContainer>
  );
}
```

### Accessing Theme

```tsx
import { useTheme } from '@emotion/react';

export function ThemedComponent() {
  const theme = useTheme();
  
  return (
    <div style={{ color: theme.colors.primary }}>
      Themed text
    </div>
  );
}
```

## Theme Structure

```typescript
{
  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    muted: string;
    accent: string;
    destructive: string;
    border: string;
  },
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  },
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  }
}
```

## Files

- `src/lib/theme.ts` - Theme definitions (light/dark)
- `src/lib/emotion.d.ts` - TypeScript theme types
- `src/components/emotion-registry.tsx` - SSR setup
- `src/components/styled/index.ts` - Pre-built styled components
- `src/components/emotion-example.tsx` - Example usage

## Mixing with Tailwind

You can use both Emotion and Tailwind together:

```tsx
import styled from '@emotion/styled';

const Card = styled.div`
  /* Emotion styles */
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

// Use with Tailwind classes
<Card className="p-6 bg-white rounded-lg shadow-lg">
  Best of both worlds!
</Card>
```

## Benefits

1. **Type Safety** - Full TypeScript support
2. **Performance** - Optimized by Next.js compiler
3. **Dynamic Styling** - Props-based styling
4. **Theming** - Consistent design system
5. **Developer Experience** - Great IDE autocomplete
