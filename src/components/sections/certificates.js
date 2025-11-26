import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledCertificatesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .certificates-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    position: relative;
    margin-top: 50px;
    width: 100%;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-gap: 15px;
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 15px;
    }
  }
`;

const StyledCertificate = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .certificate-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .certificate-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
    border: 1px solid transparent;

    &:hover {
      border-color: rgba(100, 255, 218, 0.1);
    }
  }

  .certificate-image-wrapper {
    width: 100%;
    margin-bottom: 20px;
    border-radius: var(--border-radius);
    overflow: hidden;
    background-color: var(--navy);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);

      &:hover {
        opacity: 0.8;
      }
    }

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: var(--border-radius);
    }
  }

  .certificate-info {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .certificate-name {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    font-weight: 600;
    background: none !important;
    -webkit-background-clip: unset !important;
    -webkit-text-fill-color: unset !important;
    line-height: 1.3;
  }

  .certificate-issuer {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    margin-bottom: 15px;
    background: none !important;
    -webkit-background-clip: unset !important;
    -webkit-text-fill-color: unset !important;
  }

  .certificate-link {
    ${({ theme }) => theme.mixins.flexCenter};
    margin-top: auto;
    padding-top: 15px;
    color: var(--light-slate);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    transition: var(--transition);

    &:hover {
      color: var(--green);
    }

    svg {
      width: 16px;
      height: 16px;
      margin-left: 8px;
    }
  }
`;

const Certificates = () => {
  const data = useStaticQuery(graphql`
    query {
      certificates: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/certificates/" } }
        sort: { frontmatter: { order: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              name
              issuer
              url
              image
              order
            }
          }
        }
      }
    }
  `);

  const revealTitle = useRef(null);
  const revealCertificates = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealCertificates.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const certificates = data.certificates.edges.filter(({ node }) => node);

  const renderCertificateImage = (image, name) => {
    if (!image) {
      return null;
    }
    return <img src={image} alt={`${name} Certificate`} />;
  };

  const certificateInner = node => {
    const { frontmatter } = node;
    const { name, issuer, url, image } = frontmatter;

    return (
      <div className="certificate-inner">
        <div className="certificate-image-wrapper">
          <a href={url} target="_blank" rel="noreferrer" aria-label={`View ${name} certificate`}>
            {renderCertificateImage(image, name)}
          </a>
        </div>

        <div className="certificate-info">
          <h3 className="certificate-name">{name}</h3>
          <div className="certificate-issuer">{issuer}</div>
          <a href={url} target="_blank" rel="noreferrer" className="certificate-link">
            View Certificate
            <Icon name="External" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <StyledCertificatesSection id="certificates">
      <h2 className="numbered-heading" ref={revealTitle}>
        Certificates
      </h2>

      <ul className="certificates-grid">
        {prefersReducedMotion ? (
          <>
            {certificates &&
              certificates.map(({ node }, i) => (
                <StyledCertificate key={i}>{certificateInner(node)}</StyledCertificate>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {certificates &&
              certificates.map(({ node }, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={300} exit={false}>
                  <StyledCertificate
                    key={i}
                    ref={el => (revealCertificates.current[i] = el)}
                    style={{
                      transitionDelay: `${i * 100}ms`,
                    }}>
                    {certificateInner(node)}
                  </StyledCertificate>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>
    </StyledCertificatesSection>
  );
};

export default Certificates;
