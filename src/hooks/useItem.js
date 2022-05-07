import { useEffect, useState } from "react";

const useItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems];
}

export default useItem;