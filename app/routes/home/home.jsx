import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import localMarketTexture from '~/assets/Proyecto1-2.png';
import localMarketTextureLarge from '~/assets/Proyecto1.png';
import fitCoachTexture from '~/assets/FitCoachFoto.png';
import fitCoachTexture2 from '~/assets/FitCoach2.png';
import cinemateTexture from '~/assets/Cinemate.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { TechStack } from './tech-stack';
import { Profile } from './profile';
import { Experience } from './experience';
import { ProjectSummary } from './project-summary';
import { useLanguage } from '~/components/language-provider';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Full Stack + AI Automation',
    description: `Portfolio de ${config.name} — Desarrollador Full Stack (React/Node.js) especializado en arquitecturas de micro-frontends y flujos de automatización impulsados por IA.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const { dictionary } = useLanguage();
  const intro = useRef();
  const techStack = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();
  const experienceRef = useRef();

  useEffect(() => {
    const sections = [intro, techStack, projectOne, projectTwo, projectThree, details, experienceRef];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <TechStack 
        id="tech-stack" 
        sectionRef={techStack} 
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title={dictionary.projects.localmarket.title}
        description={dictionary.projects.localmarket.description}
        buttonText={dictionary.projectSummary.viewProject}
        buttonLink="/projects/localmarket"
        model={{
          type: 'laptop',
          alt: 'LocalMarket screenshot',
          textures: [
            {
              srcSet: `${localMarketTexture} 800w, ${localMarketTextureLarge} 1920w`,
              placeholder: localMarketTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title={dictionary.projects.fitcoach.title}
        description={dictionary.projects.fitcoach.description}
        buttonText={dictionary.projectSummary.viewProject}
        buttonLink="/projects/fitcoach"
        model={{
          type: 'phone',
          alt: 'FitCoach login screen',
          textures: [
            {
              srcSet: `${fitCoachTexture} 375w, ${fitCoachTexture} 750w`,
              placeholder: fitCoachTexture,
            },
            {
              srcSet: `${fitCoachTexture2} 375w, ${fitCoachTexture2} 750w`,
              placeholder: fitCoachTexture2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title={dictionary.projects.cinemate.title}
        description={dictionary.projects.cinemate.description}
        buttonText={dictionary.projectSummary.viewProject}
        buttonLink="/projects/cinemate"
        model={{
          type: 'laptop',
          alt: 'Cinemate screenshot',
          textures: [
            {
              srcSet: `${cinemateTexture} 800w, ${cinemateTexture} 1920w`,
              placeholder: cinemateTexture,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Experience
        sectionRef={experienceRef}
        visible={visibleSections.includes(experienceRef.current)}
        id="experience"
      />
      <Footer />
    </div>
  );
};
