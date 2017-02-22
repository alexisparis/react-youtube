import React from 'react'
import VideoListItem from './video_list_item'

// class VideoList extends React.Component {
//     render() {
//         return (
//             <ul className="col-md-4 list-group">
//
//             </ul>
//         )
//     }
// }
const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group">
            { props.videos.map(video => <VideoListItem key={video.etag} video={video} selectVideo={() => props.selectVideo(video)}/>) }
        </ul>
    )
}

export default VideoList