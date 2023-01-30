export class HelloWorldAttr extends HTMLElement {
    static get observedAttributes() {
      return ['name'];
      //Observeerd en houd in de gaten alle atributes met name (name is naam van de atribute) 
      // return het als er wat aan veranderd word array
    }
    constructor() {
      // When you define a constructor, ALWAYS call the super() 
      //zonder super werkt het niet
      super();
      // Set a default value for the name
      // default value heb je nodig dan weetje wat je doet 
      this.name = 'World2';
    }
    // connect component

    connectedCallback() {
      // Use the name in the Hello string
      // roept de remder fuctie op 
      this.render();
    }
  
    render() {
      // Use the name in the Hello string
      
      this.textContent = `Hello ${this.name}!`;
    }
  
    attributeChangedCallback(property, oldValue, newValue) {
     if (oldValue === newValue) return;
      this[ property ] = newValue;
      this.render();
    }
    //word aangeroepen wanneer observedAttributes activeert 
  }
  customElements.define( 'hello-world-attr', HelloWorldAttr )