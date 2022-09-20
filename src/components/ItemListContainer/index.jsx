import React from "react";
import Title from "../title";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";


export const ItemListContainer = ({texto}) => {
    

    
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }
    
    return (
        <>
        <Title greeting={texto}/>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList />
        </> 

    );
}

export default ItemListContainer;