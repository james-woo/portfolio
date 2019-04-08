Rails.application.routes.draw do
  scope 'api' do
    resources :projects
    resources :jobs
    resources :experiences
    resources :educations
  end

  scope 'auth' do
    resources :users
    post '/login',   to: 'sessions#create'
    delete '/logout',  to: 'sessions#destroy'
  end
  
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
