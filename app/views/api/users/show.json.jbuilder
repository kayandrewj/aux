json.partial!('./user', user: @user)

if @user.is_artist
  json.partial!('./artist', artist: @artist)
end
