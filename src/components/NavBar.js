import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import NavItem from "./NavItem";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar({ navItems }) {

  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(true);
  const [showIcons, setShowIcons] = useState(true);
  const [selected, setSelected] = useState(navItems.find(i => i.link === location.pathname)?.label)

  const toggleOpen = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setOpen(!open);
  }

  const toggleIcons = () => {
    setShowIcons(!showIcons)
  }

  const onNavSelect = (label, link) => {
    setSelected(label || selected)
    navigate(link)
  }

  return (
    <div className="flex flex-column">
      {!showIcons ? <>
        <div
          className={`flex justify-between pa2 ${open ? '' : 'absolute'}`}
          style={{ transition: "width 0.3s ease-in", backgroundColor: "rgba(10, 48, 120, 0.2)" }}
        >
          {open && <div className="f3 b pl3">Mia</div>}
          <div className="pointer grow ph1 f3" onClick={toggleOpen}><GiHamburgerMenu /></div>
        </div>
        <div className={`sidenav ${open ? 'open flex flex-column' : 'dn'}`}>
          <div className="pv2 mv1 ph2 f5" title="Uncheck to hide navbar completely on collapse">
            <input type='checkbox' checked={showIcons} onChange={toggleIcons}></input>
            <span className="pointer" onClick={toggleIcons}> Show Icons on collapse</span>
          </div>
          {(navItems || []).map(item => <NavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            link={item.link}
            selected={item.label === selected}
            onSelect={onNavSelect}
            collapsed={!open}
          />)}
        </div>
      </> : <>
        <div
          className={`sidenav ${open ? 'open' : ''}`}
          style={{ transition: `${!open ? 'width 0.3s ease-out' : ''}`}}
        >
          <div className="flex justify-between pa2" style={{ backgroundColor: "rgba(10, 48, 120, 0.2)" }}>
            {open && <div className="f3 b pl3">Mia</div>}
            <div className="pointer grow ph1 f3" onClick={toggleOpen}><GiHamburgerMenu /></div>
          </div>
          <div className="flex flex-column" title="Uncheck to hide navbar completely on collapse">
            {open && <div className="pv2 mv1 ph2 f5">
              <input type='checkbox' checked={showIcons} onChange={toggleIcons}></input>
              <span className="pointer" onClick={toggleIcons}> Show Icons on collapse</span>
            </div>}
            {(navItems || []).map(item => <NavItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              link={item.link}
              selected={item.label === selected}
              onSelect={onNavSelect}
              collapsed={!open}
            />)}
          </div>
        </div>
      </>
      }
    </div >
  )
}

export default NavBar;