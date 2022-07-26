import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        <div>Loading...</div>
    }
   // const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
        <div className="ui embed"> 
        <iframe title="video player"/>
        </div>
        <div>
            <div className="ui segment">
            <h4 className="ui header">{}</h4>          
            </div>
        </div>
        </div>
    );
}

export default VideoDetail;