import styles from "@/styles/page1.module.css";

export const Page1 = () => {
  return (
    <div className={styles.profile}>
      <header className={styles.header}>
        <h3 className={styles.h3}>Khulan Purevdavaa</h3>
        <div className={styles.headerlink}>
          <a className={styles.side} href="">
            Work
          </a>
          <a className={styles.side} href="">
            About
          </a>
          <a className={styles.side} href="">
            Contact
          </a>
        </div>
      </header>
      <div className={styles.hello}>
        <div className={styles.title}>
          <h4 className={styles.name}> HI, I AM KHULAN PUREVDAVAA.</h4>
          <p className={styles.bio}>
            A beginner front-end developer based in Ulaanbaatar Mongolia,
            passionate about creating accessible and user-friendly websites.
          </p>
          <div className={styles.links}>
            <a className={styles.contactme} href="">
              Contact Me
            </a>
            <a href="">
              <img src="./images/github.png" alt="" />
            </a>
            <a href="">
              <img src="./images/linkedin.png" alt="" />
            </a>
          </div>
        </div>
        <img
          className={styles.profilepic}
          src="https://www.shutterstock.com/image-photo/happy-cheerful-45-year-old-600nw-2353012797.jpg"
          alt=""
        />
      </div>

      <div className={styles.line}></div>

      <div className={styles.projectTitle}>
        <h5 className={styles.h5}>Featured Projects</h5>
        <p className={styles.projectDescription}>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
    </div>
  );
};
