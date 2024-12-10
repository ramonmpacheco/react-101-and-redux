import React from "react";

const List = (props) => {
    return (
        <div>
            <p>Search Result</p>
            <ul style={{ listStyle: 'none', padding: '0px'}}>
                <li>{props.data.name || 'undefined'}</li>
                <li>{props.data.last_name || 'undefined'}</li>
            </ul>
        </div>
    )
}

export default List