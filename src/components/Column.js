// Column.js
import React, { useState } from 'react';
import NodeItem from './NodeItem';

function Column({ title, nodes, selectedNode, columnIndex, onNodeSelect, onEditModeToggle }) {
  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => {
    setEditMode(prevEditMode => !prevEditMode);
  }
  return (
    <div className="column ph2 mr3 bg-light-gray">
      <div className='pt3 pb1 flex justify-between'>{title}</div>
      <ul>
        {nodes.map((node, i) => (
          <li
            key={title + node}
            onClick={() => onNodeSelect(i, columnIndex)}
          >
            <NodeItem nodeName={node} isSelected={selectedNode === i} />
          </li>
        ))}
      </ul>
      <div>
        <div className='add-button ba br2 b--blue bw1 dark-blue b f7 pa2 mv3 flex justify-center'>Add</div>
      </div>
    </div>
  );
}

export default Column;