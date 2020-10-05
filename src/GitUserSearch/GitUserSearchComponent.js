import React, {useState} from 'react'
import GitUserSearch from './GitUserSearch';

function GitUserSearchComponent() {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState(undefined);

    function inputSearchBoxChange(event) {
        const searchValue = event.target.value
        setSearchValue(searchValue)
    }

    async function  getAsyncSearchResults() {
        const url = `https://api.github.com/search/users?q=${searchValue}`;
        const response = await fetch(url)
        const result = await response.json()
        setResults(result.items);
    }

    let userlist = undefined;
    if(results) {
        userlist = results.map(item => 
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
                    onChange={inputSearchBoxChange}
                />
                <br />
                <button onClick={getAsyncSearchResults} disabled={false}>Search</button>
                <br />
                {userlist !== undefined ? userlist : 'No Search Result'}
            </div>
        )
}

export default GitUserSearchComponent