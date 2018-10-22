class Api::V1::UsersController < ApiController

  def index
    render json: current_user
  end
  before_action :authenticate_user!

end
