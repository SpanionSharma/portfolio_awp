import React from "react";

export default function Projects({ data }) {
  return (
    <div className="card">
      <h2 className="card-title">Projects</h2>
      <div className="card-body">
        {data.projects.map((p, i) => (
          <div key={i} className="post">
            <div className="post-header">
              <strong className="post-title">{p.title}</strong>
              <span className="post-date">{p.date}</span>
            </div>
            <p className="post-body">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
