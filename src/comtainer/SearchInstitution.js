import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class SearchInstitution extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        placeholder="Adresse"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                    <input
                        placeholder="post nr"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                    <input type="submit"/>
                </form>

            </div>
            )
        }
    }


export default SearchInstitution