class SessionsController < ApplicationController

  def create
    render json: {"user": "test"}.to_json
  end

  def destroy
  end
end
