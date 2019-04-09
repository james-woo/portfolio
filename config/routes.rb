Rails.application.routes.draw do
  scope 'api' do
    resources :projects
    resources :jobs
    resources :experiences
    resources :educations
  end

  scope 'auth' do
    post '/login',   to: 'authentication#create'
    delete '/logout',  to: 'authentication#destroy'
  end
  
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
