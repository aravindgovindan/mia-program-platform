import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import NavItem from "./NavItem";

function NavBar({ navItems }) {

  const [open, setOpen] = useState(true);
  const [showIcons, setShowIcons] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  }

  const toggleIcons = () => {
    console.log(showIcons)
    setShowIcons(!showIcons)
  }
  return (
    <div className="flex flex-column">
      {!showIcons ? <>
        <div className={`flex justify-between pa2 ${open ? '' : 'absolute'}`} style={{ backgroundColor: "rgba(10, 48, 120, 0.2)" }}>
          {open && <div className="f3 b pl3">Mia</div>}
          <div className="pointer grow ph1 f3"><GiHamburgerMenu onClick={toggleOpen} /></div>
        </div>
        <div className={`sidenav ${open ? 'open flex flex-column ph2' : 'dn'}`}>
          <div className="pv2 ph1 f5"><input type='checkbox' checked={showIcons} onChange={toggleIcons}></input> <span>Show Icons</span></div>
          {(navItems || []).map(item => <NavItem key={item.label} label={item.label} icon={item.icon} />)}
        </div>
      </> : <>
        <div className={`sidenav ${open ? 'open' : ''}`}>
          <div className="flex justify-between pa2" style={{ backgroundColor: "rgba(10, 48, 120, 0.2)" }}>
            {open && <div className="f3 b pl3">Mia</div>}
            <div className="pointer grow ph1 f3"><GiHamburgerMenu onClick={toggleOpen} /></div>
          </div>
          <div className="ph2 flex flex-column">
            {open && <div className="pv2 ph1 f5"><input type='checkbox' checked={showIcons} onChange={toggleIcons}></input> <span>Show Icons</span></div>}
            {(navItems || []).map(item => <NavItem key={item.label} label={item.label} icon={item.icon} collapsed={!open} />)}
          </div>
        </div>
      </>
      }
    </div >
  )
}

export default NavBar;