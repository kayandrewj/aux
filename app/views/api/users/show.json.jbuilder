json.partial!('/api/users/user', user: @user)

if @user.is_artist
  json.partial!('/api/users/user', user: @user)
  json.partial!('api/users/artist_profile', artist_profile: @artist_profile)
end
