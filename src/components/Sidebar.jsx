
import React from "react";
import { FaHome, FaBuilding, FaUserShield, FaClipboardList } from "react-icons/fa";

const Sidebar = ({ setSelectedSection }) => {
    return (
        <div
            className="bg-dark text-white d-flex flex-column p-3"
            style={{ width: "250px", minHeight: "100vh" }}
        >
            <h5 className="mb-4 text-center">🧭 Navigation</h5>
            <button className="btn btn-dark text-start mb-2" onClick={() => setSelectedSection("home")}>
                <FaHome className="me-2" /> Home
            </button>
            <button className="btn btn-dark text-start mb-2" onClick={() => setSelectedSection("roles")}>
                <FaUserShield className="me-2" /> Roles
            </button>
            <button className="btn btn-dark text-start mb-2" onClick={() => setSelectedSection("departments")}>
                <FaBuilding className="me-2" /> Departments
            </button>
            <button className="btn btn-dark text-start mb-2" onClick={() => setSelectedSection("roleAssign")}>
                <FaClipboardList className="me-2" /> Role Assign
            </button>
        </div>
    );
};

export default Sidebar;





