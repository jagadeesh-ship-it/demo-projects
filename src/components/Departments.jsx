


// import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Departments = () => {
//     const [departments, setDepartments] = useState([]);
//     const [selectedDepartments, setSelectedDepartments] = useState([]);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [editDepartmentID, setEditDepartmentID] = useState(null);
//     const [editDepartmentName, setEditDepartmentName] = useState("");
//     const [showAddModal, setShowAddModal] = useState(false);
//     const [newDepartmentName, setNewDepartmentName] = useState("");

//     const token = localStorage.getItem("token");

//     const fetchDepartments = useCallback(async () => {
//         try {
//             const response = await axios.get("http://localhost:5000/api/departments", {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setDepartments(response.data || []);
//         } catch (err) {
//             console.error("Error fetching departments", err);
//         }
//     }, [token]);

//     useEffect(() => {
//         fetchDepartments();
//     }, [fetchDepartments]);

//     const handleCheckboxChange = (id) => {
//         setSelectedDepartments((prev) =>
//             prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
//         );
//     };

//     const handleDeleteSingle = async (id) => {
//         try {
//             await axios.delete(`http://localhost:5000/api/departments/${id}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             fetchDepartments();
//         } catch (err) {
//             alert(err?.response?.data?.message || "Error deleting department");
//         }
//     };

//     const handleDeleteSelected = async () => {
//         try {
//             await axios.post(
//                 "http://localhost:5000/api/departments/delete-multiple",
//                 { departmentIDs: selectedDepartments },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             setSelectedDepartments([]);
//             fetchDepartments();
//         } catch (err) {
//             alert(err?.response?.data?.message || "Some departments are assigned to users");
//         }
//     };

//     const handleEditClick = (dept) => {
//         setEditDepartmentID(dept.departmentID);
//         setEditDepartmentName(dept.departmentName);
//         setShowEditModal(true);
//     };

//     const handleSaveEdit = async () => {
//         if (!editDepartmentName.trim()) return;
//         try {
//             await axios.put(
//                 `http://localhost:5000/api/departments/${editDepartmentID}`,
//                 { departmentName: editDepartmentName.trim() },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             fetchDepartments();
//             setShowEditModal(false);
//         } catch (err) {
//             alert("Update failed");
//         }
//     };

//     const handleSaveNewDepartment = async () => {
//         if (!newDepartmentName.trim()) return;
//         try {
//             await axios.post(
//                 "http://localhost:5000/api/departments",
//                 { departmentName: newDepartmentName.trim() },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             fetchDepartments();
//             setNewDepartmentName("");
//             setShowAddModal(false);
//         } catch (err) {
//             alert("Failed to add department");
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h2>Departments</h2>

//             <div className="mb-3 d-flex gap-2">
//                 <Button variant="success" onClick={() => setShowAddModal(true)}>
//                     <FaPlus /> Add Department
//                 </Button>
//                 <Button
//                     variant="danger"
//                     onClick={handleDeleteSelected}
//                     disabled={selectedDepartments.length === 0}
//                 >
//                     <FaTrash /> Delete Selected
//                 </Button>
//             </div>

//             <Table striped bordered hover>
//                 <thead className="table-dark">
//                     <tr>
//                         <th>Select</th>
//                         <th>ID</th>
//                         <th>Department Name</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {departments.length > 0 ? (
//                         departments.map((dept) => (
//                             <tr key={dept.departmentID}>
//                                 <td>
//                                     <Form.Check
//                                         type="checkbox"
//                                         onChange={() => handleCheckboxChange(dept.departmentID)}
//                                         checked={selectedDepartments.includes(dept.departmentID)}
//                                     />
//                                 </td>
//                                 <td>{dept.departmentID}</td>
//                                 <td>{dept.departmentName}</td>
//                                 <td>
//                                     <Button
//                                         variant="link"
//                                         className="text-warning me-2"
//                                         onClick={() => handleEditClick(dept)}
//                                     >
//                                         <FaEdit />
//                                     </Button>
//                                     <Button
//                                         variant="link"
//                                         className="text-danger"
//                                         onClick={() => handleDeleteSingle(dept.departmentID)}
//                                     >
//                                         <FaTrash />
//                                     </Button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="4" className="text-center">
//                                 No departments found.
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>

//             {/* Edit Modal */}
//             <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Department</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form.Group>
//                         <Form.Label>Department Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             value={editDepartmentName}
//                             onChange={(e) => setEditDepartmentName(e.target.value)}
//                         />
//                     </Form.Group>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowEditModal(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="primary" onClick={handleSaveEdit}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//             {/* Add Modal */}
//             <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add Department</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form.Group>
//                         <Form.Label>Department Name</Form.Label>
//                         <Form.Control
//                             type="text"
//                             value={newDepartmentName}
//                             onChange={(e) => setNewDepartmentName(e.target.value)}
//                             placeholder="Enter department name"
//                         />
//                     </Form.Group>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowAddModal(false)}>
//                         Cancel
//                     </Button>
//                     <Button variant="primary" onClick={handleSaveNewDepartment}>
//                         Add Department
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

// export default Departments;
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Departments = () => {
    const [departments, setDepartments] = useState([]);
    const [selectedDepartments, setSelectedDepartments] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editDepartmentID, setEditDepartmentID] = useState(null);
    const [editDepartmentName, setEditDepartmentName] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [newDepartmentName, setNewDepartmentName] = useState("");

    const token = localStorage.getItem("token");

    const fetchDepartments = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/departments", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setDepartments(response.data.data || response.data); // support Option 1
        } catch (err) {
            console.error("Error fetching departments", err);
        }
    }, [token]);

    useEffect(() => {
        fetchDepartments();
    }, [fetchDepartments]);

    const handleCheckboxChange = (id) => {
        setSelectedDepartments((prev) =>
            prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
        );
    };

    const handleDeleteSingle = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/departments/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchDepartments();
        } catch (err) {
            alert(err?.response?.data?.message || "Error deleting department");
        }
    };

    const handleDeleteSelected = async () => {
        try {
            await axios.post(
                "http://localhost:5000/api/departments/delete-multiple",
                { ids: selectedDepartments },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setSelectedDepartments([]);
            fetchDepartments();
        } catch (err) {
            alert(err?.response?.data?.message || "Error deleting selected departments");
        }
    };

    const handleEditClick = (dept) => {
        setEditDepartmentID(dept.departmentID);
        setEditDepartmentName(dept.departmentName);
        setShowEditModal(true);
    };

    const handleSaveEdit = async () => {
        if (!editDepartmentName.trim()) return;
        try {
            await axios.put(
                `http://localhost:5000/api/departments/${editDepartmentID}`,
                { departmentName: editDepartmentName.trim() },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setShowEditModal(false);
            fetchDepartments();
        } catch (err) {
            alert("Update failed");
        }
    };

    const handleSaveNewDepartment = async () => {
        if (!newDepartmentName.trim()) return;
        try {
            await axios.post(
                "http://localhost:5000/api/departments",
                { departmentName: newDepartmentName.trim() },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setShowAddModal(false);
            setNewDepartmentName("");
            fetchDepartments();
        } catch (err) {
            alert("Failed to add department");
        }
    };

    return (
        <div className="container mt-4">
            <h2>🏢 Departments</h2>

            <div className="mb-3 d-flex gap-2">
                <Button variant="success" onClick={() => setShowAddModal(true)}>
                    <FaPlus /> Add Department
                </Button>
                <Button
                    variant="danger"
                    onClick={handleDeleteSelected}
                    disabled={selectedDepartments.length === 0}
                >
                    <FaTrash /> Delete Selected
                </Button>
            </div>

            <Table striped bordered hover>
                <thead className="table-dark">
                    <tr>
                        <th>Select</th>
                        <th>ID</th>
                        <th>Department Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.length > 0 ? (
                        departments.map((dept) => (
                            <tr key={dept.departmentID}>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange(dept.departmentID)}
                                        checked={selectedDepartments.includes(dept.departmentID)}
                                    />
                                </td>
                                <td>{dept.departmentID}</td>
                                <td>{dept.departmentName}</td>
                                <td>
                                    <Button
                                        variant="link"
                                        className="text-warning me-2"
                                        onClick={() => handleEditClick(dept)}
                                    >
                                        <FaEdit />
                                    </Button>
                                    <Button
                                        variant="link"
                                        className="text-danger"
                                        onClick={() => handleDeleteSingle(dept.departmentID)}
                                    >
                                        <FaTrash />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center text-muted">
                                No departments found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Department Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={editDepartmentName}
                            onChange={(e) => setEditDepartmentName(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Add Modal */}
            <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Department Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={newDepartmentName}
                            onChange={(e) => setNewDepartmentName(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveNewDepartment}>
                        Add Department
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Departments;

