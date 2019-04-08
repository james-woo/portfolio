Rails.application.routes.draw do
  get 'users/new'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope 'api' do
    resources :projects
    resources :jobs
    resources :experiences
    resources :educations
  end

  scope 'auth' do
    post '/login',   to: 'sessions#create'
    delete '/logout',  to: 'sessions#destroy'
  end
  
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
