import React from "react";

export default function Home({ data }) {
  return (
    <div className="card">
      <h2 className="card-title">About Me</h2>
      <p className="card-body">{data.summary}</p>
    </div>
  );
}
