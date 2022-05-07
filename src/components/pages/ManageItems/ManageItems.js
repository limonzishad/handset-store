import React from "react";
import './ManageItems.css';
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const ManageItems = () => {
    return (
        <div className="mt-5 p-3">
            <div className="w-25 mx-auto my-3"><Link to="/add-items"><button variant="primary" className="w-100 mx-auto common-button custom-border" style={{ margin: '0', padding: '5px' }}>ADD NEW ITEM
            </button> </Link></div>
            <Table striped bordered hover size="sm">
                <thead className="text-center">
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>SUPPLIER</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td className="btn-col"><button className="delete-btn common-button" style={{ margin: '0' }}><FontAwesomeIcon icon={faTrash} /></button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageItems;