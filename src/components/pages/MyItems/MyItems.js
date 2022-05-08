import React from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import useItem from "../../../hooks/useItem";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useItem();
    const { addedBy } = items;
    const deleteItem = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
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
    const myItems = items.filter(item => user.email == item.addedBy);
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
                        myItems.map(myItem =>
                            <tr key={myItem._id}>
                                <td>{myItem.supplier} {myItem.name}</td>
                                <td>{myItem.supplier}</td>
                                <td className="text-center">{myItem.price}</td>
                                <td className="text-center">{myItem.quantity}</td>
                                <td className="text-center">{myItem.sold}</td>
                                <td>{myItem.addedBy}</td>
                                <td className="btn-col"><button onClick={() => { deleteItem(myItem._id) }} className="delete-btn common-button" style={{ margin: '0' }}><FontAwesomeIcon icon={faTrash} /></button></td>
                            </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyItems;