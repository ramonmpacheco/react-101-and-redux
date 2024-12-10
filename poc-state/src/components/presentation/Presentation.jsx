import React, { useState } from "react";
import SearchForm from '../form/SearchForm'
import List from '../list/List'
import Pagination from "../pagination/Pagination";

const Presentation = (props) => {
    const [data, setData] = useState({
        name: '',
        last_name: ''
    })
    const setState = (param) => {
        setData({
            name: param.name,
            last_name: param.last_name
        })
    }
    return (
        <div>
            <SearchForm />
            <List data={data}/>
            <Pagination data={data} setState={setState}/>
        </div>
    )
}

export default Presentation