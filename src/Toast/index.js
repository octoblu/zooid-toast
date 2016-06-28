import _ from 'lodash'
import classNames from 'classnames'
import React, { PropTypes } from 'react'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  timeout: PropTypes.number,
}

const defaultProps = {
  timeout: 4000,
}

class Toast extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isVisible: false }
  }

  componentWillMount() {
    this.updateState(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps)
  }

  updateState({ message, timeout }) {
    this.setState({ isVisible: !_.isEmpty(message) })
    setTimeout(() => this.setState({ isVisible: false }), timeout)
  }

  willEnter() {
    return {
      height: spring('auto', { stiffness: 100, damping: 10 }),
      opacity: 1,
    }
  }

  willLeave() {
    return {
      height: 0,
      opacity: -1,
    }
  }

  render() {
    const { className, message } = this.props
    const { isVisible } = this.state

    if (!isVisible) return null

    return (
      <Transition component={false} enter={this.willEnter()} leave={this.willLeave()}>
        <div className={classNames(styles.root, className)} key="toast">
          <span className={styles.message}>{message}</span>
        </div>
      </Transition>
    )
  }
}

Toast.propTypes = propTypes
Toast.defaultProps = defaultProps

export default Toast
