import _ from 'lodash'
import classNames from 'classnames'
import React, { PropTypes } from 'react';

import styles from './styles.css'

const propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
  timeout: PropTypes.number
};

const defaultProps = {
  timeout: 3000
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
    setTimeout(() => this.setState({ isVisible: false }), timeout);
  }

  render() {
    const { className, message } = this.props
    const { isVisible } = this.state

    if (!isVisible) return null

    return (
      <div className={classNames(styles.root, className)}>
        <div className={styles.message}>{message}</div>
      </div>
    )
  }
}

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default Toast;
