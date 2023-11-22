import React from "react";

function LevelDropdownOption({ id, label, selectOption }) {

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    selectOption(id);
  }

  return (
    <div
      className="pv2 bb b--moon-gray ph2 flex items-center hover-bg-gray"
      onClick={handleClick}
    >
      {label}
    </div>
  )
}

export default LevelDropdownOption;