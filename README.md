# GitHub blog

This is an application based on the GitHub API. In it you can see some user information and a list of issues contained in the user repository. Clicking on one of the issues will take you to a page where you can see them in full.

# Functionalities

- Load user information comming from GitHub API
- Load a list of summary issues contained in the user repo
- Lead to a page were you'll have access to complete issue content
- Search for an specific issue

# Project access

You can check the site in operation <a href='' target='_blank' rel="noreferrer" >clicking here.</a>

# How to run the project

Open the terminal and run `npm i` to install all dependencis of the project.

Then run `npm run dev` to open the project in the locally.

Remember to change the variables `GITHUB_USERNAME` and `GITHUB_REPOSITORY` to your username and repository respectively to see your informations.

# Technologies

- `styled-components`
- `axios`
- `react-router-dom`
- `react-markdown`
- `date-fns`
- `react-hook-form`