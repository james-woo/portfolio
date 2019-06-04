# Portfolio

This project was built to learn more about how Rails and React works together. The goals were to:
  - learn how to build a Rails API app that would serve a React client
  - learn how to authenticate and authorize users with Rails and JWTs
  - build a simple content management system that would allow me (an authorized user) to create, update, and delete records

The portfolio was built with two parts: the Rails API and the React client, each running on their own ports. The challenge in this project was getting CSRF security to work properly with the React client, since Rails out of the box does not allow any requests without the CSRF tokens to work properly. After much research, I found that disabling CSRF and using JWTs were the way to go, in this project. It made sense for this project becacause Rails is only being used as an API, so it must communicate with other apps outside of its domain.

Portfolio functionalities:
  - User authentication (must seed user manually, no user registration for obvious reasons)
  - Create, edit, and delete experiences (job, project, education items)
  - Live markdown editing of experience content
  
Run with `bin/rake start`
