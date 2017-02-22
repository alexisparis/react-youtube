import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyBjIsZ0pHo0QpBZvh6BIGmrc_bE0TLNnJI'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            videos : [],
            selectedVideo : null
        }

        this.videoSearch('')
    }
    videoSearch(term) {
        YTSearch({key : API_KEY, term : term}, (videos) => {
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            })
        })
    }

    onSelectVideo(video) {
        this.setState({
            selectedVideo : video
        })
    }

    render() {
        const videosearch = _.debounce((term) => {
            this.videoSearch(term)
        }, 300)
        return (
            <div>
                <SearchBar onTermChanged={term => videosearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} selectVideo={video => this.onSelectVideo(video)}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);