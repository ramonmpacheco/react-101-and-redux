import React from "react";

const Pagination = (props) => {
    return (
        <div>
            <button
                onClick={_ => props.setState({ name: 'Ramon', last_name: 'Pacheco' })}>
                Fake Pagination -- Click Me --
            </button>
        </div>
    )
}

export default Pagination