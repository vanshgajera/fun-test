require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
    "login": "vanshgajera",
    "id": 107190058,
    "node_id": "U_kgDOBmOXKg",
    "avatar_url": "https://avatars.githubusercontent.com/u/107190058?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vanshgajera",
    "html_url": "https://github.com/vanshgajera",
    "followers_url": "https://api.github.com/users/vanshgajera/followers",
    "following_url": "https://api.github.com/users/vanshgajera/following{/other_user}",
    "gists_url": "https://api.github.com/users/vanshgajera/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vanshgajera/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vanshgajera/subscriptions",
    "organizations_url": "https://api.github.com/users/vanshgajera/orgs",
    "repos_url": "https://api.github.com/users/vanshgajera/repos",
    "events_url": "https://api.github.com/users/vanshgajera/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vanshgajera/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 1,
    "following": 4,
    "created_at": "2022-06-09T11:58:24Z",
    "updated_at": "2024-10-16T13:01:21Z"
  } 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('vanshgajera')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
     console.log(`Example app listening on port ${port}`)
})