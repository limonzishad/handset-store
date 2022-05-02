import { useEffect, useState } from "react";

const useItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('serviceData.json')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems];
}

export default useItem;