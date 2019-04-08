class SessionsController < ApplicationController

  def create
    user = User.find_by(username: session_params[:username].downcase)
    if user && user.authenticate(session_params[:password])
      # created_jwt = issue_token({ id: user.id })
      # cookies.signed[:jwt] = { 
      #   value: created_jwt, 
      #   httponly: true,
      #   expires: 1.hour.from_now 
      # }
      render status: 200, json: { username: user.username }
    else
      render status: 401, json: { error: 'Username or password incorrect' }
    end
  end

  def destroy
    # cookies.delete(:jwt)
  end

  private

  def session_params
    params.require(:session).permit(:username, :password)
  end
end
