import './Playlist.css'
import React from 'react';
import { TrackList } from '../TrackList/TrackList';

export class Playlist extends React.Component{
	render(){
		return(<div className="Playlist">
					<input defaultValue={'New Playlist'}/>
					<TrackList />
					<button className="Playlist-save">SAVE TO SPOTIFY</button>
	  			</div>
		)
	}
}