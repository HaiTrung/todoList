/**
 * Created by Hai Trung on 22/11/2016.
 */

/*
* action types
 */
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
* other constants
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
* action creators
 */

/**
 * action add Todo
 * @param text
 * @returns {{type: string, text: *}}
 */
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

/**
 * action toggle Todo
 * @param index
 * @returns {{type: string, index: *}}
 */
export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

/**
 * actinon filter Todo
 * @param filter
 * @returns {{type: string, filter: *}}
 */
export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}