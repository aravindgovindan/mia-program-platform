import React from "react";
import Tree from '../components/Tree';
import { piData as treeData } from '../data';

function PhonicsInterventionStructure() {

  const levelData = [
    {name: 'Level', children: treeData.map(i => i.name)},
    {name: 'Skill', children: treeData[0].children.map(i => i.name)},
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

export default PhonicsInterventionStructure;