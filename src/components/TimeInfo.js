import React from "react";

function TimeInfo({ siteName, windSpeed, activePower }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{siteName}</div>
      <div>{windSpeed}</div>
      <div>{activePower}</div>
    </div>
  );
}

export default TimeInfo;
