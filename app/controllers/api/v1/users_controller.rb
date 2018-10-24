class Api::V1::UsersController < ApiController

  def index
    if current_user
      render json: current_user
    else
      render json: {error: "No one is signed in!"}
    end
  end


  def show
    render json: User.find(params[:id])
  end
end
