import React from 'react'

const Search = ()=> {
    return (
        <form className="search-form-opened" action="#" method="GET">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..." name="query"/>
                <span className="input-group-btn">
                    <a href="javascript:;" className="btn submit">
                        <i className="icon-magnifier"></i>
                    </a>
                </span>
            </div>
        </form>
    )
}
export default Search;