import React from "react";
import Icon from "./Icon";

function NavItem({ label, icon, collapsed, link, selected, onSelect }) {

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onSelect(label, link || '/')
  }

  return (
    <div
      title={label}
      className={`pointer ph2 pv2 mb2 flex f4 ${collapsed ? 'justify-center' : 'justify-start'} ${selected ? 'bg-gray' : ''}`}
      onClick={handleClick}
    >
      <Icon icon={icon} />
      {!collapsed && <div className="ph2 f6">{label}</div>}
    </div>
  )
}

export default NavItem;