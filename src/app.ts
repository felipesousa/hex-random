import { generate, Base } from './utils'

@Base({ id: '#app' })
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

function main(Component: any): void {
    const app = document.querySelector(Component.id)

    if (app) {
        const instance = new Component(app)
        instance.onInit()
    }
}

main(App)