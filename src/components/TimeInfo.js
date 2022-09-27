import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function TimeInfo({ siteName, windSpeed, activePower }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{siteName}</div>
      <div>{windSpeed}</div>
      <ProgressBar completed={activePower} />
    </div>
  );
}

export default TimeInfo;
