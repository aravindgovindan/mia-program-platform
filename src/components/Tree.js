// Tree.js
import React, { useState } from 'react';
import Column from './Column';
import './Column.css';

function Tree({ treeData, levelData }) {
  const [selectedNodes, setSelectedNodes] = useState(levelData.map(i => 0));
  const [levels, setLevels] = useState(levelData)

  const handleNodeSelect = (node, columnIndex) => {
    let newSelected = selectedNodes.slice(0, columnIndex).concat([node])
    newSelected = [...newSelected, ...Array(selectedNodes.length - newSelected.length).fill(0)]
    let tempNode = treeData
    let newLevels = levels.map((level, index) => {
      let newLevel = { name: level.name, children: tempNode.map(i => i.name) }
      tempNode = tempNode[newSelected[index]]?.children || []
      return newLevel
    })
    setSelectedNodes(newSelected);
    setLevels(newLevels);

  };

  const handleEditModeToggle = (index) => {
    setSelectedNodes(prevSelectedNodes => {
      const updatedNodes = [...prevSelectedNodes];
      updatedNodes[index] = { ...updatedNodes[index], editMode: !updatedNodes[index].editMode };
      return updatedNodes;
    });
  };

  return (
    <div className="tree flex-grow-1 flex flex-column">
      <div className="tree-container flex-grow-1 flex">
        {levels.map((level, index) => level.children?.length ? <Column
          key={level.name}
          title={level.name}
          nodes={level.children || []}
          selectedNode={selectedNodes[index]}
          columnIndex={index} // Pass the column index
          onNodeSelect={handleNodeSelect}
          onEditModeToggle={() => handleEditModeToggle(index)}
        /> : ''
        )}
      </div>
    </div>
  );
}

export default Tree;