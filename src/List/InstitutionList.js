import React from 'react'

const institutionRow = ({row}) => {
    const { name, link, adresse} = row;
    return (
        <tr >
            <td>{name}</td>
            <td>{link}</td>
            <td>{adresse}</td>
        </tr>

    );


    };


const InstitutionList = ({data})=>{
    return(
        <div>
            <h2>Institution List</h2>
            <table>
                <thead>
                <tr>
                <th scope="col">name</th>
                <th scope="col">Se tilsynsrapport</th>
                <th scope="col">adresse</th>
                </tr>


                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
};

export default InstitutionList