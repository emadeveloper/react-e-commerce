import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";


const iphone = {id: 1, image: 'https://picsum.photos/id/1/200/300', title: 'Iphone'}


const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(iphone);
            }, 2000);
        })
        getData.then(res => setData(res));
    }, [])
    
    return ( 
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;