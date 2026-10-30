import { Button } from '~/components/button';
import { useLanguage } from '~/components/language-provider';
import styles from './language-toggle.module.css';

export const LanguageToggle = ({ isMobile, ...rest }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      iconOnly
      className={styles.toggle}
      data-mobile={isMobile}
      aria-label="Toggle language"
      onClick={() => toggleLanguage()}
      {...rest}
    >
      {language === 'es' ? 'EN' : 'ES'}
    </Button>
  );
};
