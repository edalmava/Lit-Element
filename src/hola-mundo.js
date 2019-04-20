import { LitElement, html } from 'lit-element';

class HolaMundo extends LitElement {
    static get properties() {
        return {
            name: { type: String }
        };
    }

    render() {
        return html`
        <p>Hola <strong>${this.name}</strong>...</p>
        `;
    }
}
customElements.define('hola-mundo', HolaMundo);