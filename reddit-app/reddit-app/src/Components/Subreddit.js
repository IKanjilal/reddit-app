import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { setSelectedSubreddit } from "../Redux/redditSlice";
import avatar from "../img/avatar.png";

const Subreddit = ({subreddit}) => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelectedSubreddit(term));
    }, [term]);

    return (
        <div className="subreddit-list">
            <button className="subreddits-btn" onClick={() => setTerm(subreddit.display_name)}>
                <div className="subreddit">
                    <img src={subreddit.icon_img || avatar}
                        alt=""
                        style={{ backgroundColor: ` ${subreddit.primary_color}`}} />
                    <span>r/{subreddit.display_name}</span>
                </div>
            </button>
        </div>
    )
};


export default Subreddit;