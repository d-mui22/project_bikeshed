Rails.application.routes.draw do
  root 'bikes#index'
  resources :bikes, only: [:index, :show]
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :bikes, only: [:show]
      resources :reviews, only: [:show, :index, :create]
      resources :users, only: [:show]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
