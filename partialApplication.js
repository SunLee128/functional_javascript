const { get } = require('http')
const fetch = require('node-fetch')

const getFromAPI = baseURL => endpoint => callback => 
  fetch(`${baseURL}${endpoint}`)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => {console.error(err.message)})
const getGithub = getFromAPI('https://api.github.com')

const getGithubUsers = getGithub('/users')
const getGithubRepos = getGithub('/repositores')

getGithubUsers(data => {
  console.log(data.map(user => user.login))
})

getGithubUsers(data => {
  console.log(data.map(user => user.avatar_url))
})

getGithubRepos(data =>
  data.forEach(repo => {
    console.log(`Repo: ${repo.name}`)
  })
)