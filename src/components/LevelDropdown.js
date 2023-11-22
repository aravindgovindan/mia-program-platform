import React, { useState } from "react";
import Icon from './Icon';
import LevelDropdownOption from "./LevelDropdownOption";

function LevelDropdown({ value, options, onLevelSelect, deletable, onDelete }) {

  const [level, setLevel] = useState((options.find(option => option.id === value) || {id: ''}).id);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  const selectLevel = (level) => {
    setLevel(level);
    setOpen(false);
    onLevelSelect(value, level);
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onDelete(value);
  }

  return (
    <div className="flex relative items-center pv1">
      <div
        className={`flex items-center justify-between w-90 ba br2 ph2 pv1 mr2 relative pointer ${open ? 'b--light-accent bw1' : 'b--moon-gray'} `}
        onClick={toggleOpen}
      >
        <Icon icon="draggable" className="f4 flex items-center pr2 pv1" />
        {level.length ? <div className="flex-grow-1 pv1">{options.find(option => option.id === level).label}</div>
          : <div className="gray flex-grow-1 pv1">Select level</div>
        }
        <Icon icon={'caretDown'} className="flex items-center pv1 f4" />
        <div className={`absolute top-2 ba b--light-accent bw1 br2 mt1 w-100 left-0 bg-white z-999 flex-column ${open ? 'flex' : 'dn'}`}>
          {
            options.map(option => (
              <LevelDropdownOption key={option.id} id={option.id} label={option.label} selectOption={selectLevel} />
            ))
          }
        </div>
      </div>

      {deletable && <div className="absolute right-0 pointer dim" onClick={handleDelete}><Icon icon="delete" className="f4"/></div> }
    </div>
  )

}

export default LevelDropdown;