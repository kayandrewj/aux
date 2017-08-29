Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :albums, only: [:index, :create, :destroy, :edit]
    end
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:show]
    resources :tracks, only: [:index, :create, :destroy]
  end



end
