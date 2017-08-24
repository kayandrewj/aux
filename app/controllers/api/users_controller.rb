class Api::UsersController < ApplicationController

  def create
      # # TODO: comment in line 8 after constructing components
      if true # <== obtuse way to skip artist profile stuff until form exists

        # if !user_params is_artist <== needs another react component to work; user doesn't sent is_artist param
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      @user = User.new(user_params)
      @artist_profile = ArtistProfile.new(artist_profile_params)
      @user.artist_profile = @artist_profile #pre-db-save assignment. wat
      if @user.save
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  private

  def artist_profile_params
    params.require(:artist_profile).permit(:band, :bio, :header_img, :profile_color)
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :is_artist)
  end

end
