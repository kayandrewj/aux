class Api::TracksController < ApplicationController

  def index
    @tracks = Track.where(album_id: params[:album_id])
    render 'api/tracks/index'
  end

  def create
    @track = Album.find(params[:album_id]).tracks.new(track_params)
    if @track.save
      render json: @track
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private

  def track_params
    params.require(:track).permit(:album_id, :title, :audio_file)
  end

end
