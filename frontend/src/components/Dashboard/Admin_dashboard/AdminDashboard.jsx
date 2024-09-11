import "./AdminDashboard.css";
import DashCard from "./AdminDashCard.jsx";
import DashboardData from "./DashboardData.js";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaBuildingShield } from "react-icons/fa6";
import { GrUserPolice } from "react-icons/gr";
import { RiCriminalFill } from "react-icons/ri";
import { GiCrimeSceneTape } from "react-icons/gi";
import { FaDumpsterFire } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import Cookies from 'js-cookie';
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const [dropdowns, setDropdowns] = useState({
    dashboard: false,
    policeStation: false,
    police: false,
    crimeCategory: false,
    viewsCriminals: false,
    viewFir: false,
    reports: false,
  });

  useEffect(() => {
    const token = Cookies.get('token');
    const verifyToken = token ? JSON.parse(atob(token.split('.')[1])) : null;
    setUsername(verifyToken ? verifyToken.full_name : '');
  }, []);

  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/cred');
  };

  const toggleDropdown = (key) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile-Wrapper">
          <img src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile" />
          <h1 className="username">{username && username}</h1>
        </div>

        <ul>
          <li>
            <button onClick={() => toggleDropdown("")} className="dropdown-btn">
              <FaHome className="sidebar-icons" />
              Dashboard
            </button>
          </li>
          <li>
            <button onClick={() => toggleDropdown("policeStation")} className="dropdown-btn">
              <FaBuildingShield className="sidebar-icons" />
              Police Station <IoIosArrowDown />
            </button>
            {dropdowns.policeStation && (
              <ul className="dropdown-content">
                <li>Add Police Station</li>
                <li>Manage Police Station</li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleDropdown("police")} className="dropdown-btn">
              <GrUserPolice className="sidebar-icons" />
              Police <IoIosArrowDown />
            </button>
            {dropdowns.police && (
              <ul className="dropdown-content">
                <li>Add Police</li>
                <li>Manage</li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleDropdown("crimeCategory")} className="dropdown-btn">
              <GiCrimeSceneTape className="sidebar-icons" />
              Crime Category <IoIosArrowDown />
            </button>
            {dropdowns.crimeCategory && (
              <ul className="dropdown-content">
                <li>Subitem 1</li>
                <li>Subitem 2</li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => toggleDropdown("")} className="dropdown-btn">
              <RiCriminalFill className="sidebar-icons" />
              Views Criminals
            </button>
          </li>
          <li>
            <button onClick={() => toggleDropdown("")} className="dropdown-btn">
              <FaDumpsterFire className="sidebar-icons" />
              View Fir
            </button>
          </li>
          <li>
            <button onClick={() => toggleDropdown("reports")} className="dropdown-btn">
              <TbReportSearch className="sidebar-icons" />
              Reports <IoIosArrowDown />
            </button>
            {dropdowns.reports && (
              <ul className="dropdown-content">
                <li>Subitem 1</li>
                <li>Subitem 2</li>
              </ul>
            )}
          </li>
        </ul><br />
        <button
  onClick={handleLogout}
  style={{
    marginTop:'25px',
    backgroundColor: '#e74c3c', // Bright red color
    color: '#ecf0f1', // Light text color for contrast
    border: 'none',
    padding: '10px 20px', // Generous padding for better clickability
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease, transform 0.2s ease', // Smooth transitions for hover effects
    width: '100%', // Full width of the sidebar
    textAlign: 'center',
    marginTop: 'auto', // Position it at the bottom
  }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c0392b'} // Darker red on hover
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e74c3c'} // Original color on mouse leave
>
  Logout
</button>
      </aside>

      <main className="main-content">
        <div className="dashboard-header">Dashboard</div>
        <div className="cards-container">
          {DashboardData.map((data) => (
            <DashCard key={data.id} cardTitle={data.card_title} cardContent={data.card_content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
