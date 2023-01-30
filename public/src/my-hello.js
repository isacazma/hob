import { LitElement, css, html } from "lit";

export class MyHello extends LitElement {

    render() {
        return html `
        <h1>Hello</h1>
        `
    }
}

window.customElements.define('my-hello', MyHello)