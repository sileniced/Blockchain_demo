import React, {PureComponent} from 'react'
import TextInput from '../components/TextInput'
import {connect} from 'react-redux'
import {getInputValue, setDefaultHash} from '../actions/change'

class FormExample extends PureComponent {

  handleOnChange = (value) => {
    this.props.getInputValue(value)
    console.log('test')
  }

  render() {
    return (
      <div>
        <TextInput handleOnChange={this.handleOnChange} />
        <p>{this.props.value}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ value }) => ({ value })
/*
const mapStateToProps = (reduxState) => {
  return {
    value: sha256(reduxState.value)
  }
}
*/
const mapDispatchToProps = () => ({ getInputValue, setDefaultHash })

export default connect(mapStateToProps, mapDispatchToProps())(FormExample)