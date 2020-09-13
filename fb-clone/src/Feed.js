import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender';
import Post from './Post';
import Photo from './pass.jpg';
import Aa from './img/aa.jpeg';
import Abc from './img/abc.jpg';
import Bb from './img/bb.jpeg';

function Feed() {
    return (
        <div className="feed">

            <StoryReel />
            {/*StoryReel */}
            <MessageSender/>
            {/*Message sender */}
           
            <Post
                profilePic={Photo}
                message=" This is my first Post"
                timestamp="This is working"
                username="Sohel Sorowar"
                image={Abc}

            />

            
            <Post
                profilePic={Photo}
                message=" This is my first Post"
                timestamp="This is working"
                username="Sohel Sorowar"
                image={Bb}

            />
        </div>
    )
}

export default Feed
