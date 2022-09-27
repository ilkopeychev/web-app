import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function TimeInfo({ post }) {
  console.log(post);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{post.siteName}</div>
      <div>{post.windSpeed}</div>
      <ProgressBar completed={post.activePower} />
    </div>
  );
}

export default TimeInfo;
