//import data from './test.json';
import {decorate, observable} from "mobx";
//This store is observable and holds the api connection



const test = "";
export default class Institutions {






    testList = [];

    Test = [{"name":"yes","link":"www.dr.dk","adress":"Thorsvej 42" }];
    constructor() {
        this.fetchItem();

        this.state = {
            institutions: ''

        };
    }




    async componentDidMount(){
        const response = await fetch('http://localhost:8080/rest/mongo/test');
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));


    }

    fetchItem (){

        fetch("http://localhost:8080/rest/mongo/test").then(
            (response)=> response.json().then(
                (json)=> test.concat(json.toString())
            )
        )
    }



}




    /*kinderGardensKBH = [{Name:"100 meter skoven",Quality:"less wow"},
        {Name:"7 springeren",Quality:"much wow"}]*/
    //kinderGardensLyngbyTaarbeak = [{"Navn":"Børnehaven Bøgely","Quality":"so so"}]
    //CophagenMunicipality=[{"2200":("100 meterskoven","7-springeren"),"2100":("","")}]


decorate(Institutions,{
    testList:observable,
    kinderGardensKBH: observable,
    kinderGardensLyngbyTaarbeak: observable
});

export const institution = new Institutions();