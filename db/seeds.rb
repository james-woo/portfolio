# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  username: 'james', 
  password: Rails.application.secrets.secret_password, 
  password_confirmation: Rails.application.secrets.secret_password
)

job = Job.create(start_time: "2018-03-01T12:00:00Z", end_time: nil)
job.create_experience(
  title: "Shopify/ Developer", 
  content: <<~END
    - Currently working with the Merchant Experience of Apps team as a mobile and backend developer
  END
)

job = Job.create(start_time: "2017-09-01T12:00:00Z", end_time: "2017-12-01T12:00:00Z")
job.create_experience(
  title: "Shopify/ Android Developer Intern", 
  content: <<~END
    - Implemented Android native support for Ruby on Rails web admin pages on Mobile Shopify, this work made certain pages use screen space more efficiently and made the page feel like a native experience
    - Worked on integrating app extensions and embedded apps from Mobile Shopify to Shopify POS, which allows merchants to perform additional actions such as order printing
    - Participated and presented Mobile Buy AR, a project that extended the Android Mobile Buy SDK sample application with Google ARCore, an augmented reality library
  END
)

job = Job.create(start_time: "2016-05-01T12:00:00Z", end_time: "2016-08-01T12:00:00Z")
job.create_experience(
  title: "Safe Software Inc./ Software Developer Intern", 
  content: <<~END
    - Added features on the invalid geometry transformer for FME Workbench, this work allowed users to determine where and why certain geometry shapes were invalid (C++/Java)
    - Implemented user interface changes, fixed bugs for FME workbench (C++/Java)
    - Refactored geometry core logic to use C++ design patterns and newer C++11 standards
  END
)

job = Job.create(start_time: "2015-09-01T12:00:00Z", end_time: "2015-12-01T12:00:00Z")
job.create_experience(
  title: "SMART Technologies Inc./ Software Test Developer Intern", 
  content: <<~END
    - Developed test automation scripts for SMART Notebook (Robot Framework/Selenium)
    - Designed and developed test tools to increase quality of test infrastructure (C#/Python)
    - Participated in Intern competition to produce three web applications and won an Oculus Rift (Javascript/HTML/CSS)
  END
)

job = Job.create(start_time: "2011-12-01T12:00:00Z", end_time: "2014-06-01T12:00:00Z")
job.create_experience(
  title: "Math & Sciences Tutor", 
  content: <<~END
    - Taught grades 10-12 math and science courses
    - Showed students how to excel with studies, taught techniques on solving problems
    - Mentored students to prepare them for university
  END
)

project = Project.create(start_time: "2017-08-01T12:00:00Z", end_time: "2017-08-01T12:00:00Z")
project.create_experience(
  title: "BeatsBear", 
  content: <<~END
    A real time tempo adjustment android application for runners.
  END
)

education = Education.create(start_time: "2014-09-01T12:00:00Z", end_time: "2017-12-01T12:00:00Z")
education.create_experience(
  title: "University of Victoria/ Bachelor of Software Engineering", 
  content: <<~END
    ### Awards
    - President’s Scholarship
    - B.C. Centennial Scholarship
    - 2016 IEEE Work Term Report Excellence Award
  END
)