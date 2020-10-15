const baseUrl = 'https://api.github.com'

export default class Model {

    constructor() {
        console.log('model created')
    }

    async getGithubUser(username) {
        const response = await fetch(`${baseUrl}/users/${username}`)
        const user = await response.json()
        console.log(response.headers.get('x-ratelimit-remaining'))
        return user 
    }

    async getUserGithubRepos(username) {
        const response = await fetch(`${baseUrl}/users/${username}/repos`)
        const user = await response.json()
        console.log(response.headers.get('x-ratelimit-remaining'))
        return user 
    }

}