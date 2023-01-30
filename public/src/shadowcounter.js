
export class SimpShadowCounterler extends HTMLElement {

constructor() {
    // Always call the super
    super();
    this.DEFAULT_VALUE = 0;
    this.DEFAULT_LABEL = 'counter:';
    this.DEFAULT_INCREMENT = 1;

    this._shadowRoot = this.attachShadow({mode: 'open'});
    //  dit maakt een shadow root 
    this._shadowRoot.innerHTML = `
      <style>
        h1 {color: red;}
        span {font-size: 40px; background-color: black;
          color: white; padding: 4px; border-radius: 4px;
        }
      </style>
      <h1>ShadowCounter</h1>
      <div><span id="counter">broodje aap</span?</div>
    `;
  }


  connectedCallback() {
    this.value = this.DEFAULT_VALUE;
    // Install the event listener
    this._counterView = this._shadowRoot.querySelector('#counter');
    // verbind hem met de shadowroot 

    this._counterView.addEventListener('mousedown', this._updateCounter.bind(this));
    // Call the render function
    this.render();
  }

  _throwUpdateEvent() {
    const counterUpdateEvent = 
      new CustomEvent('counterupdate', {
        bubbles: true,
        cancelable: true,
        composed: false,
        detail: {
          countervalue: this.value
        }
    });
    this.dispatchEvent(counterUpdateEvent);
  }
  _updateCounter(){
    this.value += this.DEFAULT_INCREMENT;
    this.render();
  }
  render() {
  // Use the name in the Hello string
    this._counterView.textContent = `${this.DEFAULT_LABEL} ${this.value}`;
  }}

    customElements.define( 'shadow-counter', SimpShadowCounterler )