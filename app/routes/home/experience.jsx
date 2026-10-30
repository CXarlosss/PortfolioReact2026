import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Button } from '~/components/button';
import { useLanguage } from '~/components/language-provider';
import { useState } from 'react';
import styles from './experience.module.css';

export const Experience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const { dictionary } = useLanguage();
  const titleId = `${id}-title`;

  const experiences = dictionary.experience.list || [];

  return (
    <Section
      className={styles.experience}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div ref={nodeRef} style={{ width: '100%' }}>
            
            <Heading level={3} as="h2" align="center" data-visible={visible} style={{ marginBottom: '4rem' }}>
              {dictionary.experience.tag}
            </Heading>

            <div className={styles.timeline}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem} data-visible={visible}>
                  <span className={styles.date}>{exp.date}</span>
                  <Heading level={4} as="h3" className={styles.title}>
                    {exp.title}
                  </Heading>
                  <div className={styles.company}>
                    {exp.company}
                  </div>
                  <Text size="m" as="p" className={styles.description}>
                    {exp.description}
                  </Text>
                </div>
              ))}
            </div>

            <div className={styles.cvContainer} data-visible={visible}>
              <Button 
                href="/cv.pdf" 
                target="_blank" 
                icon="link"
              >
                {dictionary.experience.downloadCV}
              </Button>
            </div>

          </div>
        )}
      </Transition>
    </Section>
  );
};

