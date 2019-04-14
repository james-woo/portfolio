class EducationsController < ApiController
  before_action :set_education, only: [:show, :update, :destroy, :move]
  before_action :authorize_request, only: [:create, :update, :destroy, :move]

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
      eduction = eduction.attributes.tap { |ed|
        ed[:content] = @eduction.experience.content
        ed[:title] = @eduction.experience.title
        ed[:image] = @eduction.experience.image
      }
      render json: education.to_json, status: :created, location: @education
    else
      render json: @education.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /educations/1
  def update
    experience = @education.experience
    experience.update(
      title: education_params[:title], 
      image: education_params[:image], 
      content: education_params[:content]
    )
    @education.update(
      position_number: education_params[:position_number],
      start_time: education_params[:start_time], 
      end_time: education_params[:end_time]
    )
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

  def move
    direction = params[:direction]
    if direction == 'up'
      above = Education.find_by(position_number: @education.position_number + 1)
      above_position = above.position_number
      if above
        @education.update(position_number: @education.position_number + 1)
        above.update(position_number: above.position_number - 1)
        if @education && above
          render json: @education, status: :ok
        end
      end
    else
      below = Education.find_by(position_number: @education.position_number - 1)
      if below
        @education.update(position_number: @education.position_number - 1)
        below.update(position_number: below.position_number + 1)
        if @education && below
          render json: @education, status: :ok
        end
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_education
      @education = Education.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def education_params
      params.require(:education).permit(:title, :image, :position_number, :start_time, :end_time, :content)
    end
end
