import React from 'react'
import {institution} from '../stores/Institutions'


class InstitutionView extends React.Component {
    constructor(props) {
        super(props);
            this.state= {
                user: '',
                loading: ''
            }
    console.log(props.location.state)

    }


    render() {
        return(
        <div>
            <ul>
                <p>{institution.state}</p>
                {institution.vuggestuer.map((giraffe,key)=>
                    <li key={key}><a>Institutions Navn</a>{giraffe.Navn} <a>Adresse</a> {giraffe.Adresse}</li>
                )}
            </ul>
            {this.state.loading ? <div>loading...</div> : <div>person</div>}
        </div>
        )
    }
}

export default InstitutionView