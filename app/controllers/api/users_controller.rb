class Api::UsersController < ApplicationController

  def create

    if !user_params.is_artist
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      @user = User.new(user_params)
      @artist_profile = Artist.new(artist_params)
      @user.artist_profile = @artist_profile #pre-database-save assignment. wat
      if @user.save
        render json: @user
      else
        render json: @user.errors.full_messages, status: 422
      end
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
