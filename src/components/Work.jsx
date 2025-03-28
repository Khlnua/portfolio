import styles from "@/styles/work.module.css";

export const Work = ({ project }) => {
  const { name, title, image, githubLink, projectLink } = project;

  return (
    <div
      style={{ width: "1220px", height: "600px" }}
      className={styles.projectList}
    >
      <div className={styles.projectpic}>
        <img
          style={{
            width: "486px",
            height: "347px",
            borderRadius: "12px",
            border: "2px solid black",
          }}
          src={image}
          alt=""
        />
      </div>
      <div className={styles.aboutProject}>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: "500",
            fontSize: "32px",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: "400",
            fontSize: "18px",
            color: "#c7c7c7",
            paddingRight: "20px",
          }}
        >
          {title}
        </p>
        <div style={{ display: "flex", gap: "30px" }}>
          <a
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: "700",
              fontSize: "16px",
              color: " #D3E97A",
            }}
            href={projectLink}
          >
            LIVE DEMO
          </a>
          <a
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: "700",
              fontSize: "16px",
              color: " #D3E97A",
            }}
            href={githubLink}
          >
            SEE ON GITHUB
          </a>
        </div>
      </div>
    </div>
  );
};
