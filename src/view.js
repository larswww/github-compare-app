
const main = document.querySelector('main')
export default class View {

    constructor() {
        console.log('view created')
    }

    showUser(user) { 
        main.textContent = JSON.stringify(user)

    }


}