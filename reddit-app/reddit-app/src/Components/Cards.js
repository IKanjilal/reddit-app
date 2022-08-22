import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { setSelectedCard } from "../Redux/redditSlice";



const Cards = () => {

    const [card, setCard] = useState("");
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setSelectedCard(card));
    }, [card]);

    return (
        <div className="cardOption"> 
            
            <button value="top" onClick={(e) =>  setCard(e.target.value) }>Top</button>
            <button value="hot" onClick={(e) => setCard(e.target.value)}>Hot</button>
            <button value="new" onClick={(e) => setCard(e.target.value)}>New</button> 
            <button className="hidden" value="best" onClick={(e) => setCard(e.target.value)}>Best</button> 

        </div>
    )
};

export default Cards;