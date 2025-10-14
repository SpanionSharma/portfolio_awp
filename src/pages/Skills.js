import React from "react";

export default function Skills({ data }) {
  const { expertise, software, languages } = data.skills;
  return (
    <div className="card">
      <h2 className="card-title">Skills</h2>
      <div className="card-body skills-grid">
        <div>
          <h3 className="small-title">Expertise</h3>
          <ul>{expertise.map((e, i) => <li key={i}>{e}</li>)}</ul>
        </div>
        <div>
          <h3 className="small-title">Software</h3>
          <ul>{software.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div>
          <h3 className="small-title">Languages</h3>
          <p>{languages.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
