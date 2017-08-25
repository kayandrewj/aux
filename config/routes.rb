Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :albums, only: [:index, :create, :destroy, :edit]
    end
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:show]
  end



end
