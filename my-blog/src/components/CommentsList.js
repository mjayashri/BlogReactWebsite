import React from "react";

const CommentsList = ({comments}) =>(
    <>
        <h3>Comments</h3>
    {comments.map((comments,key) =>(
        <div className={"comment"} key={key}>
                <h4>{comments.username}</h4>
                <p>{comments.text}</p>
        </div>
        ))}
        </>
);

export default CommentsList;