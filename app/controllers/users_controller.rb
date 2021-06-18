class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
  
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
  
    def show
        render json: @current_user
    end

    def destroy
        # session[:user_id] = nil
        @user = User.find!(params[:id])
        @user.destroy
    end
  
    private
  
    def user_params
        defaults = {role: 'player'}
        params.permit(:name, :role).reverse_merge(defaults)
    end
  
  end