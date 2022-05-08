import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const AddItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `https://floating-forest-85140.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className="w-25 mx-auto">
            <h2 className="mt-5 text-center">ADD NEW ITEM</h2>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className="p-2 my-2 custom-border" {...register("addedBy")} value={user.email} readOnly />
                <input className="p-2 my-2 custom-border" {...register("name", { required: true })} placeholder="Model Name" />
                <input className="p-2 my-2 custom-border" {...register("supplier", { required: true })} placeholder="Supplier Name" />
                <input className="p-2 my-2 custom-border" {...register("price", { required: true })} placeholder="Price (use $ sign before price)" />
                <input className="p-2 my-2 custom-border" type="number" {...register("quantity", { required: true })} placeholder="Quantity" />
                <input className="p-2 my-2 custom-border" type="number" {...register("sold", { required: true })} placeholder="Sold" />
                <input className="p-2 my-2 custom-border" {...register("img", { required: true })} placeholder="Image URL" />
                <textarea className="p-2 my-2 custom-border" {...register("description", { required: true })} placeholder="Description" />
                <input className="common-button custom-border" type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default AddItems;