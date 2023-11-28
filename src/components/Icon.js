import React, { useState } from "react";
import { AiFillEdit, AiOutlineDelete, AiFillCaretDown, AiFillDatabase } from 'react-icons/ai';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { GiForwardField } from "react-icons/gi";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { RiSpeakFill} from 'react-icons/ri';
import {SiInstructure} from 'react-icons/si';
import {PiDotsSixVerticalBold} from 'react-icons/pi';
import { VscBlank } from "react-icons/vsc";


function Icon({ icon, className }) {

  const iconList = {
    edit: <AiFillEdit />,
    delete: <AiOutlineDelete />,
    advance: <GiForwardField />,
    speak: <RiSpeakFill />,
    base: <SiInstructure />,
    draggable: <PiDotsSixVerticalBold />,
    caretDown: <AiFillCaretDown />,
    table: <AiFillDatabase />,
    up: <FaChevronUp/>,
    down: <FaChevronDown />,
    updown: <HiMiniChevronUpDown />,
    blank: <VscBlank />,
  }

  const [showDefault, setShowDefault] = useState(iconList[icon] == undefined);

  if (!showDefault) { return <div className={`${className} flex items-center`}>{iconList[icon]}</div> }
  else return (
    <div className={`${className} br-100 bg-silver f5 b lh-copy tc flex items-center`} style={{ height: '1.5rem', width: '1.5rem' }}>{icon}</div>
  )

}

export default Icon;

