import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender';

function Feed() {
    return (
        <div className="feed">

            <StoryReel />
            {/*StoryReel */}
            <MessageSender/>
            {/*Message sender */}
            
        </div>
    )
}

export default Feed
