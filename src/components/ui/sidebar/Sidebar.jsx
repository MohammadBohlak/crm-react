import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import {
  FiHome,
  FiUsers,
  FiShoppingCart,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  Logo,
  MenuItem,
  SidebarContainer,
  SidebarHeader,
  SidebarPlace,
  ToggleButton,
} from "./sidebar.styles";
import { PiUsersThreeBold } from "react-icons/pi";
import { LiaProductHunt } from "react-icons/lia";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector } from "react-redux";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const user = useSelector((state) => state.user.user); 
  const isAdmin = user.role == "admin";

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { id: "dashboard", icon: <FiHome className="icon" />, label: "Dashboard" },
    { id: "users", icon: <FiUsers className="icon" />, label: "Users" },
    {
      id: "customers",
      icon: <PiUsersThreeBold className="icon" />,
      label: "Customers",
    },
    {
      id: "products",
      icon: <LiaProductHunt className="icon" />,
      label: "Products",
    },
    { id: "sales", icon: <FiShoppingCart className="icon" />, label: "Sales" },
    {
      id: "interactions",
      icon: <SiInteractiondesignfoundation className="icon" />,
      label: "Interactios",
    },
    {
      id: "deleted",
      icon: <MdDeleteOutline className="icon" />,
      label: "Deleted Data",
    },
  ];

  return (
    <SidebarPlace $collapsed={collapsed}>
      <SidebarContainer $collapsed={collapsed}>
        <SidebarHeader>
          {!collapsed && <Logo to="/">CRM System</Logo>}
          <ToggleButton onClick={toggleSidebar}>
            {collapsed ? (
              <FiChevronRight size={20} />
            ) : (
              <FiChevronLeft size={20} />
            )}
          </ToggleButton>
        </SidebarHeader>

        <Nav className="flex-column p-2">
          {menuItems.map((item) => {
            if (
              !isAdmin &&
              (item.id == "dashboard" ||
                item.id == "users" ||
                item.id == "deleted")
            )
              return null;
            else
              return (
                <MenuItem
                  key={item.id}
                  $collapsed={collapsed}
                  className={activeItem === item.id ? "active" : ""}
                  to={`/${item.id}`}
                  onClick={() => setActiveItem(item.id)}
                >
                  {item.icon}
                  {!collapsed && <span className="label">{item.label}</span>}
                </MenuItem>
              );
          })}
        </Nav>
      </SidebarContainer>
    </SidebarPlace>
  );
};

export default Sidebar;
