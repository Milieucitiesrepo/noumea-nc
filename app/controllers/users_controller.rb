class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :age,
      :neighboorhood,
      :lives_in_noumea,
      :months_lived_in_noumea,
      :email,
      :enable_receive_emails,
      answers_attributes: [:body, :question_id]
    )
  end
end
