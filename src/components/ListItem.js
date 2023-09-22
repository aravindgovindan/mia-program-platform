import React from 'react';

function ListItem({ nodeName, isSelected }) {

  const borderStyle = isSelected ? 'b--blue bw2 br3' : 'b--moon-gray br2'

  return (
    <div className={`ba pa3 bg-white mb2 ${borderStyle}`}>
      <div className='f5 pb2'>{nodeName}</div>
      <div className='f6 pt2 dark-blue'>Add description</div>
    </div>
  );

}

export default ListItem;