class Api::AlbumsController < ApplicationController

  def index
    if(params[:user_id])
      @albums = Album.where(user_id: params[:user_id])
      render 'api/albums/index'
    end
    if(!params[:user_id])
      @albums = Album.take(9)
      render 'api/albums/index'
    end
  end

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    if @album.save
      render :show
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

# #
###
# #
###
####
