import data from './test.json';
import {decorate, observable} from "mobx";

export default class Institutions {
    TestList = ["100 meter skoven","7 springeren","Børnehaven Bøgely"];

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