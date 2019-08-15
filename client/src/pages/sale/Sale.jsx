import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBView,
  MDBMask,
  MDBBtn,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardText,
  MDBCarouselInner,
  MDBCarousel,
  MDBCarouselItem
} from "mdbreact";

class Sale extends Component {
  render() {
    const bgGrey = { backgroundColor: "#bdbdbd" };
    return (
      <MDBContainer fluid className="mt-5">
        <MDBRow>
          <MDBCol
            size="12"
            className="px-0 mb-5"
            style={{ borderBottom: "15px solid #2BBBAD" }}
          >
            <MDBView>
              <img
                src="https://val-center.com/system/0000/0101/12.jpg"
                alt=""
                style={{
                  maxHeight: "500px",
                  minHeight: "500px",
                  width: "100%",
                  display: "flex",
                  padding: "0"
                }}
              />
              <MDBMask className="flex-center" overlay="stylish-strong">
                <div className="d-flex flex-column align-items-center">
                  <h1 className="h1-responsive white-text">
                    Start selling your products on the outlet today!
                  </h1>
                  <p className="white-text pb-5">
                    More than 100 million users in {new Date().getFullYear()}
                  </p>
                  <MDBBtn>
                    <Link to="/addSale" className="white-text">
                      Request
                    </Link>
                  </MDBBtn>
                </div>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <h1 className="h1-responsive d-flex justify-content-center teal-text font-weight-bold py-5 pb-0">
              Merchant Benefits
            </h1>
          </MDBCol>
          <section className="mb-5 d-flex justify-space-between px-3 text-block">
            <MDBRow>
              <MDBCol className="mb-4">
                <MDBCardBody className="pb-0 d-flex flex-column align-items-center">
                  <a href="#!" className="teal-text pb-4">
                    <MDBIcon icon="users-cog" className="pr-2" size="5x" />
                  </a>
                  <p className="px-5 text-center">
                    Neque porro quisquam est,qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit cupidatat proident
                    voluptatem quia numquam.
                  </p>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="mb-4">
                <MDBCardBody className="pb-0 d-flex flex-column align-items-center">
                  <a href="#!" className="teal-text pb-4">
                    <MDBIcon icon="bullhorn" className="pr-2" size="5x" />
                  </a>
                  <p className="px-5 text-center">
                    Neque porro quisquam est,qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit cupidatat proident
                    voluptatem quia numquam.
                  </p>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol className="mb-4">
                <MDBCardBody className="pb-0 d-flex flex-column align-items-center">
                  <a href="#!" className="teal-text pb-4">
                    <MDBIcon icon="cogs" className="pr-2" size="5x" />
                  </a>
                  <p className="px-5 text-center">
                    Neque porro quisquam est,qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit cupidatat proident
                    voluptatem quia numquam.
                  </p>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBRow>

        <MDBRow>
          <MDBCol
            size="12"
            className="px-0 d-flex flex-column align-items-center"
            style={bgGrey}
          >
            <h2 className="h1-responsive font-weight-bold dark-grey-text my-5">
              How to start selling?
            </h2>
            <p className="dark-grey-text w-responsive mx-auto mb-5 px-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
            <MDBRow className="text-center mx-5">
              <MDBCol md="3" className="mb-md-0 mb-5">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05pOWJkKdZwZzQ5873qlLtryS5KXFf8A9EU2sk8g23aXIrW04"
                  alt=""
                  className="rounded-circle z-depth-1 img-fluid"
                  style={{
                    maxHeight: "150px",
                    minHeight: "150px",
                    maxWidth: "150px"
                  }}
                />

                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Send an application
                </h4>
              </MDBCol>
              <MDBCol md="3" className="mb-md-0 mb-5">
                <img
                  src="https://images.pexels.com/photos/210585/pexels-photo-210585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="rounded-circle z-depth-1 img-fluid"
                  style={{
                    maxHeight: "150px",
                    minHeight: "150px",
                    maxWidth: "150px"
                  }}
                />

                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Sign an agreement
                </h4>
              </MDBCol>
              <MDBCol md="3" className="mb-md-0 mb-5">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGCsUkezHlb4vm6K47hcL8ekB4d6i3xlLNnqKPI7Y3RmZotW39w"
                  alt=""
                  className="rounded-circle z-depth-1 img-fluid"
                  style={{
                    maxHeight: "150px",
                    minHeight: "150px",

                    maxWidth: "150px"
                  }}
                />

                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Lead goods
                </h4>
              </MDBCol>
              <MDBCol md="3" className="mb-md-0 mb-5">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB2TzHNLOdMPLDUqxa7YrISGBV7It-fPOticeqLiu8mtPwMFOKOA"
                  alt=""
                  className="rounded-circle z-depth-1 img-fluid"
                  style={{
                    maxHeight: "150px",
                    minHeight: "150px",
                    maxWidth: "150px"
                  }}
                />

                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Start selling
                </h4>
              </MDBCol>
              <h3 className="h1-responsive d-flex justify-content-center font-weight-bold dark-grey-text mt-4 w-100">
                Dear (future) sellers!
              </h3>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <h1 className="h1-responsive d-flex justify-content-center font-weight-bold dark-grey-text mt-4 w-100">
              Sellers Reviews
            </h1>
            <MDBCarousel activeItem={1} length={3} slide={true}>
              <MDBCarouselInner>
                <MDBRow className="pb-5">
                  <MDBCarouselItem itemId="1">
                    <MDBCol
                      md="8"
                      className="d-flex justify-content-center mx-auto"
                    >
                      <MDBCard className="z-depth-3 mb-3">
                        <MDBCardBody>
                          <MDBCardText>
                            Sit ei audiam utroque vocibus, ipsum idque vis at.
                            Ferri errem eam at, erat oratio copiosae vel eu,
                            officiis comprehensam mea cu. Duis percipitur vel
                            ne. Id vis meis instructior. Nec ad iusto appetere
                            oportere, sed labores constituam id.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBCol
                      md="8"
                      className="d-flex justify-content-center mx-auto"
                    >
                      <MDBCard className="z-depth-3 mb-3">
                        <MDBCardBody>
                          <MDBCardText>
                            Lorem ipsum dolor sit amet, an recteque persecuti
                            omittantur eam, sea instructior definitiones ei, vim
                            paulo nihil dolores ut. Sed aperiri tractatos
                            adipiscing ei. Te integre epicurei facilisi pro, ne
                            tantas urbanitas dissentiet est, torquatos
                            dissentiet qui ea. Movet nobis moderatius quo et, ei
                            falli corpora ius, albucius electram te est. Duo
                            probo omnesque scribentur ex, te impetus imperdiet
                            voluptatibus pri. Nusquam apeirian torquatos at quo,
                            nostrud partiendo id mea, sed at nemore cotidieque
                            reprehendunt.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBCol
                      md="8"
                      className="d-flex justify-content-center mx-auto"
                    >
                      <MDBCard className="z-depth-3 mb-3">
                        <MDBCardBody>
                          <MDBCardText>
                            Qui cu putent noluisse scaevola, te equidem delectus
                            sit. Has dicat nostro electram id. Ea qui ridens
                            feugiat elaboraret, eum facilisis deseruisse an.
                            Inermis blandit eloquentiam vim et, ne duo erat
                            dolorum interesset. Vim tritani deterruisset ea, quo
                            te eligendi volutpat. Vero prompta definitiones et
                            sea, eu sed minim pertinacia. Nam eu congue homero
                            elaboraret, et tempor appetere democritum eam.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBCarouselItem>
                </MDBRow>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="12" className="px-0">
            <MDBView>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPi1gqVvnU98J22r9U3pnmbieF74lBKQAMW9F0u-sbBpPIKBDkEg"
                alt=""
                style={{
                  maxHeight: "500px",
                  minHeight: "500px",
                  width: "100%",
                  display: "flex",
                  padding: "0"
                }}
              />
              <MDBMask className="flex-center" overlay="stylish-strong">
                <div className="d-flex flex-column align-items-center">
                  <h1 className="h1-responsive white-text font-weight-bold">
                    Interested in our offer?
                  </h1>
                  <p className="white-text pb-5">
                    Join us, as hundreds of stores have done.
                  </p>
                  <MDBBtn>
                    <Link to="/addSale" className="white-text">
                      Start selling
                    </Link>
                  </MDBBtn>
                </div>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default Sale;
