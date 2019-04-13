class ProjectsController < ApiController
  before_action :set_project, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

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
      render json: @project, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    experience = @project.experience
    experience.update(title: project_params[:title], image: project_params[:image], content: project_params[:content])
    @project.update(start_time: project_params[:start_time], end_time: project_params[:end_time])
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

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def project_params
      params.require(:project).permit(:title, :image, :start_time, :end_time, :content)
    end
end
