var playlist = new Object({ artist_name: 'song_title' })

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artist_name
  return playlist
  
}