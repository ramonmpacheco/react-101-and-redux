import {DESCRIPTION_CHANGED, TODO_ADDED, TODO_SEARCHED} from "./types";
import axios from "axios";

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
  type: DESCRIPTION_CHANGED,
  payload: event.target.value
})

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: TODO_SEARCHED,
    payload: request
  }
}

export const add = (description) => {
  return dispatch => {
    axios.post(URL, {description})
      .then(response => dispatch({type: TODO_ADDED, payload: response.data}))
      .then(() => dispatch(search()))
  }
}

// handleMarkAsDone(todo) {
//   axios.put(`${URL}/${todo._id}`, {...todo, done: true})
//     .then(() => this.refresh(this.state.description))
// }

export const markAsDone = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, {...todo, done: true})
    .then(() => dispatch(search()))
  }
}

// handleMarkAsPending(todo) {
//   axios.put(`${URL}/${todo._id}`, {...todo, done: false})
//     .then(() => this.refresh(this.state.description))
// }

export const markAsPending = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, {...todo, done: false})
    .then(() => dispatch(search()))
  }
}