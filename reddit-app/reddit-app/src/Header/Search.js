import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../Redux/redditSlice"; 

const Search = () => {

    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
    }


    const changeHandler = () => {
        dispatch(setSearchTerm(inputRef.current.value));
    };    


    return (
        <div className="search">
            <form  onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="search redditApp"
                    ref={inputRef}
                    onChange={changeHandler}
                />
                <button className="clearBtn" onClick={() => inputRef.current.value = ""}>X</button>
            </form>
        </div>
    )
};

export default Search;
