import React from "react";
import coverImg from "../assets/cover.svg";

function Home() {
  const imgAlt =
    "https://www.freepik.com/free-vector/learning-concept-illustration_10915595.htm#query=student%20graphic&position=2&from_view=keyword&track=ais&uuid=fd1b3324-4df4-4dda-8083-d9da73a4522b";

  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={coverImg} alt={imgAlt} style={{ width: "45%" }} />
    </div>
  );
}

export default Home;
