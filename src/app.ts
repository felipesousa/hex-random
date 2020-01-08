class App {
    el: Element

    constructor(el: Element) {
        this.el = el
    }

    onInit(): void {
        setInterval(() => {
            if (this.el) {
                this.el.innerHTML = `#${Math.floor(Math.random()*16777215).toString(16)}`
            }
        }, 1000)
    }
}

function main() {
    const app = document.querySelector('#app')

    if (app) {
        const instance = new App(app)
        instance.onInit()
    }
}


main()