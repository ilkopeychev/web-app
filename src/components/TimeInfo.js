import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import AirIcon from "@mui/icons-material/Air";
function TimeInfo({ post }) {
  console.log(post);
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "10px" }}>
      <div style={{ marginBottom: "10px" }}>{post.siteName}</div>
      <div style={{ display: "flex" }}>
        {" "}
        <AirIcon></AirIcon>
        <div style={{ marginLeft: "5px" }}>{post.activePower}</div>
      </div>
      <div style={{ marginBottom: "10px" }}>
        ActivePower: {post.windSpeed} MW
      </div>
      <ProgressBar completed={post.activePower} />
    </div>
  );
}

export default TimeInfo;
