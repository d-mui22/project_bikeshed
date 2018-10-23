class Api::V1::UsersController < ApiController
  before_action :authenticate_user!

  def index
    render json: current_user
  end

  skip_before_action :authenticate_user!

  def show
    render json: User.find(params[:id])
  end

end
