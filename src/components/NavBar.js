import React, {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi"

function NavBar() {

  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <div className={`sidenav ${open ? 'open' : ''}` }>
      <div className="flex justify-between pa2" style={{backgroundColor: "rgba(38, 64, 113, 0.06)"}}>
        {open && <div className="f3 b pl3">Mia</div> }
        <div className="pointer grow ph1 f3"><GiHamburgerMenu onClick={toggleOpen} /></div>
      </div>
    </div>
  )
}

export default NavBar;