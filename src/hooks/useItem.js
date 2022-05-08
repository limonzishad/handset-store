import { useEffect, useState } from "react";

const useItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://floating-forest-85140.herokuapp.com/items')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems];
}

export default useItem;