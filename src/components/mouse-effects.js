import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useMousePosition, usePrefersReducedMotion } from '@hooks';

const StyledMouseEffects = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;

  .mouse-glow {
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(100, 255, 218, 0.1) 0%,
      rgba(245, 125, 255, 0.05) 30%,
      transparent 70%
    );
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.1s ease-out;
    filter: blur(20px);
  }

  .mouse-trail {
    position: absolute;
    width: 6px;
    height: 6px;
    background: var(--green);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.6;
    transition: all 0.05s ease-out;
    filter: blur(1px);
  }
`;

const MouseEffects = () => {
  const { x, y } = useMousePosition();
  const prefersReducedMotion = usePrefersReducedMotion();
  const glowRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    if (glowRef.current) {
      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
    }

    if (trailRef.current) {
      trailRef.current.style.left = `${x}px`;
      trailRef.current.style.top = `${y}px`;
    }
  }, [x, y, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <StyledMouseEffects>
      <div ref={glowRef} className="mouse-glow" />
      <div ref={trailRef} className="mouse-trail" />
    </StyledMouseEffects>
  );
};

export default MouseEffects;
