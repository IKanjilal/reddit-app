import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

function Comment({ comment }) {

    return (
        <div className="Comment">
            <div className="Comment-header" >
                <span>{comment.author}</span>
                <span>r/{comment.subreddit}</span>
                <span>{moment.unix(comment.created_utc).fromNow()}</span>
            </div>
            <ReactMarkdown>{comment.body}</ReactMarkdown>
        </div>
    );
}

export default Comment;