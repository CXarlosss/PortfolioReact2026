import localMarketTexture from '~/assets/Proyecto1.png';
import localMarketTexture2 from '~/assets/Proyecto1-2.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';

const title = 'LocalMarket';
const description = 'Digital marketplace designed for extreme performance and local business integration.';
const roles = ['Frontend (Angular 21)', 'TypeScript', 'SSR'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const LocalMarket = () => {
  return (
    <Fragment>
      <ProjectContainer className="localmarket-project">
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
          url="https://flourishing-baklava-adefd3.netlify.app/"
        />
        <ProjectSection padding="top">
          <ProjectSectionColumns>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <ProjectSectionHeading>Context & Challenge</ProjectSectionHeading>
              <ProjectSectionText>
                Digital marketplace designed for extreme performance and local business integration.
                <br /><br />
                <strong>Challenge:</strong> Optimize initial load times and render blocking resources to achieve near-perfect Lighthouse scores.
              </ProjectSectionText>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ProjectImage
                srcSet={`${localMarketTexture} 800w, ${localMarketTexture} 1920w`}
                width={800}
                height={500}
                placeholder={localMarketTexture}
                alt="LocalMarket platform screenshot"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div style={{ display: 'flex', justifyContent: 'center', order: 1 }}>
              <ProjectImage
                srcSet={`${localMarketTexture2} 800w, ${localMarketTexture2} 1920w`}
                width={800}
                height={500}
                placeholder={localMarketTexture2}
                alt="LocalMarket architecture view"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', order: 2 }}>
              <ProjectSectionHeading>Implementation & Impact</ProjectSectionHeading>
              <ProjectSectionText as="ul" style={{ paddingLeft: '1.5rem', marginTop: '1rem', listStyleType: 'disc' }}>
                <li style={{ marginBottom: '1rem' }}>Architected a modern SPA using Angular 21 and robust state management.</li>
                <li style={{ marginBottom: '1rem' }}>Implemented lazy loading and advanced asset optimization.</li>
                <li style={{ marginBottom: '1rem' }}>Configurable Server-Side Rendering (SSR) capabilities for superior SEO.</li>
              </ProjectSectionText>
              <ProjectSectionText>
                <br />
                Delivered a complete end-to-end MVP achieving a 35% load optimization. Awarded 'Best Project' of the cohort for technical execution and vision.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
