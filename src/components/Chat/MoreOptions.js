import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import MoreOptionsIcon from '@mui/icons-material/MoreVertRounded'
class MoreOptions extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open })
  }

  close = () => {
    this.setState({ open: false })
    window.document.removeEventListener('click', this.close, false)
  }

  handleClickOutside = ev => {
    this.close()
  }

  componentWillReceiveProps(nextProps) {
    this.close()
  }

  render() {
    const status = this.state.open ? 'open' : 'close'

    return (
      <span className='more-options-chat-wrapper'>
        <a onClick={this.handleToggle}>
          <MoreOptionsIcon />
        </a>
        <div className={`more-options-chat more-options-chat-${status}`}>
          {this.props.children}
        </div>
      </span>
    )
  }
}

export default onClickOutside(MoreOptions)