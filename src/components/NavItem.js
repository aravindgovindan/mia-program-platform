import React from "react";
import Icon from "./Icon";
import { useNavigate } from "react-router-dom";

function NavItem({ label, icon, collapsed, link }) {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(link || '/')
  }

  return (
    <div
      title={label}
      className={`pointer pv2 mv1 flex f4 ${collapsed ? 'justify-center' : 'justify-start'}`}
      onClick={handleClick}
    >
      <Icon icon={icon} />
      {!collapsed && <div className="ph2 f5">{label}</div>}
    </div>
  )
}

export default NavItem;