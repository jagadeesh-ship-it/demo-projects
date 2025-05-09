

import React, { useState, useEffect, useCallback } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Roles = () => {
    const [roles, setRoles] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editRollID, setEditRollID] = useState(null);
    const [editRoleName, setEditRoleName] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);
    const [newRoleName, setNewRoleName] = useState("");

    const token = localStorage.getItem("token");

    const fetchRoles = useCallback(async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/roles", {
                headers: { Authorization: `Bearer ${token}` },
            });
            const rolesData = res.data.data || res.data;
            setRoles(rolesData);
        } catch (err) {
            console.error("❌ Failed to fetch roles:", err?.response?.data || err);
        }
    }, [token]);

    useEffect(() => {
        fetchRoles();
    }, [fetchRoles]);

    const handleCheckboxChange = (rollId) => {
        setSelectedRoles((prev) =>
            prev.includes(rollId) ? prev.filter((id) => id !== rollId) : [...prev, rollId]
        );
    };

    const handleDeleteSelected = async () => {
        if (selectedRoles.length === 0) return;
        try {
            console.log("🧹 Deleting roles:", selectedRoles);
            await axios.post(
                "http://localhost:5000/api/roles/delete-multiple",
                { rollIDs: selectedRoles },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setSelectedRoles([]);
            fetchRoles();
        } catch (err) {
            console.error("❌ Failed to delete selected roles:", err?.response?.data || err);
        }
    };

    const handleDeleteSingle = async (rollId) => {
        try {
            console.log("🗑️ Deleting single role:", rollId);
            await axios.delete(`http://localhost:5000/api/roles/${rollId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchRoles();
        } catch (err) {
            console.error("❌ Failed to delete role:", err?.response?.data || err);
        }
    };

    const handleEditClick = (role) => {
        setEditRollID(role.rollId); // Use rollId here
        setEditRoleName(role.roleName);
        setShowEditModal(true);
    };

    const handleSaveEdit = async () => {
        if (!editRoleName.trim()) return;
        try {
            await axios.put(
                `http://localhost:5000/api/roles/${editRollID}`,
                { roleName: editRoleName },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setShowEditModal(false);
            fetchRoles();
        } catch (err) {
            console.error("❌ Failed to update role:", err?.response?.data || err);
        }
    };

    const handleAddNewRole = async () => {
        if (!newRoleName.trim()) return;
        try {
            await axios.post(
                "http://localhost:5000/api/roles",
                { roleName: newRoleName },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setNewRoleName("");
            setShowAddModal(false);
            fetchRoles();
        } catch (err) {
            console.error("❌ Failed to add role:", err?.response?.data || err);
        }
    };

    return (
        <div className="container mt-4">
            <h4 className="mb-3">🛠️ Manage Roles</h4>

            <div className="d-flex gap-2 mb-3">
                <Button variant="success" onClick={() => setShowAddModal(true)}>
                    <FaPlus className="me-1" /> Add Role
                </Button>
                <Button
                    variant="danger"
                    onClick={handleDeleteSelected}
                    disabled={selectedRoles.length === 0}
                >
                    <FaTrash className="me-1" /> Delete Selected
                </Button>
            </div>

            <Table striped bordered hover>
                <thead className="table-dark">
                    <tr>
                        <th>Select</th>
                        <th>ID</th>
                        <th>Role Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.length > 0 ? (
                        roles.map((role) => (
                            <tr key={role.rollId}> {/* Use rollId here */}
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={selectedRoles.includes(role.rollId)} // Use rollId here
                                        onChange={() => handleCheckboxChange(role.rollId)} // Use rollId here
                                    />
                                </td>
                                <td>{role.rollId}</td> {/* Use rollId here */}
                                <td>{role.roleName}</td>
                                <td>
                                    <Button
                                        variant="link"
                                        className="text-warning me-2 p-0"
                                        onClick={() => handleEditClick(role)}
                                    >
                                        <FaEdit />
                                    </Button>
                                    <Button
                                        variant="link"
                                        className="text-danger p-0"
                                        onClick={() => handleDeleteSingle(role.rollId)} // Use rollId here
                                    >
                                        <FaTrash />
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center text-muted">
                                No roles available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={editRoleName}
                            onChange={(e) => setEditRoleName(e.target.value)}
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
                    <Modal.Title>Add Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Role Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={newRoleName}
                            onChange={(e) => setNewRoleName(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAddNewRole}>
                        Add Role
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Roles;

