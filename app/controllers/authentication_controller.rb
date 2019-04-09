class AuthenticationController < ApiController

  def create
    @user = User.find_by(username: login_params[:username].downcase)
    if @user && @user.authenticate(login_params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      time = Time.now + 1.hour.to_i
      cookies.signed[:jwt] = {
        value: token, 
        httponly: true,
        expires: Time.now + 1.hour,
        secure: Rails.env.production?
      }
      render status: 200, json: { username: @user.username }
    else
      render status: 401, json: { error: 'Username or password incorrect' }
    end
  end

  def destroy
    cookies.delete(:jwt)
  end

  private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end
end
