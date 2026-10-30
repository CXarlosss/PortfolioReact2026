import { Section } from '~/components/section';
import { useLanguage } from '~/components/language-provider';
import styles from './tech-stack.module.css';

const techList = [
  { name: 'React', slug: 'react' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'n8n', slug: 'n8n' },
  { name: 'Ollama', slug: 'ollama' },
  { name: 'Angular', slug: 'angular' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
];

export const TechStack = ({ id, sectionRef }) => {
  const { dictionary } = useLanguage();
  
  // We double the list to make the infinite scroll seamless
  const renderList = () => (
    <div className={styles.marqueeContent} aria-hidden="true">
      {techList.map((tech) => (
        <div className={styles.item} key={tech.slug}>
          <div 
            className={styles.icon} 
            style={{ 
              maskImage: `url(https://cdn.simpleicons.org/${tech.slug})`,
              WebkitMaskImage: `url(https://cdn.simpleicons.org/${tech.slug})`
            }} 
            aria-hidden="true"
          />
          <span className={styles.label}>{tech.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <Section
      className={styles.techStack}
      as="section"
      id={id}
      ref={sectionRef}
    >
      <h2 className={styles.title}>
        {dictionary.techStack?.title || 'Tech Stack'}
      </h2>
      <div className={styles.marquee}>
        {/* First list for screen readers and visible content */}
        <div className={styles.marqueeContent}>
          {techList.map((tech) => (
            <div className={styles.item} key={tech.slug}>
              <div 
                className={styles.icon} 
                style={{ 
                  maskImage: `url(https://cdn.simpleicons.org/${tech.slug})`,
                  WebkitMaskImage: `url(https://cdn.simpleicons.org/${tech.slug})`
                }} 
                aria-label={tech.name}
              />
              <span className={styles.label}>{tech.name}</span>
            </div>
          ))}
        </div>
        {/* Second list for seamless scrolling, hidden from screen readers */}
        {renderList()}
      </div>
    </Section>
  );
};
