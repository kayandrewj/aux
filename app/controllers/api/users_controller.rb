class Api::UsersController < ApplicationController

  def create
    if !user_params[:is_artist]
      @user = User.new(user_params)
      if @user.save
        login(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      @user = User.new(user_params)
      @artist_profile = ArtistProfile.new(artist_profile_params)
      if @user.save
        if @artist_profile.save
          render json: @user
        else
          @user.destroy
          render json: @user.errors.full_messages, status: 422;
        end
      else
        render json: @user.errors.full_messages, status: 422;
      end

    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private

  def artist_profile_params
    params.require(:user).permit(:band, :bio, :header, :profile_color)
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :is_artist)
  end

end
