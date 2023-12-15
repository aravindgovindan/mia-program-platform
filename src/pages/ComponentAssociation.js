import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import Icon from "../components/Icon";
import ComponentTable from "../components/ComponentTable";


function ComponentAssociation() {

  const ContentTable = () => {
    return (
      <>
        <Dropdown options={gradeOptions} className={"w5 br2"} value={node} onSelect={onDropdownSelect} />
        <div className="flex flex-start w-100 pa2">
          <div className="w-25 flex flex-column">
            <div className="b f7 pv2">Content Group</div>
            <div className="pa2 b bg-accent-light f7 lh-copy mb2">Whole Group Content</div>
            <div className="pv2">Decodables</div>
          </div>
          <div className="w-20 flex flex-column">
            <div className="b f7 pv2">Content Type</div>
            <div className="pa2 bg-accent-light f7 lh-copy accent-light mb2">&nbsp;</div>
            <div className="pv2">Decodable Readers</div>
          </div>
          <div className="w-10 flex flex-column">
            <div className="b f7 pv2 tc">Level Associated</div>
            <div className="pa2 bg-accent-light f7 lh-copy accent-light mb2">&nbsp;</div>
            <div className="pv2 tc">Unit</div>
          </div>
          <div className="w-10 flex flex-column">
            <div className="b f7 pv2 tc">Counts</div>
            <div className="pa2 bg-accent-light f7 lh-copy accent-light mb2">&nbsp;</div>
            <div className="pv2 tc">5</div>
          </div>
          <div className="w-10 flex flex-column">
            <div className="b f7 pv2 tc">Format</div>
            <div className="pa2 bg-accent-light f7 lh-copy accent-light mb2">&nbsp;</div>
            <div className="pv2 tc">Print</div>
          </div>
          <div className="flex-grow flex flex-column">
            <div className="b f7 pv2">&nbsp;</div>
            <div className="pa2 bg-accent-light f7 lh-copy accent-light mb2">&nbsp;</div>
            <div className="flex">
              <div className="f7 flex items-center justify-center mv1 pa1 ba b--accent br2 pointer accent mh2 dim" onClick={associate}>Associate Component</div>
              <div className="f7 flex items-center justify-center mv1 pa1 ba b--accent br2 not-allowed accent mh2 ">Edit</div>
              <div className="f7 flex items-center justify-center mv1 pa1 ba b--accent br2 not-allowed accent mh2 ">Delete</div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const AssociateSection = () => {
    return (
      <>
        <div className="w3 f6 flex items-center justify-between mv2 pa2 bn accent pointer dim" onClick={reset}>
          <Icon icon="left" /> Back
        </div>
        <div className="min-h-100 pa2">
          <div className="mb2">Enter the IDs of Components you want to associate to:</div>
          <div className="f7 pa2 bg-accent-light flex justify-between w-50">
            <div><b>Content Group: </b> Decodables </div>
            <div><b>Content Type: </b> Decodable Readers</div>
            <div><b>Level Associated: </b> Unit</div>
          </div>
          <div className="flex flex-between w-100">
            <div className="w-75 mt2">
              <textarea className="f6 w-100 b--light-accent br2" rows={4} placeholder=" Enter IDs separated by a space" value={codes} onChange={handleCodeChange} onBlur={handleCodeChange}></textarea>
            </div>
            <div className="flex flex-column items-center w-25">
              <div className="w-60 f7 flex items-center justify-between mv1 pa2 ba br2 pointer mh2 grow mia-btn" onClick={goToMia}>
                Search Components <Icon icon="ext" />
              </div>
              <div className="w-60 f7 flex items-center justify-between mv1 pa2 ba br2 pointer mh2 grow mia-btn" onClick={goToMia}>
                Create Components <Icon icon="ext" />
              </div>
            </div>
          </div>
          <div className="w4 f6 flex items-center justify-between mv2 pa2 ba b--accent bg-accent white pointer dim" onClick={importComponents}>
            Import <Icon icon="download" />
          </div>
          {showList && <ComponentTable compCodes={compCodes} />}
        </div>
      </>
    )
  }

  const gradeOptions = [
    { id: 'Grade K', label: 'Grade K' },
    { id: 'Grade 1', label: 'Grade 1' },
    { id: 'Grade 2', label: 'Grade 2' },
    { id: 'Grade 3', label: 'Grade 3' },
    { id: 'Grade 4', label: 'Grade 4' },
    { id: 'Grade 5', label: 'Grade 5' },
  ]

  const [node, setNode] = useState(gradeOptions[0].label)
  const [display, setDisplay] = useState("Content Table")
  const [codes, setCodes] = useState()
  const [showList, setShowList] = useState(false)
  const [compCodes, setCompCodes] = useState(['1', '2'])


  const onDropdownSelect = (option) => {
    setNode(option)
  }

  const associate = () => {
    setDisplay("Component Association")
  }

  const goToMia = () => {
    window.open("https://mia-staging.benchmarkconnect.com/editors/component", "_blank")
  }

  const importComponents = () => {
    if (!(codes.length > 0)) {
      alert("Nothing to import")
    } else {
      setCompCodes(codes.trim().split(/\s+|\n/))
      setShowList(true);
    }
  }

  const handleCodeChange = (e) => {
    setCodes(e.target.value)
  }

  const reset = (e) => {
    e.stopPropagation();
    setDisplay("Content Table")
  }

  const renderSection = () => {
    switch (display) {
      case "Component Association":
        return <AssociateSection />
      case "Content Table":
      default:
        return <ContentTable />
    }
  }

  return (
    <div className="relative flex flex-column mt3 pt3 pl3 mr3">
      <div className='flex flex-column ba b--blue pa3 flex-grow-1 w-100'>
        {renderSection()}
      </div>
    </div>
  )

}

export default ComponentAssociation;