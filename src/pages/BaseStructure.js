import React, { useState } from "react";

function BaseStructure() {

  const [formOpen, setFormOpen] = useState(false);
  const [levels, setLevels] = useState([{label: '', id:''}])

  const handleCreateButtonClick = () => {
    setFormOpen(true)
  }

  const handleCloseOverlay = () => {
    setFormOpen(false)
  }

  const handleAddLevel = () => {

  }

  const StructureDetails = () => <>
    <div className="b mb2">Program Structure</div>
    <div className="ba pv3 ph2 b--accent w-100 flex">
      <select className="flex-grow-1 mr2 br2 not-allowed" defaultValue="" disabled>
        <option value="" disabled>Select from an existing Program</option>
      </select>
      <div className="f5 flex tc items-center ph2 mr2">OR</div>
      <div
        onClick={handleCreateButtonClick}
        className="grow pointer h2 bg-accent white br2 b b--blue flex justify-center items-center w4"
      >
        Create New
      </div>
    </div>
  </>

  const StructureOverlay = () => <>
    <div className="overlay bg-white ba br2 b--moon-gray relative flex flex-column" style={{ minHeight: '300px', width: '720px' }}>

      <div className="flex justify-between ph2 mh1 pv3 bb bw1 b--light-gray">
        <div className="b f6">Create Base Structure</div>
        <div className="pointer b" onClick={handleCloseOverlay}>X</div>
      </div>

      <div className="flex-grow-1 pv2 ph2 flex f7">
        <div className="ba b--light-accent w-50 pa2 flex flex-column">
          <div>Program Structure Levels <span className="red f6">*</span></div>
          <div className="flex justify-start pv2"><div
            onClick={handleAddLevel}
            className="dim pointer accent bg-white pa2 br2 b ba b--accent flex justify-center items-center"
          >
            Add Level
          </div></div>
        </div>

        <div className=" w-50 ml2">
          <div className="ba b--light-accent pa2 flex flex-column">
            <div className="pt1">Structure Overview</div>
            <div className=" mv2 bt b--light-accent"></div>
            <div className="pt1">No Levels Added</div>
          </div>
        </div>
      </div>

    </div>
  </>

  return (
    <div style={{ maxWidth: '900px' }} className="pt3 f6">
      {formOpen && <div className="overlay-container flex justify-center items-start">
        <StructureOverlay />
      </div>
      }
      <StructureDetails />
    </div>
  )
}

export default BaseStructure;