export class TemplateCounter extends HTMLElement {
    connectedCallback() {
      this.value = this.DEFAULT_VALUE;
  
      // Clone the template and append to the shadow root
      const template = document.querySelector("#template-counter-template")
      const node = template.content.cloneNode(true);
      this._shadowRoot = this.attachShadow({mode: 'open'});
      this._shadowRoot.appendChild(node);
  
      // Install the event listener
      this._counterView = this._shadowRoot.querySelector('#counter-div');
      this._counterView.addEventListener('mousedown', this._updateCounter.bind(this));
  
      // Call the render function
      this.render();
    }
    
    
  }
  customElements.define('template-counter', TemplateCounter);