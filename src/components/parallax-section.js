import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMousePosition, usePrefersReducedMotion } from '@hooks';

const StyledParallaxSection = styled.section`
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;

  .parallax-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(100, 255, 218, 0.05) 0%,
      transparent 50%
    );
    pointer-events: none;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  &:hover .parallax-bg {
    opacity: 1;
  }
`;

const ParallaxSection = ({ children, intensity = 0.01, className, ...props }) => {
  const { x, y } = useMousePosition();
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) {
      return;
    }

    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (x - centerX) * intensity;
    const deltaY = (y - centerY) * intensity;

    sectionRef.current.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;

    if (bgRef.current) {
      const relativeX = ((x - rect.left) / rect.width) * 100;
      const relativeY = ((y - rect.top) / rect.height) * 100;
      bgRef.current.style.setProperty('--mouse-x', `${relativeX}%`);
      bgRef.current.style.setProperty('--mouse-y', `${relativeY}%`);
    }
  }, [x, y, intensity, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <section className={className} {...props}>
        {children}
      </section>
    );
  }

  return (
    <StyledParallaxSection ref={sectionRef} className={className} {...props}>
      <div ref={bgRef} className="parallax-bg" />
      {children}
    </StyledParallaxSection>
  );
};

ParallaxSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  intensity: PropTypes.number,
};

ParallaxSection.defaultProps = {
  intensity: 0.01,
};

export default ParallaxSection;
