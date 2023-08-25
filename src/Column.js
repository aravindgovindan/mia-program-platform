// Column.js
import React, { useState } from 'react';

function Column({ title, nodes, selectedNode, columnIndex, onNodeSelect, onEditModeToggle }) {
  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => {
    setEditMode(prevEditMode => !prevEditMode);
  }
  return (
    <div className="column">
      <h2>{title}</h2>
      <button onClick={toggleEdit}>Toggle Edit</button>
      <ul>
        {nodes.map((node, i) => (
          <li
            key={title + node}
            className={selectedNode === i ? 'selected' : ''}
            onClick={() => onNodeSelect(i, columnIndex)}
          >
            {editMode ? (
              <input type="text" defaultValue={node} />
            ) : (
              node
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Column;