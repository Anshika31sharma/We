import React from "react";

const UnitToggle = ({ unit, onUnitToggle }) => {
  return (
    <div className="flex items-center mb-4 md:mb-0">
      <input
        type="checkbox"
        checked={unit === "imperial"}
        onChange={onUnitToggle}
        className="h-6 w-6"
      />
      <span className="text-lg md:text-3xl">Units (Fahrenheit / Celsius)</span>
    </div>
  );
};

export default UnitToggle;
