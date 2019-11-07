import React from 'react'
import {institution }from "../stores/Institutions";
import {observable, Observable} from "mobx";
import InstitutionList from '../List/InstitutionList'





class InstitutionView extends React.Component {
    constructor(props) {
        super(props);
            this.state= {
                user: '',
                loading: true
            }
console.log(props.location.state)

    }




      /*  componentDidMount () {
            const { handle } = this.props.match.params

            fetch(`http://localhost:8080/rest/mongo/test`)
                .then((user) => {
                    this.setState(() => ({ user }))
                })
        }
*/

    render() {
        return(
        <div>
            <ul>
                {institution.testList.map((giraffe,key)=>
                    <li key={key}>{giraffe}</li>
                )}
            </ul>
            {this.state.loading ? <div>loading...</div> : <div>person</div>}
        </div>
        )
    }
}

export default InstitutionView