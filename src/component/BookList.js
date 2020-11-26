import React, { Component } from "react";
export default class BooksList extends Component {
    render() {
    const imgHeight ={
      'height': '14rem'
    }
    const cardHeight = {
      'height': '30rem'
    }
    return (
      <div className="row">
        {this.props.propsItems.map((item, i) => {
          return (

            <div className="col-lg-4 col-md-6 col-sm-12 align-middle">
            <div className="card p-3 m-3 " style={cardHeight} >
              <img src={item.image}
              alt={item.title}
              className="card-img-top" style={imgHeight} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text"><b>By:</b> {item.authors}</p>
                <p className="card-text"><b>Published By:</b> {item.publisher}</p>
                <a href={item.link} target="_blank" className="btn btn-primary">See this Book</a>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    );
  }
}