class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password],
    )
    if @user
      login(@user)
      render '/api/users/show'
    else
      if params[:user][:username]
        render json: ["Incorrect username/password combination."], status: 422
      else
        render json: ["Username does not exist."], status: 422
      end
    end
  end

  def destroy
    logout
    render json: {}
  end

end
