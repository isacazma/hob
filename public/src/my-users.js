import { LitElement,html } from "lit";
import { HelloWorld } from './helloworld.js'
import { HelloWorldAttr } from './helloworld-attributes.js'
import { SimpleCounter } from './simplecounter.js'
import { SimpShadowCounterler } from './shadowcounter.js'
import { TemplateCounter } from './template-counter.js'
import { router } from "./router";
export class MyUser extends LitElement {

    connectedCallback() {
        super.connectedCallback()
        this.userId = router.location.getUrl().split('/').pop();
    }

    render() {
        return html `
            <h1>Hello user ${this.userId}</h1>
            
         
    <script type="module" src="/main.js"></script>
    div>
<div id="app">

<div>
	<hello-world></hello-world>
<br/>
	 <hello-world-attr name="Mooie man"></hello-world-attr>
<br/>
  	<simple-counter id="counter">
    
</simple-counter>
<br/>
  	<div id="counterdisplay"></div>

  <shadow-counter>
  #shadow-root (open)


  <h1>ShadowCounter </h1>
  <div>
    <span id="counter"></span>
    </div>
    </shadow-counter>
    <br>

</div>

</div>


<template-counter>
  <span slot="title" >Slotted counter:</span> 
  <span >Text underneath</span>
</template-counter><br/>

<template-counter>
  <span slot="title" class="my-slot-title">Styled Slotted counter:</span> 
  <span class="my-slot-text">Much smaller text underneath</span>
</template-counter>

            `
    }
    
    
}

window.customElements.define('my-user', MyUser)