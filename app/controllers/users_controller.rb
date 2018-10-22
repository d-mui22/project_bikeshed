class UsersController < ApplicationController
  def index
    @users = User.all
  end
  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(account_update_params)
      redirect_to user_path
    end
  end

  private
  #
  # def sign_up_params
  #   params.require(:user).permit(:email, :encrypted_password, :profile_photo)
  # end

  def account_update_params
    params.require(:user).permit(:profile_photo)
  end
end
