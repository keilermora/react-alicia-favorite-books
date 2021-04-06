import styles from "./Footer.module.scss";

const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear();

  return <>
    <footer className={styles.footer}>
      <small>© {currentYear} - The books and their images belongs to their author.</small>
    </footer>
  </>;
};

export default Footer;
