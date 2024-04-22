import React from 'react';
class ImageComponent extends React.Component {
    render() {
        return (
            <img src={this.props.src} style={{ height : "100px" }} alt={this.props.alt} />
        );
    }
}
export default ImageComponent;