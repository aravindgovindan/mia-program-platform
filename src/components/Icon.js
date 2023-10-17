import React, { useState } from "react";
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
import { GiForwardField } from "react-icons/gi";
import { RiSpeakFill} from 'react-icons/ri';
import {SiInstructure} from 'react-icons/si';


function Icon({ icon, className }) {

  const iconList = {
    edit: <AiFillEdit />,
    delete: <AiOutlineDelete />,
    advance: <GiForwardField />,
    speak: <RiSpeakFill />,
    base: <SiInstructure />
  }

  const [showDefault, setShowDefault] = useState(iconList[icon] == undefined);

  if (!showDefault) { return <div className={`${className}`}>{iconList[icon]}</div> }
  else return (
    <div className={`${className} br-100 bg-silver f5 b lh-copy tc`} style={{ height: '1.5rem', width: '1.5rem' }}>{icon}</div>
  )

}

export default Icon;

