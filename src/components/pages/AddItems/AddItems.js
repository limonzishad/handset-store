import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className="w-25 mx-auto">
            <h2 className="mt-5 text-center">ADD NEW ITEM</h2>
            <form className="d-flex flex-column" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <input className="p-2 my-2 custom-border" {...register("name")} placeholder="Model Name" />
                <input className="p-2 my-2 custom-border" {...register("supplier")} placeholder="Supplier Name" />
                <input className="p-2 my-2 custom-border" type="number" {...register("price")} placeholder="Price" />
                <input className="p-2 my-2 custom-border" type="number" {...register("quantity")} placeholder="Quantity" />
                <input className="p-2 my-2 custom-border" type="number" {...register("sold")} placeholder="Sold" />
                <input className="p-2 my-2 custom-border" {...register("img")} placeholder="Image (image link)" />
                <textarea className="p-2 my-2 custom-border" {...register("description")} placeholder="Description" />
                <input className="common-button custom-border" type="submit" />
            </form>
        </div>
    );
};

export default AddItems;