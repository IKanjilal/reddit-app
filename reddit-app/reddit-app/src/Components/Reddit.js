import React, { useState, useEffect } from "react";
import moment from "moment";
import Comments from "./Comments";
import { loadComments, selectShowComments } from "../Redux/commentsSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubredditImage } from "../Api/api";
import avatar from "../img/avatar.png";
import ReactPlayer from "react-player";


const Reddit = ({ reddit }) => {
   
    const [showComments, setShowComments] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const dispatch = useDispatch();

    const subreddit = reddit.subreddit;
    const permalink = reddit.permalink;
    const date = moment.unix(reddit.created_utc).fromNow();

    const fetchIcon = async() => {
        try {
            const url = await fetchSubredditImage(subreddit);
            (url !== null) && setImageUrl(url.icon_img);
        } catch (error) {
            return;
        }
        
    }
     
    useEffect(() => {
        fetchIcon(subreddit);
        
    }, [subreddit])



    const toggleShowComments = () => {
        setShowComments(!showComments);
        dispatch(loadComments(permalink));
    }

    const showCommentsStatus = useSelector(selectShowComments);
    const commentsList = useSelector(state => state.comments.comments);

    useEffect(() => {
        setShowComments(false);
    }, [showCommentsStatus])


    const renderMedia = () => {
        if (reddit.is_video && reddit.media) {
            return (
                <div
                    className="video-container"
                    style={{ '--aspect-ratio': '3/4' }}
                >
                    <ReactPlayer
                        className="react-player"
                        url={reddit.media.reddit_video.hls_url}
                        controls={true}
                        volume={1}
                        width="100%"
                        height="100%"
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <a href={reddit.url} target="_blank" >
                        <p>{reddit.title}</p>
                        <img className="reddit-photo" src={reddit.thumbnail} />
                    </a>
                </div>
            )
        }
    }

    const renderComments = () => {
        return (
            <div className="Comments">
                <Comments comments={commentsList} showComments={showComments} />
            </div>
        )
    }

    
    return (
        <div className="reddit"> 
            <div className="reddit-data">
                    <span className="reddit-image"><img src={imageUrl || avatar} /> 
                    {reddit.subreddit_name_prefixed}
                    </span>
                    <span className="author">posted by {reddit.author} {date}
                    </span>
            </div>
            {renderMedia()}
                        
            <hr />

            <div className="reddit-details">
                    <button>
                        <span>Ups {reddit.ups} </span>
                    
                        <span> Downs  {reddit.downs}</span>
                    </button>
                    <button            
                    onClick={() => toggleShowComments()}
                    >
                        <span>comments </span> 
                        <span>{reddit.num_comments}</span>
                    </button>                    
            </div> 
            {
               (showComments) && renderComments()
            }     
        </div>
    )
};

export default Reddit;