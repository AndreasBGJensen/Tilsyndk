
import {decorate, observable} from "mobx";


const states = {LOADING:"LOAD", DONE:"DONE", FAILED:"FAILED"}


export default class Institutions{
state = states.DONE;

    vuggestuer = [];



    constructor() {
        //Loading data when it when the store is initialized.
        this.fetchItem();
    }


//The fetchcall
    fetchItem (){

        this.state = states.LOADING;
        fetch("http://localhost:8080/rest/mongo/test")
            .then((response)=> {
                console.log(response);
                response.json().then((json)=> {
                    this.test = json;
                    console.log(this.test)
                    this.vuggestuer = json;
                    this.state = states.DONE;
                })
            })
            .catch((error)=>{
                console.log(error)
                this.state = states.FAILED;
            });
    }



}







decorate(Institutions,{
    vuggestuer:observable,

});

export const institution = new Institutions();