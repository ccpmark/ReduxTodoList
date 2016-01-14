'use strict';

import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  MARK_TODO_COMPLETED
} from '../actions/types';

const initialState = {
  todos: []
}

export default function todoReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO_ITEM:
    return {...state,
      todos: [
        ...state.todos,
        {
          text: action.name,
          completed: false
        }
      ]
    }

    case MARK_TODO_COMPLETED:
      return {...state,
        todos: [
          ...state.todos.slice(0, action.index),
          {
            ...state.todos[action.index],
            completed: !state.todos[action.index].completed
          },
          ...state.todos.slice(action.index + 1)
        ]
      }

    case REMOVE_TODO_ITEM:
    default:
      return state
  }
}
