class EducationsController < ApiController
  before_action :set_education, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /educations
  def index
    @educations = Education.all

    render json: @educations
  end

  # GET /educations/1
  def show
    render json: @education
  end

  # POST /educations
  def create
    @education = Education.new(
      start_time: education_params[:start_time],
      end_time: education_params[:end_time]
    )
  
    if @education.save && @education.create_experience(title: education_params[:title], image: education_params[:image], content: education_params[:content])
      render json: @education, status: :created, location: @education
    else
      render json: @education.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /educations/1
  def update
    experience = @education.experience
    experience.update(title: education_params[:title], image: education_params[:image], content: education_params[:content])
    @education.update(start_time: education_params[:start_time], end_time: education_params[:end_time])
    if experience && @education
      render json: @education.attributes.tap { |education| education[:content] = experience.content }
    else
      render json: @education.errors, status: :unprocessable_entity
    end
  end

  # DELETE /educations/1
  def destroy
    @education.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education
      @education = Education.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def education_params
      params.require(:education).permit(:title, :image, :start_time, :end_time, :content)
    end
end
