import styles from './Home.module.scss';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>Fiona's Components</h1>
        <p className={styles.description}>
          This project started as a small test, but I’m deeply interested in
          design systems. I’m using this repo as a work in progress to explore,
          learn, and document my own design components. Eventually, it may serve
          as a portfolio of my journey and experimentation with reusable,
          well-documented UI elements.
        </p>
        <a href='/tabs' className={styles.link}>
          Explore Tabs Documentation
        </a>
      </section>
    </main>
  );
};

export default HomePage;
