class JobsController < ApiController
  before_action :set_job, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /jobs
  def index
    @jobs = Job.all
    
    render json: @jobs.map { |j| {job: j, content: j.experience.content}.to_json }
  end

  # GET /jobs/1
  def show
    render json: @job
  end

  # POST /jobs
  def create
    @job = Job.new(job_params)

    if @job.save
      render json: @job, status: :created, location: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /jobs/1
  def update
    experience = @job.experience
    if job_params[:content]
      experience.update(content: job_params[:content])
    end
    if job_params[:start_time]
      @job.update(start_time: job_params[:start_time])
    end
    if job_params[:end_time]
      @job.update(end_time: job_params[:end_time])
    end
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
      params.require(:job).permit(:start_time, :end_time, :content)
    end
end
