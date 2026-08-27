'use client';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.15rem;
  font-family: ${({ theme }) => theme.fonts?.heading || 'system-ui, -apple-system, sans-serif'};
  font-weight: 900;
  font-size: ${({ $width }) => {
    if (!$width) return '1.5rem';
    const num = parseInt($width, 10);
    return num > 50 ? '1.75rem' : '1.35rem';
  }};
  letter-spacing: -0.02em;
  user-select: none;
  cursor: pointer;
  line-height: 1;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.05);
  }
`;

const Bracket = styled.span`
  color: ${({ theme, $color }) => $color || theme.colors.accent || '#6366f1'};
  font-weight: 700;
  font-size: 1.15em;
  opacity: 0.95;
  transition: color 0.3s ease;
`;

const Monogram = styled.span`
  color: ${({ theme, $color }) => $color || theme.colors.text || '#ffffff'};
  letter-spacing: 0.08em;
  font-weight: 800;
  transition: color 0.3s ease;
`;

export default function Logo({ width, className, color }) {
  return (
    <LogoContainer className={className} $width={width} $color={color}>
      <Bracket $color={color}>{'{'}</Bracket>
      <Monogram $color={color}>VG</Monogram>
      <Bracket $color={color}>{'}'}</Bracket>
    </LogoContainer>
  );
}
