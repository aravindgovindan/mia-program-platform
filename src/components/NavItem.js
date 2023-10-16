import React from "react";
import Icon from "./Icon";

function NavItem ({label, icon, collapsed}) {
  return (
    <div title={label} className={`pointer pv2 mv1 flex f4 ${collapsed ? 'justify-center' : 'justify-start'}`}>
      <Icon icon={icon} />
      {!collapsed && <div className="ph2">{label}</div>}
    </div>
  )
}

export default NavItem;