import React, { useState } from "react";
import LevelDropdown from "../components/LevelDropdown";

function BaseStructure() {

  const levelOptions = [
    { id: 'grade', label: 'Grade' },
    { id: 'unit', label: 'Unit' },
    { id: 'week', label: 'Week' },
    { id: 'day', label: 'Day' },
    { id: 'skill', label: 'Skill' },
    { id: 'skillCategory', label: 'Skill Category' },
  ]
  const [formOpen, setFormOpen] = useState(false);
  const [levels, setLevels] = useState([{ label: '', id: 'level-1' }])

  const handleCreateButtonClick = () => {
    setFormOpen(true)
  }

  const handleCloseOverlay = () => { 
    setFormOpen(false)
   }

  const handleAddLevel = () => {
    setLevels([...levels, { label: '', id: `level-${levels.length + 1}` }])
  }

  const handleLevelSelect = (current, newValue) => {
    const selectedOption = levelOptions.find(option => option.id === newValue)
    const changedIndex = levels.findIndex(level => level.id === current)
    setLevels([...levels.slice(0, changedIndex), selectedOption, ...levels.slice(changedIndex + 1)])
  }

  const removeLevel = (id) => {
    setLevels(levels.filter(level => level.id !== id))
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
    <div className="overlay bg-white ba br2 b--moon-gray relative flex flex-column" style={{ minHeight: '300px', width: '75%' }}>

      <div className="flex justify-between ph2 mh1 pv3 bb bw1 b--light-gray">
        <div className="b f6">Create Base Structure</div>
        <div className="pointer b" onClick={handleCloseOverlay}>X</div>
      </div>

      <div className="flex-grow-1 pv2 ph2 flex f7">
        <div className="ba b--light-accent w-50 pa2 flex flex-column">
          <div className="pb2">Program Structure Levels <span className="red f6">*</span></div>
          {
            levels.map(level => <LevelDropdown
              key={level.id}
              value={level.id}
              options={levelOptions}
              onLevelSelect={handleLevelSelect}
              deletable={levels.length > 1}
              onDelete={removeLevel}
            />)
          }

          <div className="flex justify-start pv2">
            {levelOptions.length > levels.length ? <div
              onClick={handleAddLevel}
              className="dim pointer accent bg-white pa2 ml1 br2 b ba b--accent flex justify-center items-center"
            >
              Add Level
            </div> : <div className="not-allowed moon-gray bg-white pa2 ml1 br2 b ba b--moon-gray flex justify-center items-center">Add Level
            </div>
            }
          </div>
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