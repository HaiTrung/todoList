/**
 * Created by Hai Trung on 22/11/2016.
 */

import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)