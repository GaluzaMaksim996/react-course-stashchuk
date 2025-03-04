import store from './redux/store.js'
import {addCurrentTime, removeAllTimes} from "./redux/actionCreators.js";

const btn = document.getElementById('btn')
btn.addEventListener('click', e => {
  store.dispatch(addCurrentTime())
})

const clearTimes = document.getElementById('clearTimes')
clearTimes.addEventListener('click', e => {
  store.dispatch(removeAllTimes())
})

const timesList = document.getElementById('timesList')

store.subscribe(() => {
  timesList.innerHTML = ''
  const times = store.getState()
  times.forEach(time => {
    let li = document.createElement('li')
    li.innerHTML = time;
    timesList.appendChild(li)
  })
})
