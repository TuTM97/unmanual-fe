import { combineReducers } from '@reduxjs/toolkit'

import layoutReducer from './layout'
import authReducer from './auth'
import calendarReducer from './calendar'
import chatReducer from './chat'
import emailReducer from './email'
import kanbanReducer from './kanban'
import projectsReducer from './projects'
import todoReducer from './todo'

const rootReducers = combineReducers({
  layout: layoutReducer,
  auth: authReducer,
  calendar: calendarReducer,
  chat: chatReducer,
  project: projectsReducer,
  kanban: kanbanReducer,
  email: emailReducer,
  todo: todoReducer
})

export default rootReducers
