class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.where(user_id: params[:user_id])
    render 'api/albums/index'
  end

  def create
    @album = Album.new(album_params)
    if @album.user_id == @current_user.id && @album.save!
      render json: @album
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find_by(id: params[:id])
    render :show
  end

  private

  def album_params
    params.require(:album).permit(:user_id, :title, :artwork)
  end

end
