class Api::V1::UsersController < ApiController
  def show
    render json: {users: current_user}
  end

end
