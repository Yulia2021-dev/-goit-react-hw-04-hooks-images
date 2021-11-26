import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => e.code === 'Escape' && this.props.onClick();

  handleBackdropClick = e => e.currentTarget === e.target && this.props.onClick();

  render() {
    const { modalSource } = this.props;
    return createPortal(
      <div className="" onClick={this.handleBackdropClick}>
        <div className="">
          <img src={modalSource} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}