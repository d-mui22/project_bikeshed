class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(account_update_params)
      redirect_to user_path
    else
      render new_user_path
    end
  end

  private
  def account_update_params
    params.require(:user).permit(:profile_photo)
  end
end
