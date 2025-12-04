import styles from './Home.module.scss';

// src/pages/home.tsx
// WIP: Placeholder home page

const HomePage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>Home — Work in Progress</h1>
        <p className={styles.description}>
          This is a placeholder home page. More content coming soon.
        </p>
        <a href='/tabs' className={styles.link}>
          Go to Tabs documentation
        </a>
      </section>
    </main>
  );
};

export default HomePage;
