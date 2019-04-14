class ExperiencesController < ApiController
  before_action :set_experience, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    jobs = Job.all.sort_by { |j| j[:position_number] }.reverse
    projects = Project.all.sort_by { |pr| pr[:position_number] }.reverse
    educations = Education.all.sort_by { |ed| ed[:position_number] }.reverse
    @experiences = {
      jobs: jobs.map { |job|
        job.attributes.tap { |j|
          j[:content] = job.experience.content
          j[:title] = job.experience.title
          j[:image] = job.experience.image
        } 
      },
      projects: projects.map { |project|
        project.attributes.tap { |pr|
          pr[:content] = project.experience.content
          pr[:title] = project.experience.title
          pr[:image] = project.experience.image
        } 
      },
      educations: educations.map { |education| 
        education.attributes.tap { |ed|
          ed[:content] = education.experience.content
          ed[:title] = education.experience.title
          ed[:image] = education.experience.image
        }
      }
    }
    
    render json: @experiences.to_json
  end

  # POST /experiences
  def create
    @experience = Experience.new(experience_params)
    

    if @experience.save
      render json: @experience, status: :created, location: @experience
    else
      render json: @experience.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /experiences/1
  def update
    experienceable = @experience.experienceable
    if @experience.update(experience_params) && experienceable.update(experienceable_params)
      render json: @experience
    else
      render json: @experience.errors, status: :unprocessable_entity
    end
  end

  # DELETE /experiences/1
  def destroy
    @experience.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_experience
      @experience = Experience.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def experience_params
      params.require(:experience).permit(:title, :image, :content)
    end

    def experienceable_params
      params.require(:experienceable).permit(:start_time, :end_time, :position_number)
    end
end
