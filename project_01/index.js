const githubData = require('./github');
const express = require('express');

const app = express();
require('dotenv').config();

// const githubData = {
//     "id": 590502253,
//     "node_id": "R_kgDOI9_jAg",
//     "name": "react-tailwind-portfolio",
//     "full_name": "john-smilga/react-tailwind-portfolio",
//     "private": false,
//     "owner": {
//         "login": "john-smilga",
//         "id": 42133389,
//         "node_id": "MDQ6VXNlcjQyMTMzMzg5",
//         "avatar_url": "https://avatars.githubusercontent.com/u/42133389?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/john-smilga",
//         "html_url": "https://github.com/john-smilga",
//         "followers_url": "https://api.github.com/users/john-smilga/followers",
//         "following_url": "https://api.github.com/users/john-smilga/following{/other_user}",
//         "gists_url": "https://api.github.com/users/john-smilga/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/john-smilga/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/john-smilga/subscriptions",
//         "organizations_url": "https://api.github.com/users/john-smilga/orgs",
//         "repos_url": "https://api.github.com/users/john-smilga/repos",
//         "events_url": "https://api.github.com/users/john-smilga/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/john-smilga/received_events",
//         "type": "User",
//         "site_admin": false
//     },
// }

app.get("/",(req,res)=>{
    res.send("<h1>Hello world!!</h1>")
});

app.get('/github',(req,res)=>{
    res.json(`${githubData.owner.login}`)
})

app.get("/login",(req,res)=>{
    res.send('<h2>Please Login to use the app!!!</h2>')
});

app.listen(process.env.PORT, ()=>{
    console.log(`App is being listened on port ${process.env.PORT}`)
});