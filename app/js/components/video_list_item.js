import React from 'react'

const VideoListItem = ({video, selectVideo}) => {
    return (
        <li className="list-group-item" onClick={(event) => selectVideo()}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object"
                        src={video.snippet.thumbnails.default.url}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem
