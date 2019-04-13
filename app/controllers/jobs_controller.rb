class JobsController < ApiController
  before_action :set_job, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /jobs
  def index
    @jobs = Job.all
    
    render json: @jobs
  end

  # GET /jobs/1
  def show
    render json: @job
  end

  # POST /jobs
  def create
    @job = Job.new(
      start_time: job_params[:start_time],
      end_time: job_params[:end_time]
    )
  
    if @job.save && @job.create_experience(title: job_params[:title], image: job_params[:image], content: job_params[:content])
      render json: @job, status: :created, location: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /jobs/1
  def update
    experience = @job.experience
    experience.update(title: job_params[:title], image: job_params[:image], content: job_params[:content])
    @job.update(start_time: job_params[:start_time], end_time: job_params[:end_time])
    if experience && @job
      render json: @job.attributes.tap { |job| job[:content] = experience.content }
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  # DELETE /jobs/1
  def destroy
    @job.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job
      @job = Job.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def job_params
      params.require(:job).permit(:title, :image, :start_time, :end_time, :content)
    end
end
