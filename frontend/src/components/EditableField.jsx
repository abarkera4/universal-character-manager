import React from "react";

const EditableField = ({ label, value, onChange }) => (
  <div style={{ marginBottom: "10px" }}>
    <label>{label}: </label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ marginLeft: "10px" }}
    />
  </div>
);

export default EditableField;
