import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { useLanguage } from '~/components/language-provider';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => {
  const { dictionary } = useLanguage();

  return (
    <footer className={classes(styles.footer, className)}>
      <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
        <Link secondary className={styles.link} href="/humans.txt" target="_self">
          {dictionary.footer.craftedBy}
        </Link>
      </Text>
    </footer>
  );
};
