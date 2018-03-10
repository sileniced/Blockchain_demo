import React, {PureComponent} from 'react'

class TextInput extends PureComponent {

  handleChange = (event) => {
    this.props.handleOnChange(event.target.value)
  }

  render() {
    return <input type="text" onChange={e => this.handleChange(e)} />
  }
}

export default TextInput