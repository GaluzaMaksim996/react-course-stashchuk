import getCurrentTime from "../utils/getCurrentTime.js"
import {ADD_CURRENT_TIME, REMOVE_ALL_TIMES} from "./actionTypes"

export function addCurrentTime() {
  return {
    type: ADD_CURRENT_TIME,
    payload: getCurrentTime()
  }
}

export function removeAllTimes() {
  return {
    type: REMOVE_ALL_TIMES,
  }
}