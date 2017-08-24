class Api::UsersController < ApplicationController



  def handle_artist
    @artist = Artist.new(artist_params)

    if @artist.save!
      login(@user)
      render json: @user
    else
      render json: @artist.errors.full_messages, status: 422
    end
    
  end

  def create

    @user = User.new(user_params)
    handle_artist if @user.is_artist
    return if @user.is_artist

    if @user.save
      login(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private

  def artist_params
    params.require(:artist).permit(:band, :bio, :header_img, :profile_color)
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :is_artist)
  end

end
