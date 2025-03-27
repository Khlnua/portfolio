import styles from "@/styles/work.module.css";

export const Work = () => {
  return (
    <div className={styles.projectArea}>
      <div className={styles.projectTitle}>
        <h5>Featured Projects</h5>
        <p>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </div>
      <div className={styles.projectList}></div>
    </div>
  );
};
