// Import Libraries
import React, { Component } from 'react'
import { Text,View } from 'react-native'
import axios from 'axios'
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => 
          this.setState({ albums: response.data })
          )
        .catch( error =>
          console.log("Error = " + error.message)
        );
      }

      renderAlbums() {
        return this.state.albums.map(album =>
          <AlbumDetail key={album.title} album={album} />
        );
      }

      render() {
          console.log("state = "+this.state)
        return (
          <ScrollView>
            {this.renderAlbums()}
          </ScrollView>
        );
    }
      
}

export default AlbumList