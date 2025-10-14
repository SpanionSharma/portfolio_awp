import React from "react";

export default function Education({ data }) {
  const edu = data.education;
  return (
    <div className="card">
      <h2 className="card-title">Education</h2>
      <div className="card-body">
        <strong>{edu.institute}</strong>
        <p>{edu.degree} — {edu.year}</p>
        <p>Minor: {edu.minors}</p>
        <p>Focus: {edu.focus}</p>
        <p>GPA: {edu.gpa}</p>
      </div>
    </div>
  );
}
