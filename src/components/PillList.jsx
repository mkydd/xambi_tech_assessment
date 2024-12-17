import React, { useState } from "react";

const PillList = ({ initialPills }) => {
  const [pills, setPills] = useState(initialPills || []);

  const handleRemovePill = (index) => {
    const updatedPills = pills.filter((_, i) => i !== index);
    setPills(updatedPills);
  };

  return (
    <>
      {pills.length > 0 && (
        <div className="d-flex flex-wrap gap-1 border rounded">
          {pills.map((pill, index) => (
            <div
              key={index}
              className="d-flex align-items-center rounded border m-1 p-1 gap-1"
            >
              <div className="text-primary">{pill}</div>
              <div
                onClick={() => handleRemovePill(index)}
                className="text-muted"
              >
                &times;
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PillList;
