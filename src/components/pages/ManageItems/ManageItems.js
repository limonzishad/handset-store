import React from "react";
import './ManageItems.css';
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import useItem from "../../../hooks/useItem";

const ManageItems = () => {
    const [items, setItems] = useItem();
    const deleteItem = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://floating-forest-85140.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingItems = items.filter(item => item._id !== id);
                    setItems(remainingItems);
                });
        }
    };
    return (
        <div className="mt-5 p-3">
            <div className="w-25 mx-auto my-3"><Link to="/add-items"><button variant="primary" className="w-100 mx-auto common-button custom-border" style={{ margin: '0', padding: '5px' }}>ADD NEW ITEM
            </button> </Link></div>
            <Table striped bordered hover size="sm">
                <thead className="text-center">
                    <tr>
                        <th>NAME</th>
                        <th>SUPPLIER</th>
                        <th>PRICE</th>
                        <th>STOCK</th>
                        <th>SOLD</th>
                        <th>ADDED BY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr key={item._id}>
                            <td>{item.supplier} {item.name}</td>
                            <td>{item.supplier}</td>
                            <td className="text-center">{item.price}</td>
                            <td className="text-center">{item.quantity}</td>
                            <td className="text-center">{item.sold}</td>
                            <td>{item.addedBy}</td>
                            <td className="btn-col"><button onClick={() => { deleteItem(item._id) }} className="delete-btn common-button" style={{ margin: '0' }}><FontAwesomeIcon icon={faTrash} /></button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageItems;