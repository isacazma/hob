import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'
import { HelloWorld } from './helloworld.js'
import { HelloWorldAttr } from './helloworld-attributes.js'
import { SimpleCounter } from './simplecounter.js'
import { SimpShadowCounterler } from './shadowcounter.js'
import { TemplateCounter } from './template-counter.js'
document.querySelector('#app').innerHTML = 
`
<div>
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

  <styles></styles>
  <h1>ShadowCounter </h1>
  <div>
    <span id="counter"></span>
    </div>
    </shadow-counter>
    <br>

</div>
</div>




  
//   `

{
  //  zat eertst in indexe
   /* <template-counter>
  <span slot="title" >Slotted counter:</span> 
  <span >Text underneath</span>
</template-counter><br/>

<template-counter>
  <span slot="title" class="my-slot-title">Styled Slotted counter:</span> 
  <span class="my-slot-text">Much smaller text underneath</span>
</template-counter> */}
//   document.querySelector('#counter')
//   .addEventListener('counterupdate', (inEvent) => {


//     document.querySelector('#counterdisplay').textContent =
//       `View: ${inEvent.detail.countervalue}`;

      
// });
//  setupCounter(document.querySelector('#counter'))


