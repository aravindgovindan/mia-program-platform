import React, { useEffect, useState } from "react";
import Icon from './Icon';

function Dropdown({ value, options, onSelect, placeholder, className }) {

  const [selected, setSelected] = useState((options.find(option => option.id === value) || { id: '' }).id);
  const [open, setOpen] = useState(false);

  useEffect(() => {setSelected((options.find(option => option.id === value)|| { id: '' }).id)}, [value])

  const toggleOpen = () => {
    setOpen(!open);
  }

  const selectOption = (option) => {
    setSelected(option);
    setOpen(false);
    onSelect(option);
  }

  return (
    <div className={ ` flex relative items-center pv1` }>
      <div
        className={`${className} flex items-center justify-between ba ph2 pv1 relative pointer bw1 b--light-accent`}
        onClick={toggleOpen}
      >
        {selected.length ? <div className="flex-grow-1 pv1">{options.find(option => option.id === selected).label}</div>
          : <div className="gray flex-grow-1 pv1">{placeholder || 'Select...'}</div>
        }
        <Icon icon={'caretDown'} className="flex items-center pv1 ml3 f4" />
        <div 
          className={`absolute overflow-y-auto top-2 ba b--light-accent bw1 mt1 w-100 left-0 bg-white z-999 flex-column ${open ? 'flex' : 'dn'}`}
          style={{maxHeight: '100px'}}
        >
          {
            options.map(option => (
              <DropdownOption key={option.id} id={option.id} label={option.label} onSelect={selectOption} />
            ))
          }
        </div>
      </div>

    </div>
  )

}


function DropdownOption({ id, label, onSelect }) {

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onSelect(id);
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
export default Dropdown;