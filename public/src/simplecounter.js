export class SimpleCounter extends HTMLElement {
    // op deze manier maak je een nieuwe compunend 

    constructor() {
    // Always call the super

    super();
    // Initialize
    this.DEFAULT_VALUE = 0;
    this.DEFAULT_LABEL = 'counter:';
    this.DEFAULT_INCREMENT = 1;
    }
  


  connectedCallback(){

    this.value = this.DEFAULT_VALUE;
    // Create a span element to listen to

    this._counterView = document.createElement('span');

    this.appendChild(this._counterView);
    // Install the event listener
    this._counterView.addEventListener('mousedown', this._updateCounter.bind(this));
    // Call the render function
    this.render();
  }
  static get properties() {
    return {
      docsHint: { type: String },
      count: { type: Number, reflect: true}
    }
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


  customElements.define('simple-counter', SimpleCounter);
  // maakt de html tag 