import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight,faBars } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie'
const SidebarContainer = styled.div`
  width: ${({ isCollapsed }) => (isCollapsed ? '80px' : '250px')};
  height: 100vh;
  background: #333;
  color: #fff;
  position: fixed;
  transition: width 0.3s;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'space-between')};
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #444;
`;

const ToggleButton = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled(Link)`
  display: block;
  padding: 15px;
  font-family: 'Times New Roman', serif;
  font-size: ${({ isCollapsed }) => (isCollapsed ? '14px' : '16px')};
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  &:hover {
    background: #575757;
  }
`;

const MenuIcon = styled.div`
  font-size: 1.2rem;
  margin-right: ${({ isCollapsed }) => (isCollapsed ? '0' : '10px')};
`;

const MenuText = styled.span`
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'inline')};
`;

function Sidebar({ onToggle }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed);
  };


  return (
    <SidebarContainer icon={faBars} isCollapsed={isCollapsed}>
      <SidebarHeader isCollapsed={isCollapsed}>
        {!isCollapsed && <span>Menu</span>}
        <ToggleButton onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isCollapsed ? faAngleRight : faAngleLeft} />
        </ToggleButton>
      </SidebarHeader>
      <Menu>
        <MenuItem to="/" isCollapsed={isCollapsed}>
          <MenuIcon isCollapsed={isCollapsed}><FontAwesomeIcon icon={faBars} /></MenuIcon>
          <MenuText isCollapsed={isCollapsed}>Criminals</MenuText>
        </MenuItem>
        <MenuItem to="/" isCollapsed={isCollapsed}>
          <MenuIcon isCollapsed={isCollapsed}><FontAwesomeIcon icon={faBars} /></MenuIcon>
          <MenuText isCollapsed={isCollapsed}>FIR</MenuText>
        </MenuItem>
        <MenuItem to="/" isCollapsed={isCollapsed}>
          <MenuIcon isCollapsed={isCollapsed}><FontAwesomeIcon icon={faBars} /></MenuIcon>
          <MenuText isCollapsed={isCollapsed}>Charge Sheet</MenuText>
        </MenuItem>
        <MenuItem to="/" isCollapsed={isCollapsed}>
          <MenuIcon isCollapsed={isCollapsed}><FontAwesomeIcon icon={faBars} /></MenuIcon>
          <MenuText isCollapsed={isCollapsed}>Reports</MenuText>
        </MenuItem>
        <MenuItem to="/" isCollapsed={isCollapsed}>
          <MenuIcon isCollapsed={isCollapsed}><FontAwesomeIcon icon={faBars} /></MenuIcon>
          <MenuText isCollapsed={isCollapsed}>Search <br /></MenuText><br />
          <br />
          
        </MenuItem>
      </Menu>
      
    </SidebarContainer>
  );
}

export default Sidebar;
