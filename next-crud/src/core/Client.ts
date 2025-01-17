export default class Client {
    #id: string
    #name: string
    #age: number

    constructor(id: string = '', name: string = '', age: number = 0) {
        this.#id = id
        this.#age = age
        this.#name = name
    }

    getId() {
        return this.#id
    }
    getName() {
        return this.#name
    }
    getAge() {
        return this.#age
    }
}