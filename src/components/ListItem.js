import React from 'react';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';

function ListItem({ nodeName, isSelected }) {

  const borderStyle = isSelected ? 'b--blue bw2 br3' : 'b--moon-gray br2'

  return (
    <div className={`ba pa3 bg-white mb2 hide-child ${borderStyle}`}>
      <div className='f5 pb2 flex justify-between'>
        <div>{nodeName}</div>
        <div>
          <button className='child bn bg-white'><AiFillEdit /></button>
          <button className='child bn bg-white'><AiOutlineDelete /></button>
        </div>
      </div>
      <div className='f6 pt2 dark-blue'>Add description</div>
    </div>
  );

}

export default ListItem;