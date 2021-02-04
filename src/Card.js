import React, { Component } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdbreact";

class CardExample extends Component {
  render() {
    return (
      <MDBRow>
        <MDBCol>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('https://picsum.photos/500/1000')"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
              <div>
                <h5 className="pink-text">
                  <MDBIcon icon="chart-pie"/> Marketing
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>This is card title</strong>
                </MDBCardTitle>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                  sit officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn color="pink">
                  <MDBIcon icon="clone left" /> View project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
              <div>
                <h5 className="orange-text">
                  <MDBIcon icon="desktop" /> Software
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>This is card title</strong>
                </MDBCardTitle>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                  sit officia accusamus minus error nisi architecto nulla ipsum
                  dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn color="deep-orange">
                  <MDBIcon icon="clone left" /> View project
                </MDBBtn>
              </div>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default CardExample;