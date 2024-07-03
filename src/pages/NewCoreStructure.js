import React from "react";
import Tree from '../components/Tree';
import { treeData } from '../data/sample-structure';

function NewCoreStructure() {

  const levelData = [
    {name: 'Grade', children: treeData.map(i => i.name)},
    {name: 'Unit', children: treeData[0].children.map(i => i.name)},
    {name: 'Week', children: treeData[0].children[0].children.map(i => i.name)},
    {name: 'Day', children: []}
  ]

  return (
    <div className="relative flex flex-column mt3 pt3 pl3 mr3">
      <div className='flex flex-column ba b--blue pa3 flex-grow-1'>
        <div className='pb3 f6'>
          Add required label and description for each level
        </div>
        <Tree treeData={treeData} levelData={levelData} />
      </div>
    </div>
  )
}

export default NewCoreStructure;