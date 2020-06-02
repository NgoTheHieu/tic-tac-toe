import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
export default function Bottom() {
    return (
        <div class="white">
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Github</h5>
            <p>
              Follow me on Github and Social Media
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title"></h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/NgoTheHieu">Github</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
        </div>
    )
}
