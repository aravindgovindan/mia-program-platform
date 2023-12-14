import React, { useState } from 'react';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import Dropdown from './Dropdown';

function NodeItem({ nodeName, isSelected }) {

  const borderStyle = isSelected ? 'b--blue bw2 br3' : 'b--moon-gray br2'
  const gradeOptions = [
    {id: 'Grade K', label: 'Grade K'},
    {id: 'Grade 1', label: 'Grade 1'},
    {id: 'Grade 2', label: 'Grade 2'},
    {id: 'Grade 3', label: 'Grade 3'},
    {id: 'Grade 4', label: 'Grade 4'},
    {id: 'Grade 5', label: 'Grade 5'},

  ]
  const [node, setNode] = useState(nodeName)
  const [editing, setEditing] = useState(false)

  const handleEditClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setEditing(true);
  }

  const onDropdownSelect = (selectedOption) => {
    setNode(selectedOption);
    setEditing(false);
  }

  return (
    <div className={`ba pa3 bg-white mb2 hide-child ${borderStyle}`}>
      <div className='f5 pb2 flex justify-between'>
        {!editing
          ? <div>{node}</div>
          : <Dropdown options={gradeOptions} value={node} onSelect={onDropdownSelect} />
        }
        <div>
          <button className='child bn bg-white' onClick={handleEditClick}><AiFillEdit /></button>
          <button className='child bn bg-white'><AiOutlineDelete /></button>
        </div>
      </div>
      <div className='f6 pt2 dark-blue'>Add description</div>
    </div>
  );

}

export default NodeItem;