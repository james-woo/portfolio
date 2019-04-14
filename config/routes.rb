Rails.application.routes.draw do
  scope 'api' do
    resources :experiences
    resources :projects do
      post :move, on: :member
    end
    resources :jobs do
      post :move, on: :member
    end
    resources :educations do
      post :move, on: :member
    end
  end

  scope 'auth' do
    post '/login',   to: 'authentication#create'
    delete '/logout',  to: 'authentication#destroy'
  end
  
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
