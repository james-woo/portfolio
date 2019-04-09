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
    if @job.update(job_params)
      render json: @job
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
