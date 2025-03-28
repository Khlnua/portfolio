export const Contact = () => {
  return (
    <div
      style={{
        marginLeft: "70px",
        marginRight: "70px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          width: "600px",
          height: "620px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "Bebas Neue, sans-serif",
              fontWeight: "400",
              fontSize: "76px",
              width: "600px",
            }}
          >
            LET'S CONNECT
          </p>
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <p
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "#C7C7C7",
                }}
              >
                Say hello at
              </p>
              <a
                style={{
                  paddingTop: "16px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "white",
                }}
                href="https://mail.google.com/mail"
              >
                khlnua21@gmail.com
              </a>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <p
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "#C7C7C7",
                }}
              >
                For more info, here's my
              </p>
              <a
                style={{
                  paddingTop: "16px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "white",
                }}
                href=""
              >
                resume
              </a>
            </div>
          </div>
          <div style={{ display: "flex", gap: "30px", padding: "10px" }}>
            <a href="">
              <img
                style={{ width: "28px", height: "28px" }}
                src="/images/bxl-linkedin.svg.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                style={{ width: "28px", height: "28px" }}
                src="/images/Vector.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                style={{ width: "28px", height: "28px" }}
                src="/images/Vector (1).png"
                alt=""
              />
            </a>
            <a href="">
              <img
                style={{ width: "28px", height: "28px" }}
                src="/images/bxl-instagram.svg.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: "400",
            fontSize: "18px",
            color: "#C7C7C7",
          }}
        >
          © 2025 Khulan Purevdavaa
        </p>
      </div>
      <div
        style={{
          width: "600px",
          height: "620px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: "400",
            fontSize: "18px",
            color: "#C7C7C7",
          }}
        >
          Name
        </p>
        <input
          style={{
            width: "600px",
            height: "50px",
            backgroundColor: "#1a1a1a",
            border: "1px solid #1a1a1a",
          }}
          type="text"
        />
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: "400",
            fontSize: "18px",
            color: "#C7C7C7",
          }}
        >
          Email
        </p>
        <input
          style={{
            width: "600px",
            height: "50px",
            backgroundColor: "#1a1a1a",
            border: "1px solid #1a1a1a",
          }}
          type="text"
        />
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: "400",
            fontSize: "18px",
            color: "#C7C7C7",
          }}
        >
          Subject
        </p>
        <input
          style={{
            width: "600px",
            height: "50px",
            backgroundColor: "#1a1a1a",
            border: "1px solid #1a1a1a",
          }}
          type="text"
        />
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: "400",
            fontSize: "18px",
            color: "#C7C7C7",
          }}
        >
          Message
        </p>
        <input
          style={{
            width: "600px",
            height: "150px",
            backgroundColor: "#1a1a1a",
            border: "1px solid #1a1a1a",
          }}
          type="text"
        />
        <button
          style={{
            marginLeft: "230px",
            marginTop: "20px",
            fontFamily: "Manrope, sans-serif",
            fontWeight: "600",
            textDecoration: "none",
            padding: "15px",
            borderRadius: "100px",
            backgroundColor: "#d3e97a",
            color: "black",
            width: "150px",
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};
