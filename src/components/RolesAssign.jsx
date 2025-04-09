
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Table, Button, FormControl, Form, Modal, InputGroup } from "react-bootstrap";

// // const RoleAssign = () => {
// //     const [users, setUsers] = useState([]);
// //     const [roles, setRoles] = useState([]);
// //     const [departments, setDepartments] = useState([]);
// //     const [selectedUser, setSelectedUser] = useState(null);
// //     const [updatedRole, setUpdatedRole] = useState("");
// //     const [updatedDept, setUpdatedDept] = useState("");
// //     const [showModal, setShowModal] = useState(false);
// //     const [searchTerm, setSearchTerm] = useState("");

// //     const token = localStorage.getItem("token");

// //     const fetchUsers = async () => {
// //         try {
// //             const res = await axios.get("http://localhost:5000/api/persons", {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });
// //             setUsers(res.data.data || []);
// //         } catch (err) {
// //             console.error("Error fetching users:", err);
// //         }
// //     };

// //     const fetchRoles = async () => {
// //         try {
// //             const res = await axios.get("http://localhost:5000/api/roles", {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });
// //             setRoles(res.data || []);
// //         } catch (err) {
// //             console.error("Error fetching roles:", err);
// //         }
// //     };

// //     const fetchDepartments = async () => {
// //         try {
// //             const res = await axios.get("http://localhost:5000/api/departments", {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });
// //             setDepartments(res.data || []);
// //         } catch (err) {
// //             console.error("Error fetching departments:", err);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchUsers();
// //         fetchRoles();
// //         fetchDepartments();
// //     }, []);

// //     const handleEdit = (user) => {
// //         setSelectedUser(user);
// //         setUpdatedRole(user.roleName || "");
// //         setUpdatedDept(user.department || "");
// //         setShowModal(true);
// //     };

// //     const handleSave = async () => {
// //         try {
// //             await axios.put(
// //                 `http://localhost:5000/api/persons/${selectedUser.id}`,
// //                 { roleName: updatedRole, department: updatedDept },
// //                 { headers: { Authorization: `Bearer ${token}` } }
// //             );
// //             setShowModal(false);
// //             fetchUsers();
// //         } catch (error) {
// //             console.error("Update error:", error);
// //             alert("Failed to update role and department.");
// //         }
// //     };

// //     const filteredUsers = users.filter((user) =>
// //         `${user.name} ${user.username} ${user.email}`.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     return (
// //         <div className="p-4">
// //             <div className="bg-dark text-white p-3 rounded shadow mb-4">
// //                 <h4 className="m-0">🛡️ Role Assignment</h4>
// //             </div>

// //             <InputGroup className="mb-4 shadow-sm" style={{ maxWidth: "400px" }}>
// //                 <FormControl
// //                     placeholder="Search by name, username, or email..."
// //                     value={searchTerm}
// //                     onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //             </InputGroup>

// //             <Table bordered hover responsive className="shadow-sm">
// //                 <thead className="table-dark">
// //                     <tr>
// //                         <th>#</th>
// //                         <th>Username</th>
// //                         <th>Role</th>
// //                         <th>Department</th>
// //                         <th style={{ width: "100px" }}>Actions</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {filteredUsers.length > 0 ? (
// //                         filteredUsers.map((user, idx) => (
// //                             <tr key={user.id}>
// //                                 <td>{idx + 1}</td>
// //                                 <td>{user.username}</td>
// //                                 <td>{user.roleName || "Not assigned"}</td>
// //                                 <td>{user.department || "Not assigned"}</td>
// //                                 <td className="text-center">
// //                                     <Button variant="primary" size="sm" onClick={() => handleEdit(user)}>
// //                                         Assign
// //                                     </Button>
// //                                 </td>
// //                             </tr>
// //                         ))
// //                     ) : (
// //                         <tr>
// //                             <td colSpan="5" className="text-center text-muted">
// //                                 No users found.
// //                             </td>
// //                         </tr>
// //                     )}
// //                 </tbody>
// //             </Table>

// //             {/* Assign Modal */}
// //             <Modal show={showModal} onHide={() => setShowModal(false)} centered>
// //                 <Modal.Header closeButton>
// //                     <Modal.Title>Assign Role & Department</Modal.Title>
// //                 </Modal.Header>
// //                 <Modal.Body>
// //                     <Form>
// //                         <Form.Group className="mb-3">
// //                             <Form.Label>Name</Form.Label>
// //                             <Form.Control type="text" value={selectedUser?.name || ""} disabled />
// //                         </Form.Group>

// //                         <Form.Group className="mb-3">
// //                             <Form.Label>Select Role</Form.Label>
// //                             <Form.Select
// //                                 value={updatedRole}
// //                                 onChange={(e) => setUpdatedRole(e.target.value)}
// //                             >
// //                                 <option value="">-- Select Role --</option>
// //                                 {roles.map((role) => (
// //                                     <option key={role.roleID} value={role.roleName}>
// //                                         {role.roleName}
// //                                     </option>
// //                                 ))}
// //                             </Form.Select>
// //                         </Form.Group>

// //                         <Form.Group>
// //                             <Form.Label>Select Department</Form.Label>
// //                             <Form.Select
// //                                 value={updatedDept}
// //                                 onChange={(e) => setUpdatedDept(e.target.value)}
// //                             >
// //                                 <option value="">-- Select Department --</option>
// //                                 {departments.map((dept) => (
// //                                     <option key={dept.departmentID} value={dept.departmentName}>
// //                                         {dept.departmentName}
// //                                     </option>
// //                                 ))}
// //                             </Form.Select>
// //                         </Form.Group>
// //                     </Form>
// //                 </Modal.Body>
// //                 <Modal.Footer>
// //                     <Button variant="secondary" onClick={() => setShowModal(false)}>
// //                         Cancel
// //                     </Button>
// //                     <Button variant="success" onClick={handleSave}>
// //                         Save Changes
// //                     </Button>
// //                 </Modal.Footer>
// //             </Modal>
// //         </div>
// //     );
// // };

// // // export default RoleAssign;

// // import React, { useEffect, useState, useCallback } from "react";
// // import axios from "axios";
// // import { Table, Button, FormControl, Form, Modal, InputGroup } from "react-bootstrap";

// // const RoleAssign = () => {
// //     const [users, setUsers] = useState([]);
// //     const [roles, setRoles] = useState([]);
// //     const [departments, setDepartments] = useState([]);
// //     const [selectedUser, setSelectedUser] = useState(null);
// //     const [updatedRole, setUpdatedRole] = useState("");
// //     const [updatedDept, setUpdatedDept] = useState("");
// //     const [showModal, setShowModal] = useState(false);
// //     const [searchTerm, setSearchTerm] = useState("");

// //     const token = localStorage.getItem("token");

// //     const fetchUsers = useCallback(async () => {
// //         try {
// //             const res = await axios.get("http://localhost:5000/api/persons", {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });
// //             setUsers(res.data.data || []);
// //         } catch (err) {
// //             console.error("Error fetching users:", err);
// //         }
// //     }, [token]);

// //     const fetchRoles = useCallback(async () => {
// //         try {
// //             const res = await axios.get("http://localhost:5000/api/roles", {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });
// //             setRoles(res.data || []);
// //         } catch (err) {
// //             console.error("Error fetching roles:", err);
// //         }
// //     }, [token]);

// //     const fetchDepartments = useCallback(async () => {
// //         try {
// //             const res = await axios.get("http://localhost:5000/api/departments", {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });
// //             setDepartments(res.data || []);
// //         } catch (err) {
// //             console.error("Error fetching departments:", err);
// //         }
// //     }, [token]);

// //     useEffect(() => {
// //         fetchUsers();
// //         fetchRoles();
// //         fetchDepartments();
// //     }, [fetchUsers, fetchRoles, fetchDepartments]);

// //     const handleEdit = (user) => {
// //         setSelectedUser(user);
// //         setUpdatedRole(user.roleName || "");
// //         setUpdatedDept(user.department || "");
// //         setShowModal(true);
// //     };

// //     const handleSave = async () => {
// //         try {
// //             await axios.put(
// //                 `http://localhost:5000/api/persons/${selectedUser.id}`,
// //                 { roleName: updatedRole, department: updatedDept },
// //                 { headers: { Authorization: `Bearer ${token}` } }
// //             );
// //             setShowModal(false);
// //             fetchUsers();
// //         } catch (error) {
// //             console.error("Update error:", error);
// //             alert("Failed to update role and department.");
// //         }
// //     };

// //     const filteredUsers = users.filter((user) =>
// //         `${user.name} ${user.username} ${user.email}`.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     return (
// //         <div className="p-4">
// //             <div className="bg-dark text-white p-3 rounded shadow mb-4">
// //                 <h4 className="m-0">🛡️ Role Assignment</h4>
// //             </div>

// //             <InputGroup className="mb-4 shadow-sm" style={{ maxWidth: "400px" }}>
// //                 <FormControl
// //                     placeholder="Search by name, username, or email..."
// //                     value={searchTerm}
// //                     onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //             </InputGroup>

// //             <Table bordered hover responsive className="shadow-sm">
// //                 <thead className="table-dark">
// //                     <tr>
// //                         <th>#</th>
// //                         <th>Username</th>
// //                         <th>Role</th>
// //                         <th>Department</th>
// //                         <th style={{ width: "100px" }}>Actions</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {filteredUsers.length > 0 ? (
// //                         filteredUsers.map((user, idx) => (
// //                             <tr key={user.id}>
// //                                 <td>{idx + 1}</td>
// //                                 <td>{user.username}</td>
// //                                 <td>{user.roleName || "Not assigned"}</td>
// //                                 <td>{user.department || "Not assigned"}</td>
// //                                 <td className="text-center">
// //                                     <Button variant="primary" size="sm" onClick={() => handleEdit(user)}>
// //                                         Assign
// //                                     </Button>
// //                                 </td>
// //                             </tr>
// //                         ))
// //                     ) : (
// //                         <tr>
// //                             <td colSpan="5" className="text-center text-muted">
// //                                 No users found.
// //                             </td>
// //                         </tr>
// //                     )}
// //                 </tbody>
// //             </Table>

// //             {/* Assign Modal */}
// //             <Modal show={showModal} onHide={() => setShowModal(false)} centered>
// //                 <Modal.Header closeButton>
// //                     <Modal.Title>Assign Role & Department</Modal.Title>
// //                 </Modal.Header>
// //                 <Modal.Body>
// //                     <Form>
// //                         <Form.Group className="mb-3">
// //                             <Form.Label>Name</Form.Label>
// //                             <Form.Control type="text" value={selectedUser?.name || ""} disabled />
// //                         </Form.Group>
// //                         <Form.Group className="mb-3">
// //                             <Form.Label>Select Role</Form.Label>
// //                             <Form.Select
// //                                 value={updatedRole}
// //                                 onChange={(e) => setUpdatedRole(e.target.value)}
// //                             >
// //                                 <option value="">-- Select Role --</option>
// //                                 {roles.map((role) => (
// //                                     <option key={role.roleID} value={role.roleName}>
// //                                         {role.roleName}
// //                                     </option>
// //                                 ))}
// //                             </Form.Select>
// //                         </Form.Group>
// //                         <Form.Group>
// //                             <Form.Label>Select Department</Form.Label>
// //                             <Form.Select
// //                                 value={updatedDept}
// //                                 onChange={(e) => setUpdatedDept(e.target.value)}
// //                             >
// //                                 <option value="">-- Select Department --</option>
// //                                 {departments.map((dept) => (
// //                                     <option key={dept.departmentID} value={dept.departmentName}>
// //                                         {dept.departmentName}
// //                                     </option>
// //                                 ))}
// //                             </Form.Select>
// //                         </Form.Group>
// //                     </Form>
// //                 </Modal.Body>
// //                 <Modal.Footer>
// //                     <Button variant="secondary" onClick={() => setShowModal(false)}>
// //                         Cancel
// //                     </Button>
// //                     <Button variant="success" onClick={handleSave}>
// //                         Save Changes
// //                     </Button>
// //                 </Modal.Footer>
// //             </Modal>
// //         </div>
// //     );
// // };

// // export default RoleAssign;

// import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";
// import { Table, Button, FormControl, Form, Modal, InputGroup } from "react-bootstrap";

// const RoleAssign = () => {
//     const [users, setUsers] = useState([]);
//     const [roles, setRoles] = useState([]);
//     const [departments, setDepartments] = useState([]);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [updatedRole, setUpdatedRole] = useState("");
//     const [updatedDept, setUpdatedDept] = useState("");
//     const [showModal, setShowModal] = useState(false);
//     const [searchTerm, setSearchTerm] = useState("");

//     const token = localStorage.getItem("token");

//     const fetchUsers = useCallback(async () => {
//         try {
//             const res = await axios.get("http://localhost:5000/api/persons", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUsers(res.data.data || []);
//         } catch (err) {
//             console.error("Error fetching users:", err);
//         }
//     }, [token]);

//     const fetchRoles = useCallback(async () => {
//         try {
//             const res = await axios.get("http://localhost:5000/api/roles", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setRoles(res.data || []);
//         } catch (err) {
//             console.error("Error fetching roles:", err);
//         }
//     }, [token]);

//     const fetchDepartments = useCallback(async () => {
//         try {
//             const res = await axios.get("http://localhost:5000/api/departments", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setDepartments(res.data || []);
//         } catch (err) {
//             console.error("Error fetching departments:", err);
//         }
//     }, [token]);

//     useEffect(() => {
//         fetchUsers();
//         fetchRoles();
//         fetchDepartments();
//     }, [fetchUsers, fetchRoles, fetchDepartments]);

//     const handleEdit = (user) => {
//         setSelectedUser(user);
//         setUpdatedRole(user.roleName || "");
//         setUpdatedDept(user.departmentName || "");
//         setShowModal(true);
//     };

//     const handleSave = async () => {
//         try {
//             await axios.put(
//                 `http://localhost:5000/api/persons/${selectedUser.id}`,
//                 { roleName: updatedRole, departmentName: updatedDept },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             setShowModal(false);
//             fetchUsers();
//         } catch (error) {
//             console.error("Update error:", error);
//             alert("Failed to update role and department.");
//         }
//     };

//     const filteredUsers = users.filter((user) =>
//         `${user.name} ${user.username} ${user.email}`.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="p-4">
//             <div className="bg-dark text-white p-3 rounded shadow mb-4">
//                 <h4 className="m-0">🛡️ Role Assignment</h4>
//             </div>

//             <InputGroup className="mb-4 shadow-sm" style={{ maxWidth: "400px" }}>
//                 <FormControl
//                     placeholder="Search by name, username, or email..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//             </InputGroup>

//             <Table bordered hover responsive className="shadow-sm">
//                 <thead className="table-dark">
//                     <tr>
//                         <th>#</th>
//                         <th>Username</th>
//                         <th>Role</th>
//                         <th>Department</th>
//                         <th style={{ width: "100px" }}>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredUsers.length > 0 ? (
//                         filteredUsers.map((user, idx) => (
//                             <tr key={user.id}>
//                                 <td>{idx + 1}</td>
//                                 <td>{user.username}</td>
//                                 <td>{user.roleName || "Not assigned"}</td>
//                                 <td>{user.departmentName || "Not assigned"}</td>
//                                 <td className="text-center">
//                                     <Button variant="primary" size="sm" onClick={() => handleEdit(user)}>
//                                         Assign
//                                     </Button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="5" className="text-center text-muted">
//                                 No users found.
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>

//             {/* Assign Modal */}
//             <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Assign Role & Department</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control type="text" value={selectedUser?.name || ""} disabled />
//                         </Form.Group>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Select Role</Form.Label>
//                             <Form.Select
//                                 value={updatedRole}
//                                 onChange={(e) => setUpdatedRole(e.target.value)}
//                             >
//                                 <option value="">-- Select Role --</option>
//                                 {roles.map((role) => (
//                                     <option key={role.roleID} value={role.roleName}>
//                                         {role.roleName}
//                                     </option>
//                                 ))}
//                             </Form.Select>
//                         </Form.Group>
//                         <Form.Group>
//                             <Form.Label>Select Department</Form.Label>
//                             <Form.Select
//                                 value={updatedDept}
//                                 onChange={(e) => setUpdatedDept(e.target.value)}
//                             >
//                                 <option value="">-- Select Department --</option>
//                                 {departments.map((dept) => (
//                                     <option key={dept.departmentID} value={dept.departmentName}>
//                                         {dept.departmentName}
//                                     </option>
//                                 ))}
//                             </Form.Select>
//                         </Form.Group>
//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="success" onClick={handleSave}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

// export default RoleAssign;   


import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Table, Button, FormControl, Form, Modal, InputGroup } from "react-bootstrap";

const RoleAssign = () => {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [updatedRole, setUpdatedRole] = useState("");
    const [updatedDept, setUpdatedDept] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const token = localStorage.getItem("token");

    const fetchUsers = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/persons", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUsers(res.data || []);
        } catch (err) {
            console.error("Error fetching users:", err);
        }
    }, [token]);

    const fetchRoles = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/roles", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setRoles(res.data || []);
        } catch (err) {
            console.error("Error fetching roles:", err);
        }
    }, [token]);

    const fetchDepartments = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/departments", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setDepartments(res.data || []);
        } catch (err) {
            console.error("Error fetching departments:", err);
        }
    }, [token]);

    useEffect(() => {
        fetchUsers();
        fetchRoles();
        fetchDepartments();
    }, [fetchUsers, fetchRoles, fetchDepartments]);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setUpdatedRole(user.roleName || "");
        setUpdatedDept(user.departmentName || "");
        setShowModal(true);
    };

    const handleSave = async () => {
        try {
            await axios.put(
                `http://localhost:5000/api/persons/${selectedUser.id}`,
                {
                    roleName: updatedRole,
                    departmentName: updatedDept,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setShowModal(false);
            fetchUsers();
        } catch (error) {
            console.error("Update error:", error);
            alert("Failed to update role and department.");
        }
    };

    const filteredUsers = users.filter((user) =>
        `${user.name} ${user.username} ${user.email}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <div className="bg-dark text-white p-3 rounded shadow mb-4">
                <h4 className="m-0">🛡️ Role Assignment</h4>
            </div>

            <InputGroup className="mb-4 shadow-sm" style={{ maxWidth: "400px" }}>
                <FormControl
                    placeholder="Search by name, username, or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </InputGroup>

            <Table bordered hover responsive className="shadow-sm">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th style={{ width: "100px" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user, idx) => (
                            <tr key={user.id}>
                                <td>{idx + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.roleName || "Not assigned"}</td>
                                <td>{user.departmentName || "Not assigned"}</td>
                                <td className="text-center">
                                    <Button variant="primary" size="sm" onClick={() => handleEdit(user)}>
                                        Assign
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center text-muted">
                                No users found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Assign Role & Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={selectedUser?.name || ""} disabled />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Select Role</Form.Label>
                            <Form.Select
                                value={updatedRole}
                                onChange={(e) => setUpdatedRole(e.target.value)}
                            >
                                <option value="">-- Select Role --</option>
                                {roles.map((role) => (
                                    <option key={role.roleID} value={role.roleName}>
                                        {role.roleName}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Select Department</Form.Label>
                            <Form.Select
                                value={updatedDept}
                                onChange={(e) => setUpdatedDept(e.target.value)}
                            >
                                <option value="">-- Select Department --</option>
                                {departments.map((dept) => (
                                    <option key={dept.departmentID} value={dept.departmentName}>
                                        {dept.departmentName}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RoleAssign;
