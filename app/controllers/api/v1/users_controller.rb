class Api::V1::UsersController < ApiController
<<<<<<< HEAD
  def show
    render json: User.find(params[:id])
  end
=======

  def index
    render json: current_user
  end
  before_action :authenticate_user!

>>>>>>> origin/enzyme_tests_take_2
end
