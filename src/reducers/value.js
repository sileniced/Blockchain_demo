import {sha256} from 'js-sha256'

const initialState = sha256('')

export default (state = initialState, { type, value }) => {
  switch (type) {
    case 'VALUE_CHANGE':
      return sha256(value)
    default:
      return state
  }
}