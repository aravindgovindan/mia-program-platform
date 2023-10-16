import React from "react";
import Tree from '../components/Tree';

function ClickThrough() {
  return (
    <div className="flex flex-column pt3 pl3">
      <div className='flex flex-column ba b--blue pa3 flex-grow-1'>
        <div className='pb3 f6'>
          Add required label and description for each level
        </div>
        <Tree />
      </div>
    </div>
  )
}

export default ClickThrough;