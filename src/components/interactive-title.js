import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMousePosition, usePrefersReducedMotion } from '@hooks';

const StyledInteractiveTitle = styled.div`
  position: relative;
  display: inline-block;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;

  .title-content {
    position: relative;
    z-index: 2;
  }

  .title-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--green) 0%, transparent 100%);
    opacity: 0.1;
    filter: blur(8px);
    transform: translateZ(-1px);
    z-index: 1;
  }
`;

const InteractiveTitle = ({ children, className, intensity = 0.02 }) => {
  const { x, y } = useMousePosition();
  const prefersReducedMotion = usePrefersReducedMotion();
  const titleRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || !titleRef.current) {
      return;
    }

    const rect = titleRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (x - centerX) * intensity;
    const deltaY = (y - centerY) * intensity;

    titleRef.current.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg)`;
  }, [x, y, intensity, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <StyledInteractiveTitle ref={titleRef} className={className}>
      <div className="title-shadow" />
      <div className="title-content">{children}</div>
    </StyledInteractiveTitle>
  );
};

InteractiveTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  intensity: PropTypes.number,
};

InteractiveTitle.defaultProps = {
  intensity: 0.02,
};

export default InteractiveTitle;
