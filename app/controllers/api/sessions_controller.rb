class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password],
    )
    if user
      login(user)
      render json: user
    else
      if params[:user][:username]
        render json: "Incorrect username/password combination."
      else
        render json: "Username does not exist."
      end
    end
  end

  def destroy
    logout
    render json: {}
  end


end
