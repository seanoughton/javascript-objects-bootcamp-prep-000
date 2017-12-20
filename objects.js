var playlist = new Object({ artist_name: 'song_title' })

function updatePlaylist(obj,artist_name,song_title){
  obj.artist_name = 'song_title'
  return obj 
}

function removeFromPlaylist(obj,artist_name){
  delete obj.artist_name
  return obj
  
}