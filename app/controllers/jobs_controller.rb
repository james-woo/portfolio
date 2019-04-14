class JobsController < ApiController
  before_action :set_job, only: [:show, :update, :destroy, :move]
  before_action :authorize_request, only: [:create, :update, :destroy, :move]

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
      job = @job.attributes.tap { |j|
        j[:content] = @job.experience.content
        j[:title] = @job.experience.title
        j[:image] = @job.experience.image
      }
      render json: job.to_json, status: :created, location: @job
    else
      render json: @job.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /jobs/1
  def update
    experience = @job.experience
    experience.update(
      title: job_params[:title],
      image: job_params[:image], 
      content: job_params[:content]
    )
    @job.update(
      position_number: job_params[:position_number],
      start_time: job_params[:start_time], 
      end_time: job_params[:end_time
    ])
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

  def move
    direction = params[:direction]
    if direction == 'up'
      above = Job.find_by(position_number: @job.position_number + 1)
      above_position = above.position_number
      if above
        @job.update(position_number: @job.position_number + 1)
        above.update(position_number: above.position_number - 1)
        if @job && above
          render json: @job, status: :ok
        end
      end
    else
      below = Job.find_by(position_number: @job.position_number - 1)
      if below
        @job.update(position_number: @job.position_number - 1)
        below.update(position_number: below.position_number + 1)
        if @job && below
          render json: @job, status: :ok
        end
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job
      @job = Job.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def job_params
      params.require(:job).permit(:title, :image, :position_number, :start_time, :end_time, :content)
    end
end
