json.partial!('/api/users/user', user: @user)

if @user.is_artist
  json.partial!('./artist_profile', artist_profile: @artist_profile)
end
