Rails.application.routes.draw do
  root to: 'pages#landing'

  namespace :pages, path: '/', as: nil do
    get :guide
    get :participez
  end

  resources :questions, only: [:index]
  resources :users, only: [:index, :create]
end
