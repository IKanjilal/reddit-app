import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddits, getSubreddits } from "../Redux/subredditSlice";
import { fetchSubreddits } from "../Api/api";
import Subreddit from "./Subreddit";


const Subreddits = () => {
    
    const dispatch = useDispatch();

    const getAllSubreddits = async() => {
        try {
            const data = await fetchSubreddits();
            dispatch(getSubreddits(data));
        } catch (error) {
            return;
        }    
    };

    useEffect(() => {
        getAllSubreddits();
    }, []);

    
    const subreddits = useSelector(selectSubreddits);
    
    return (
        
            <div className="subreddits">
                <p>top subreddits</p>
                <div className="subreddits-container">
                    {
                        subreddits.map((subreddit) => 
                                <Subreddit 
                                subreddit={subreddit} 
                                />
                        )
                    }
                </div>
            </div>
            
            
        
        
    )
};

export default Subreddits;