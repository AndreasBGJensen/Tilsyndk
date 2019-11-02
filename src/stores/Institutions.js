import data from './test.json';
import {decorate, observable} from "mobx";
//This store is observable and holds the api connection




export default class Institutions {
    TestList = ["100 meter skoven","7 springeren","Børnehaven Bøgely"];

    Test = [{"name":"yes","link":"www.dr.dk","adress":"Thorsvej 42" }];

    kinderGardensKBH = data;
    /*kinderGardensKBH = [{Name:"100 meter skoven",Quality:"less wow"},
        {Name:"7 springeren",Quality:"much wow"}]*/
    //kinderGardensLyngbyTaarbeak = [{"Navn":"Børnehaven Bøgely","Quality":"so so"}]
    //CophagenMunicipality=[{"2200":("100 meterskoven","7-springeren"),"2100":("","")}]
}

decorate(Institutions,{
    TestList:observable,
    kinderGardensKBH: observable,
    kinderGardensLyngbyTaarbeak: observable
});

export const institution = new Institutions();