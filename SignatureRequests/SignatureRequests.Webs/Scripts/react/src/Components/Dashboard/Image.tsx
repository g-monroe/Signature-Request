import React, { Component } from 'react';
import PropTypes from 'prop-types';
interface IImageProps{
    src: string;
    failedSrc:string;
}
interface IImageState{
    src: string;
    errored:boolean;
}
class Image extends React.Component<IImageProps, IImageState> {

    state:IImageState = {
      src: this.props.src,
      errored: false,
    };
  

  onError = () => {
    if (!this.state.errored) {
      this.setState({
        src: this.props.failedSrc,
        errored: true,
      });
    }
  }

  render() {
    const { src } = this.state;

    return (
      <img className="preview-doc"
        src={src}
        onError={this.onError}
      />
    );
  }
}
export default Image;