import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const styles = {
  scroller: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    overflowY: 'auto',
    overflowX: 'hidden',
    WebkitOverflowScrolling: 'touch',
    paddingBottom: '40px',
    backgroundColor: 'transparent',
  },
};

/**
 * Scroller Component
 */

class Scroller extends Component {
  static propTypes = {
    /**
     * Elements to be rendered inside scroller
     */
    children: PropTypes.node,
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  state = {
    scrollStartY: 0,
  };

  handleTouchStart = (event) => {
    this.setState({scrollStartY: event.touches[0].clientY});
  };

  handleTouchMove = (event) => {
    const scrollMoveY = event.changedTouches[0].clientY;
    const topOffset = event.currentTarget.scrollTop;
    const maxContentHeight = event.currentTarget.scrollHeight;
    const itemHeight = event.currentTarget.clientHeight;
    // Prevent dragging when cotent bottom is reached
    if (this.state.scrollStartY > scrollMoveY) {
      if ((topOffset + itemHeight) === maxContentHeight) {
        event.preventDefault();
      }
    } else {
      // Prevent dragging when 'top' offset is 0 (content top reached)
      if (!topOffset) {
        event.preventDefault();
      }
    }

    this.setState({scrollStartY: event.touches[0].clientY});
  };

  render() {
    const { className: classNameProp, children, style, ...other } = this.props;

    const className = classNames(
      classNameProp
    );

    const mergedStyles = {
      ...styles.scroller,
      ...style,
    };

    return (
      <div
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        className={className}
        style={mergedStyles}
        {...other}
      >
        {children}
      </div>
    );
  }
}

export default Scroller;
