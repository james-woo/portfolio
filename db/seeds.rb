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

job = Job.create(start_time: "2011-12-01T12:00:00Z", end_time: "2014-06-01T12:00:00Z")
job.create_experience(
  title: "Math & Sciences Tutor",
  image: "logo.png",
  content: <<~END
    - Taught an average of five students year round grades 10-12 math/science courses privately in students home
    - Showed students how to excel with studies, taught techniques on solving problems
    - Mentored students to prepare them for university
  END
)

job = Job.create(start_time: "2015-09-01T12:00:00Z", end_time: "2015-12-01T12:00:00Z")
job.create_experience(
  title: "SMART Technologies Inc./ Software Test Developer Intern",
  image: "smarttechnologies.png",
  content: <<~END
    - Developed test automation scripts for SMART Notebook (Robot Framework/Selenium)
    - Designed and developed test tools to increase quality of test infrastructure (C#/Python)
    - Participated in competition to produce three web applications and won an Oculus Rift (Javascript/HTML/CSS)
  END
)

job = Job.create(start_time: "2016-05-01T12:00:00Z", end_time: "2016-08-01T12:00:00Z")
job.create_experience(
  title: "Safe Software Inc./ Software Developer Intern", 
  image: "safesoftware.png",
  content: <<~END
    - Implemented user interface and application logic changes for FME Workbench (C++/Java)
    - Refactored geometry core logic to use C++ design patterns and newer C++11 standards
    - Designed and implemented invalid geometry locator for geometry validation
  END
)

job = Job.create(start_time: "2017-09-01T12:00:00Z", end_time: "2017-12-01T12:00:00Z")
job.create_experience(
  title: "Shopify/ Android Developer Intern", 
  image: "shopify.png", 
  content: <<~END
    - Implemented Android native support for Ruby on Rails web pages on Mobile Shopify, this made certain pages use screen space more efficiently and made the page feel like a native experience
    - Integrated app extensions and apps from Mobile Shopify to Shopify POS, which allows merchants to perform additional actions
    - Designed, developed, and presented Mobile Buy AR, an extension to Android Mobile Buy SDK sample app with Google ARCore
  END
)

job = Job.create(start_time: "2018-03-01T12:00:00Z", end_time: nil)
job.create_experience(
  title: "Shopify/ Developer",
  image: "shopify.png",  
  content: <<~END
    - Currently working with the Merchant Experience of Apps team as a mobile and backend developer
  END
)

project = Project.create(start_time: "2017-08-01T12:00:00Z", end_time: "2017-08-01T12:00:00Z")
project.create_experience(
  image: "beatsbear.png", 
  title: "BeatsBear", 
  content: <<~END
    - Implemented real time tempo adjustment with TarsosDSP using Waveform Similarity Overlap Add (WSOLA) to avoid pitch distortion
    - Built a genre classifier with WEKA using beats per minute and Mel-frequency cepstral coefficients with Support Vector Machine algorithm that achieved 77% accuracy for 10 genres
    - Created an Android application that preprocesses user’s songs with genre classification and performs real time tempo adjustment
  END
)

project = Project.create(start_time: "2018-12-01T12:00:00Z", end_time: "2018-12-01T12:00:00Z")
project.create_experience(
  image: "snap.png", 
  title: "Snap", 
  content: <<~END
    - Worked with Tensorflow and Android Camera API to perform real time face detection
    - Created Android application that processes the user's face and allows users to add filters (similar to Snapchat)
    - Built application using MVVM architecture, Android Jetpack (navigation component), and Dagger2
  END
)

project = Project.create(start_time: "2019-04-01T12:00:00Z", end_time: "2019-04-01T12:00:00Z")
project.create_experience(
  image: "logo.png", 
  title: "Portfolio", 
  content: <<~END
    - Created a Rails API and React frontend app that manages this website (Light content management system that is invisible to viewers)
    - Implemented authentication with rails and authorization with JWT for editing and managing content
  END
)

education = Education.create(start_time: "2014-09-01T12:00:00Z", end_time: "2017-12-01T12:00:00Z")
education.create_experience(
  image: "uvic.png", 
  title: "University of Victoria/ Bachelor of Software Engineering", 
  content: <<~END
    ### Coursework
    Algorithms & Data Structures, Data Mining, Advanced Databases, Computer Graphics
    
    ### Awards
    - President’s Scholarship
    - B.C. Centennial Scholarship
    - 2016 IEEE Work Term Report Excellence Award
  END
)