import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        
        <h1>Welcome Back, JoesNexVerse</h1>

        <p>  This plat form is simply created with the aim and chatting and creating more interactivity with different people from thw whole world </p>

        <P> 
        <a href ="/posts" data-link> View recent posts</a> </p>
        `;
    }
}