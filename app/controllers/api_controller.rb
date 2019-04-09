class ApiController < ActionController::API
  include ::ActionController::Cookies

  def authorize_request
    jwt = cookies.signed[:jwt]
    begin
      @decoded = JsonWebToken.decode(jwt)
      @current_user = User.find(@decoded[:user_id])
    rescue
      render json: { errors: "Unauthorized" }, status: :unauthorized
    end
  end
end