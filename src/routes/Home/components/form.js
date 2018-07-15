import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getValue } from './get-value'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      photoSrc: ''
    }
    this.updateInputValueUsername = this.updateInputValueUsername.bind(this)
    this.updateInputValuePassword = this.updateInputValuePassword.bind(this)
    this.updateInputValueEmail = this.updateInputValueEmail.bind(this)
    this.encodeImageFileAsURL = this.encodeImageFileAsURL.bind(this)
    this.takeVal = this.takeVal.bind(this)
  }
  takeVal () {
    this.props.getValue({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      photoSrc: this.state.photoSrc
    })
  }
  updateInputValueUsername (e) {
    this.setState({ username: e.target.value })
  }
  updateInputValuePassword (e) {
    this.setState({ password: e.target.value })
  }
  updateInputValueEmail (e) {
    this.setState({ email: e.target.value })
  }
  encodeImageFileAsURL () {
    let filesSelected = document.getElementById('photo').files
    if (filesSelected.length > 0) {
      let fileToLoad = filesSelected[0]
      let fileReader = new FileReader()
      fileReader.onload = (fileLoadedEvent) => { this.setState({ photoSrc: fileLoadedEvent.target.result }) }
      fileReader.readAsDataURL(fileToLoad)
    }
  }

  render () {
    console.log(this.props)
    return (
      <div className='mainForm'>
        <section>
          <form action='' method='post'>
            <label htmlFor='username'>Имя пользователя </label>
            <input id='username' type='text' name='username' onChange={this.updateInputValueUsername} /><br />
            <label htmlFor='username'>Пароль </label>
            <input type='password' name='password' onChange={this.updateInputValuePassword} /><br />
            <label htmlFor='username'>Email </label>
            <input type='email' name='email' onChange={this.updateInputValueEmail} /><br />
            <label htmlFor='photo' className='uploadButton'>Загрузить фото</label>
            <input type='file' name='photo' id='photo' className='uploadPhoto' onChange={this.encodeImageFileAsURL} />
          </form>
          <input type='submit' value='Регистрация' onClick={this.takeVal} />
        </section>
      </div>
    )
  }
}
function mapStateToProps (user) {
  return {
    form: user
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getValue: (user) => dispatch(getValue(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)
