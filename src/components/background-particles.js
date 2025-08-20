import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.7;
  }
`;

const StyledParticles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--green);
    border-radius: 50%;
    opacity: 0.3;
    animation: ${float} 6s ease-in-out infinite;

    &:nth-child(1) {
      top: 20%;
      left: 10%;
      animation-delay: 0s;
      animation-duration: 8s;
    }

    &:nth-child(2) {
      top: 60%;
      left: 80%;
      animation-delay: 1s;
      animation-duration: 10s;
    }

    &:nth-child(3) {
      top: 40%;
      left: 20%;
      animation-delay: 2s;
      animation-duration: 7s;
    }

    &:nth-child(4) {
      top: 80%;
      left: 70%;
      animation-delay: 3s;
      animation-duration: 9s;
    }

    &:nth-child(5) {
      top: 30%;
      left: 90%;
      animation-delay: 4s;
      animation-duration: 6s;
    }

    &:nth-child(6) {
      top: 70%;
      left: 30%;
      animation-delay: 5s;
      animation-duration: 8s;
    }

    &:nth-child(7) {
      top: 10%;
      left: 60%;
      animation-delay: 6s;
      animation-duration: 7s;
    }

    &:nth-child(8) {
      top: 90%;
      left: 40%;
      animation-delay: 7s;
      animation-duration: 9s;
    }

    &:nth-child(9) {
      top: 50%;
      left: 5%;
      animation-delay: 8s;
      animation-duration: 6s;
    }

    &:nth-child(10) {
      top: 15%;
      left: 85%;
      animation-delay: 9s;
      animation-duration: 8s;
    }
  }

  .particle-pink {
    background: var(--pink);
    width: 3px;
    height: 3px;
  }

  .particle-blue {
    background: var(--blue);
    width: 2px;
    height: 2px;
  }
`;

const BackgroundParticles = () => (
  <StyledParticles>
    <div className="particle"></div>
    <div className="particle particle-pink"></div>
    <div className="particle particle-blue"></div>
    <div className="particle"></div>
    <div className="particle particle-pink"></div>
    <div className="particle particle-blue"></div>
    <div className="particle"></div>
    <div className="particle particle-pink"></div>
    <div className="particle particle-blue"></div>
    <div className="particle"></div>
  </StyledParticles>
);

export default BackgroundParticles;
