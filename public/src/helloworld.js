export class HelloWorld extends HTMLElement{
    //Maak een klasse HelloWorld die HTMLElement uitbreidt en exporteer deze

    // conected component
    connectedCallback(){
        this.textContent = 'Hello World!';
        //Cmaakt een function connectedCallback() mag ook anders heten

}
}

customElements.define( 'hello-world', HelloWorld );
// de tag die gemaakt is moet een - er in hebben 