var playlist = new Object({ artist_name: 'song_title' })

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(obj,artist_name){
  delete obj.artist_name
  return obj
  
}