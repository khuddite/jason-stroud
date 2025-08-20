import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 250px;
    height: 250px;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: transparent;
    padding: 6px;
    transition: var(--transition);
    border: 2px solid var(--green);
    background: transparent;

    &:hover,
    &:focus {
      outline: 0;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(100, 255, 218, 0.1);

      .img {
        filter: grayscale(60%) contrast(1.05);
        mix-blend-mode: normal;
      }

      &:before {
        opacity: 0.3;
        transform: scale(1.02);
      }
    }

    .img {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      mix-blend-mode: multiply;
      filter: grayscale(80%) contrast(1.1);
      transition: var(--transition);
      z-index: 2;
      object-fit: cover;
    }

    &:before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: var(--green);
      border-radius: 50%;
      z-index: -1;
      opacity: 0.1;
      transition: var(--transition);
      filter: blur(15px);
    }
  }

  /* Subtle accent line */
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 1px;
    background: var(--green);
    opacity: 0.4;
    transition: var(--transition);
  }

  &:hover::after {
    width: 40px;
    opacity: 0.6;
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['TypeScript', 'Python', 'React', 'React Native', 'Node.js', 'Ruby on Rails'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Jason, and I enjoy creating web and mobile applications that bring
              ideas to life on the internet. My journey in development began over a decade ago,
              fuelled by curiosity and a drive to understand how technology shapes the way we
              connect. Since then, I've worked across startups, open-source projects, and
              large-scale applications—always prioritising quality, scalability, and accessibility.
              I'm passionate about contributing to developer communities, constantly sharpening my
              skills, and building polished, reliable products through teamwork and collaboration.
              <br />
              <br />
              Outside of coding, I refresh my mind through sports and stay curious about the
              evolving world of technology.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
