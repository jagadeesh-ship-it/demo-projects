
import React, { useState } from 'react';
import { FaUsers, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const PageDropdown = ({ setActiveSection }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <li className="nav-item">
            <button
                className="nav-link text-light bg-transparent border-0 d-flex align-items-center justify-content-between w-100"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <span><FaUsers className="me-2" /> Pages</span>
                {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {showDropdown && (
                <ul className="list-unstyled ms-3">
                    <li>
                        <button
                            className="nav-link text-light bg-transparent border-0"
                            onClick={() => setActiveSection('admin')}
                        >
                            Roles
                        </button>
                    </li>
                    <li>
                        <button
                            className="nav-link text-light bg-transparent border-0"
                            onClick={() => setActiveSection('departments')}
                        >
                            Departments
                        </button>
                    </li>
                    <li>
                        <button
                            className="nav-link text-light bg-transparent border-0"
                            onClick={() => setActiveSection('roleassign')}
                        >
                            Role Assign
                        </button>
                    </li>
                </ul>
            )}
        </li>
    );
};

export default PageDropdown;

