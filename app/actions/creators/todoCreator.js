'use strict';

import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  MARK_TODO_COMPLETED,
} from '../types';

export function addTodo(name) {
  return {
    type: ADD_TODO_ITEM,
    name
  }
}

export function removeTodo(name) {
  return {
    type: REMOVE_TODO_ITEM,
    name
  }
}

export function markTodoCompleted(index) {
  return {
    type: MARK_TODO_COMPLETED,
    index
  }
}
