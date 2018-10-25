Rails.application.routes.draw do
  root 'bikes#index'
  resources :bikes
  devise_for :users
  resources :reviews, only: [:edit, :update]
  resources :users, only: [:show, :create, :new, :update]

  namespace :api do
    namespace :v1 do
      resources :bikes, only: [:show]
      resources :reviews, only: [:show, :index, :create, :destroy]
      resources :users, only: [:show, :index]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
