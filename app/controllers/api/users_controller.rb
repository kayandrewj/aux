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
      if @user.save
        login(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  end

  def show
    @user = User.find(params[:id])
    @artist_profile = @user.artist_profile
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :is_artist, :bio, artist_profile_attributes: [:band, :bio, :header, :profile_color])
  end

end
