import React from 'react'
import GitUserSearch from './GitUserSearch';

class GitUserSearchComponent extends React.Component {
    constructor(){
        super();
        // const[searchValue, setSearchValue] = useState('');
        this.state = {
            searchValue: ''
        }
        this.inputSearchBoxChange = this.inputSearchBoxChange.bind(this);
        this.getSearchResults = this.getSearchResults.bind(this)
    }

    inputSearchBoxChange(event) {
        this.setState({searchValue: event.target.value})
    }

    getSearchResults() {
        var url = `https://api.github.com/search/users?q=${this.state.searchValue}`;
        console.log(url)
        fetch(url).then(response => response.json()).then(result => {
            let newState = this.state;
            newState = {
                results: result.items
            }
            this.setState(newState);
        })
        console.log('results ', this.state.results)
    }

    render(){
        let userlist = undefined;
        if(this.state.results !== undefined ) {
            console.log('empty map ', this.state.results)
            userlist = this.state.results.map(item => 
                <GitUserSearch 
                    key={item.id}
                    loginName={item.login} 
                    avatar={item.avatar_url}/>
            )
        }
        return(
            <div>
                <input 
                    type="text"
                    name="text"
                    placeholder="Enter Search Value"
                    onChange={this.inputSearchBoxChange}
                />
                <br />
                <button onClick={this.getSearchResults} disabled={false}>Search</button>
                <br />
                {userlist !== undefined ? userlist : 'No Search Result'}
            </div>
        )
    }
}

export default GitUserSearchComponent