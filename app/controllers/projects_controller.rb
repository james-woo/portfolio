class ProjectsController < ApiController
  before_action :set_project, only: [:show, :update, :destroy, :move]
  before_action :authorize_request, only: [:create, :update, :destroy, :move]

  # GET /projects
  def index
    @projects = Project.all

    render json: @projects
  end

  # GET /projects/1
  def show
    render json: @project
  end

  # POST /projects
  def create
    @project = Project.new(
      start_time: project_params[:start_time],
      end_time: project_params[:end_time]
    )

    if @project.save && @project.create_experience(title: project_params[:title], image: project_params[:image], content: project_params[:content])
      project = @project.attributes.tap { |pr|
        pr[:content] = @project.experience.content
        pr[:title] = @project.experience.title
        pr[:image] = @project.experience.image
      }
      render json: project.to_json, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    experience = @project.experience
    experience.update(
      title: project_params[:title], 
      image: project_params[:image], 
      content: project_params[:content]
    )
    @project.update(
      position_number: project_params[:position_number],
      start_time: project_params[:start_time], 
      end_time: project_params[:end_time]
    )
    if experience && @project
      render json: @project.attributes.tap { |project| project[:content] = experience.content }
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy
  end

  def move
    direction = params[:direction]
    if direction == 'up'
      above = Project.find_by(position_number: @project.position_number + 1)
      above_position = above.position_number
      if above
        @project.update(position_number: @project.position_number + 1)
        above.update(position_number: above.position_number - 1)
        if @project && above
          render json: @project, status: :ok
        end
      end
    else
      below = Project.find_by(position_number: @project.position_number - 1)
      if below
        @project.update(position_number: @project.position_number - 1)
        below.update(position_number: below.position_number + 1)
        if @project && below
          render json: @project, status: :ok
        end
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def project_params
      params.require(:project).permit(:title, :image, :position_number, :start_time, :end_time, :content)
    end
end
