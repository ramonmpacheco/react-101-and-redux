import React, {Component} from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', list: []}

    this.refresh = this.refresh.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    this.handleClear = this.handleClear.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.refresh()
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(` ${URL}?sort=-createdAt${search}`)
      .then(res => this.setState({
        ...this.state,
        description,
        list: res.data
      }))
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, {description})
      .then(() => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(() => this.refresh(this.state.description))
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleClear() {
    this.refresh();
  }

  handleChange(e) {
    this.setState({...this.state, description: e.target.value});
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro'/>
        <TodoForm
          handleAdd={this.handleAdd}
          description={this.state.description}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
        />
      </div>
    )
  }
}