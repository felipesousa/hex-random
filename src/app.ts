import { generate } from './utils'

class App {
    el: Element

    constructor(el: Element) {
        this.el = el
    }

    onInit(): void {
        setInterval(() => {
            if (this.el) {
                this.el.innerHTML = generate()
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