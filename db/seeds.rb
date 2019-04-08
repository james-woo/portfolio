# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if Rails.env.development?
  AdminUser.create(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

  User.create(username: 'admin', password: 'password', password_confirmation: 'password')

  job = Job.create(start_time: "2018-04-06 14:35:07", end_time: "2019-04-06 14:35:07")
  job.create_experience(title: "Job title", content: "Job experience")

  project = Project.create
  project.create_experience(title: "Project title", content: "Project experience")

  education = Education.create(start_time: "2018-04-06 14:35:07", end_time: "2019-04-06 14:35:07")
  education.create_experience(title: "Education title", content: "Education experience")
end
