import "../index.css";

const Home2 = () => {
  return (
    <>
      <div className="home2" style={{ width: "100%", background: "fix" }}>
        <img
          style={{ width: "100%", position: "absolute" }}
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              alignItems: "center",
              justifyContent: "center",
              width: "60%",
              padding: "30px",
            }}
          >
            <h1>About This Project</h1>
            <p style={{ width: "100%", fontSize: "27px" }}>
              {" "}
              MERN (MongoDB, Express.js, React.js, Node.js) project focused on
              authentication! This project highlights the seamless integration
              of these technologies to provide a secure and user-friendly
              authentication system. MongoDB serves as the reliable database for
              storing user information, while Express.js handles server-side
              logic, routing, and authentication middleware. On the client side,
              React.js delivers a dynamic and responsive user interface for a
              smooth authentication experience. Node.js acts as the runtime
              environment, facilitating communication between the server and the
              client. With this MERN authentication project, users can securely
              register, log in, and log out, emphasizing the importance of
              safeguarding user data. The integration of token-based
              authentication or other secure methods enhances the overall
              security of the application.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
