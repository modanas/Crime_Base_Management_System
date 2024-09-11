import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faCheckCircle, faUser, faTimesCircle, faFileSignature, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './SideBar.jsx';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
 // Ensure the filename is correct

// Styled components
const Banner = styled.div`
  background: #575757;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-left: ${({ sidebarWidth }) => sidebarWidth}; /* Adjust based on the sidebar width */
  margin-bottom: 20px; /* Space below the banner */
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const DashboardContainer = styled.div`
  padding: 20px;
  margin-left: ${({ sidebarWidth }) => sidebarWidth}; /* Adjust based on the sidebar width */
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Space between cards */
`;

const Statistic = styled.div`
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
  width: 300px; /* Reduced width */
  height: 150px; /* Adjusted height */
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: #333;
  font-family: Arial, sans-serif; /* Font family for consistency */
`;

const StatisticContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const IconContainer = styled.div`
  font-size: 2.5rem; /* Adjusted icon size */
`;

const Title = styled.h2`
  font-size: 1.2rem; /* Font size for the title */
  margin: 0;
  color: #333;
`;

const Value = styled.p`
  font-size: 1.5rem; /* Font size for the value */
  font-weight: bold;
  margin: 5px 0 0;
  color: #333;
`;

function Dashboard() {
  const [username,setUsername]=useState('')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate=useNavigate()

  const handleSidebarToggle = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  useEffect(()=>{
    const token = Cookies.get('token');
    const verifyToken = token ? JSON.parse(atob(token.split('.')[1])) : null;
    setUsername(verifyToken ? verifyToken.full_name : '');
  },[])


  
  const handleLogout=()=>{
    Cookies.remove('token')
    navigate('/cred')
    
  }
 

  const sidebarWidth = isSidebarCollapsed ? '80px' : '250px';

  return (
    <>
      <Sidebar onToggle={handleSidebarToggle} />

      <div>
        <Banner style={{textAlign:'center',paddingRight:'0'}} sidebarWidth={sidebarWidth}><span style={{marginRight:'100px'}}>User Name: &nbsp; {username && username} </span><button
  onClick={handleLogout}
  style={{
    marginRight:'0px',
    backgroundColor: '#e74c3c', // Bright red color
    color: '#ecf0f1', // Light text color for contrast
    border: 'none',
    padding: '10px 20px', // Generous padding for better clickability
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    width:'200px',
    transition: 'background 0.3s ease, transform 0.2s ease', // Smooth transitions for hover effects
     // Full width of the sidebar
    textAlign: 'center',
    marginTop: 'auto', // Position it at the bottom
  }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c0392b'} // Darker red on hover
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e74c3c'} // Original color on mouse leave
>
  Logout
</button></Banner>

        <DashboardContainer sidebarWidth={sidebarWidth}>
          <Statistic>
            <IconContainer>
              <FontAwesomeIcon icon={faFileAlt} style={{ color: '#007bff' }} />
            </IconContainer>
            <StatisticContent>
              <Title>Total New FIR</Title>
              <Value>12</Value>
            </StatisticContent>
          </Statistic>
          <Statistic>
            <IconContainer>
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#28a745' }} />
            </IconContainer>
            <StatisticContent>
              <Title>Total Approved FIR</Title>
              <Value>45</Value>
            </StatisticContent>
          </Statistic>
          <Statistic>
            <IconContainer>
              <FontAwesomeIcon icon={faUser} style={{ color: '#dc3545' }} />
            </IconContainer>
            <StatisticContent>
              <Title>Total Criminals</Title>
              <Value>123</Value>
            </StatisticContent>
          </Statistic>
          <Statistic>
            <IconContainer>
              <FontAwesomeIcon icon={faTimesCircle} style={{ color: '#dc3545' }} />
            </IconContainer>
            <StatisticContent>
              <Title>Total Rejected FIR</Title>
              <Value>12</Value>
            </StatisticContent>
          </Statistic>
          <Statistic>
            <IconContainer>
              <FontAwesomeIcon icon={faFileSignature} style={{ color: '#ffc107' }} />
            </IconContainer>
            <StatisticContent>
              <Title>FIR Sent for ChargeSheet</Title>
              <Value>12</Value>
            </StatisticContent>
          </Statistic>
          <Statistic>
            <IconContainer>
              <FontAwesomeIcon icon={faClipboardCheck} style={{ color: '#17a2b8' }} />
            </IconContainer>
            <StatisticContent>
              <Title>Total Completed ChargeSheet</Title>
              <Value>12</Value>
            </StatisticContent>
         
          </Statistic>
        </DashboardContainer>
      </div>
    </>
  );
}

export default Dashboard;
