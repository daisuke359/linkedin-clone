import { Avatar } from '@material-ui/core';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import SharedOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import React, { forwardRef } from 'react';
import InputOption from '../feed/InputOption';
import "./post.css";

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {

    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl} >{description[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={SharedOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Post

