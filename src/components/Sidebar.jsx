

// import React from "react";

// const Sidebar = ({ isOpen, setSelectedSection }) => {
//     return (
//         <div className={`bg-light border-end ${isOpen ? "d-block" : "d-none"}`} style={{ width: "250px" }}>
//             <div className="list-group list-group-flush">
//                 <button onClick={() => setSelectedSection("home")} className="list-group-item list-group-item-action">Home</button>
//                 <button onClick={() => setSelectedSection("about")} className="list-group-item list-group-item-action">About</button>
//                 <button onClick={() => setSelectedSection("apply")} className="list-group-item list-group-item-action">Apply</button>
//                 <div className="list-group-item">
//                     <strong>Admin Section</strong>
//                     <button onClick={() => setSelectedSection("roles")} className="list-group-item list-group-item-action text-dark fw-bold">Roles</button>
//                     <button onClick={() => setSelectedSection("departments")} className="list-group-item list-group-item-action text-dark fw-bold">Departments</button>
//                     <button onClick={() => setSelectedSection("roleAssign")} className="list-group-item list-group-item-action text-dark fw-bold">Role Assign</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;

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





