export const getInputValue = (value) =>{
  return {
    type: 'VALUE_CHANGE',
    value
  }
}

export const setDefaultHash = () => {
  return {
    type: 'SET_DEFAULT_HASH'
  }
}