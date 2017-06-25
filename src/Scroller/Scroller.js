import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

const FIRST_ELEMENT = 0;

/**
 * Scroller Component
 */
class Scroller extends Component {
  static propTypes = {
    /**
    * Elements to be rendered inside scroller
    */
    children: PropTypes.node.isRequired,
    /**
    * The css class name of the root element.
    */
    className: PropTypes.string,
    /**
    * Override the inline-styles of the root element.
    */
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
    style: {},
  };

  state = {
    scrollStartY: 0,
  };

  handleTouchStart = event => {
    this.setState({
      scrollStartY: event.touches[FIRST_ELEMENT].clientY,
    });
  };

  handleTouchMove = event => {
    const scrollMoveY = event.changedTouches[FIRST_ELEMENT].clientY;
    const topOffset = event.currentTarget.scrollTop;
    const maxContentHeight =
      event.currentTarget.scrollHeight;
    const itemHeight = event.currentTarget.clientHeight;
    // Prevent dragging when cotent bottom is reached
    if (this.state.scrollStartY > scrollMoveY) {
      if (topOffset + itemHeight === maxContentHeight) {
        event.preventDefault();
      }
    } else {
      // Prevent dragging when 'top' offset is 0 (content top reached)
      if (!topOffset) {
        event.preventDefault();
      }
    }

    this.setState({
      scrollStartY: event.touches[FIRST_ELEMENT].clientY,
    });
  };

  render() {
    const {
      className,
      children,
      style,
    } = this.props;

    const mergedStyles = {
      ...styles.scroller,
      ...style,
    };

    return (
      <div
        className={className}
        onTouchMove={this.handleTouchMove}
        onTouchStart={this.handleTouchStart}
        style={mergedStyles}
      >
        {children}
      </div>
    );
  }
}

export default Scroller;
