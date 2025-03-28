export const AboutMe = () => {
  return (
    <div style={{}}>
      <div
        style={{
          marginTop: "100px",
          height: "1px",
          width: "100%",
          backgroundColor: "#484848",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          marginLeft: "70px",
          marginTop: "70px",
          justifyContent: "space-around",
        }}
      >
        <p
          style={{
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: "400",
            fontSize: "100px",
            width: "310px",
          }}
        >
          {" "}
          ABOUT ME{" "}
        </p>
        <div
          style={{
            paddingTop: "100px",
            width: "700px",
            height: "600px",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: "500",
              fontSize: "32px",
            }}
          >
            I am a front-end developer based in Ulaanbaatar. Has Math and
            Physics background.{" "}
          </p>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: "400",
              fontSize: "18px",
              color: "#C7C7C7",
            }}
          >
            I am a front-end developer based in Ulaanbaatar looking for exciting
            opportunities. Has mathematic and physics background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I'm exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy editing
            videos, photography and knitting. Learning more to improve skill.
          </p>
          <a
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: "700",
              fontSize: "16px",
              color: " #D3E97A",
            }}
            href=""
          >
            MORE ABOUT ME
          </a>
        </div>
      </div>
      <div
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "#484848",
        }}
      ></div>
    </div>
  );
};
