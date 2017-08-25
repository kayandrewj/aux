class AlbumsController < ApplicationController

  def create
    @album = Album.new(album_params)
    if @album.user_id == @current_user.id && Album.save!
      render json: @album
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  private
  
  def album_params
    params.require(:album).permit(:user_id, :title, :artwork)
  end

end
