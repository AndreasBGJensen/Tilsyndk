import React from 'react'
import Institutions from "../stores/Institutions";
import InstitutionList from '../List/InstitutionList'


const InstitutionsStore = new Institutions();

class InstitutionView extends React.Component {

    state = {
        institutions: [],
    }

    componentDidMount() {
        //This store is observable and holds the api connection
        const newdata = InstitutionsStore.Test;

        //Setting the data to this state
        this.setState({institutions:newdata})
    }


    render() {
        return(
        <InstitutionList data={this.state.institutions}/>
        )
    }
}

export default InstitutionView