class UsersController < ApplicationController
  before_action :authenticate_for_ip_protection, only: :index

  def index
    @users = User.includes(answers: :question)
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

  def authenticate_for_ip_protection
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV['SITE_USERNAME'] && password == ENV['SITE_PASSWORD']
    end
  end

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
