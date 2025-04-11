
import React from 'react';


const SubHeader = ({ setActiveSection }) => {
    return (
        <nav className="bg-secondary text-white d-flex justify-content-center py-2">
            <div className="d-flex gap-3"> {/* tighter spacing than justify-around */}
                <span className="nav-link text-white cursor-pointer" onClick={() => setActiveSection('home')}>Home</span>
                <span className="nav-link text-white cursor-pointer" onClick={() => setActiveSection('about')}>About</span>
                <span className="nav-link text-white cursor-pointer" onClick={() => setActiveSection('roles')}>Roles</span>
                <span className="nav-link text-white cursor-pointer" onClick={() => setActiveSection('departments')}>Departments</span>
                <span className="nav-link text-white cursor-pointer" onClick={() => setActiveSection('roleAssign')}>Role Assign</span>
            </div>
        </nav>
    );
};

export default SubHeader;

