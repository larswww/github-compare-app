const searchButton = document.querySelector('#search-button')

export default class Controller {

    constructor(model, view) {
        this.model = model
        this.view = view
        console.log('controller created')
        searchButton.addEventListener('click', () => { this.search() })
    }

    async search() {
        console.log('user clicked search')
        // getUsername
        const username = 'eriobe'
        console.time('fetch github data')
        try {
            // this.view.showLoadingSpinner()
            const getUser = this.model.getGithubUser(username)
            const getRepos = this.model.getUserGithubRepos(username)
            const promises = [getUser, getRepos]
            const [user, repos] = await Promise.all(promises)
            console.timeEnd('fetch github data')
            // this.view.stopLoadingSpinner()
            this.view.addGithubUser(user, repos)
        } catch (error) {
            // if (error.status === 404) // this.view.showNotFoundError()
            // if (error.status > 500) // this.view.showGithubDownError()
        }
        
    }


}