class ScoresController < ApplicationController
    # skip_before_action :authorize, only: :create

# show highscores maybe top 10 maybe write this on front end filter
    # def highscores
        
    # end
# show all scores maybe write this on front end filter
    def index
        scores = Score.all
        render json: scores
    end
# show personal scores maybe write this on front end filter
    def show
        # byebug
        user = User.find(params[:id])
        # byebug
        render json: user.scores
    end
# make a new score for a user
    def create
        score = Score.create!(score_params)
        render json: score, status: :created
    end

    private 

    def score_params
        params.permit(:user_id, :score)
    end

    # def score_params
    #     params.permit(:score)
    # end

end

