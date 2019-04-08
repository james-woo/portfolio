class ApplicationController < ActionController::Base
  before_action :set_csrf_cookie
  protect_from_forgery with: :null_session

  def fallback_index_html
    render :file => 'public/index.html'
  end

  private

  def set_csrf_cookie
    cookies["X-CSRF-TOKEN"] = form_authenticity_token
  end
end
