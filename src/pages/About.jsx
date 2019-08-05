import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBAnimation } from "mdbreact";

class About extends Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol size="10" className="mx-auto">
            <h1 className="h1-responsive teal-text font-weight-bold mt-3 pb-0">About Us</h1>
            <h3 className="h3-responsive teal-text">
              Little dreams and grandiose plans
            </h3>
            <MDBAnimation type="slideInLeft">
              <div className="d-flex justify-content-center pb-5">
                <img
                className="img-fluid"
                src="https://images.pexels.com/photos/210586/pexels-photo-210586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                style={{ height: "350px", width: "80%" }}
              />
              </div>
              
            </MDBAnimation>
            <p>
              <strong className="teal-text">Online Store</strong> - lorem ipsum
              dolor sit amet, natum quidam vituperatoribus has eu. Et nec doming
              posidonium vituperatoribus, in est torquatos voluptaria. Ius ea
              quis imperdiet efficiantur. Tibique recteque posidonium vim ut,
              est liber tacimates ut. Erat tantas alterum eu ius, pro partem
              theophrastus eu. Eos fugit alienum erroribus te. Eum summo debet
              regione an, ius ea officiis lucilius. Mutat postea virtute vis te.
              Ad vel laudem doctus, ea mea possim alienum mandamus. Veri quidam
              sea in, id partem docendi his, integre convenire petentium et duo.
              Cibo voluptaria disputando mei ea. At liber maiorum efficiantur
              vix. Cu quo errem quidam tibique. In ius ipsum principes
              vituperata, at sea homero mandamus incorrupte. Has ut magna zril
              essent, iusto ceteros qui cu, qui alia aliquam ex. Cu qui graece
              utamur, vim posse habemus in, his errem consequuntur ut.
            </p>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol size="10" className="mx-auto">
            <h1 className="h1-responsive teal-text">
              Our goal is to be useful.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, natum quidam vituperatoribus has eu.
              Et nec doming posidonium vituperatoribus, in est torquatos
              voluptaria. Ius ea quis imperdiet efficiantur. Tibique recteque
              posidonium vim ut, est liber tacimates ut. Erat tantas alterum eu
              ius, pro partem theophrastus eu. Eos fugit alienum erroribus te.
              Eum summo debet regione an, ius ea officiis lucilius. Mutat postea
              virtute vis te. Ad vel laudem doctus, ea mea possim alienum
              mandamus. Veri quidam sea in, id partem docendi his, integre
              convenire petentium et duo. Cibo voluptaria disputando mei ea. At
              liber maiorum efficiantur vix. Cu quo errem quidam tibique. In ius
              ipsum principes vituperata, at sea homero mandamus incorrupte. Has
              ut magna zril essent, iusto ceteros qui cu, qui alia aliquam ex.
              Cu qui graece utamur, vim posse habemus in, his errem consequuntur
              ut. Erat quaestio qui et, ludus interpretaris qui ad, liber
              oportere praesent pro et. Te simul lobortis tincidunt eos, sed ea
              unum tation electram. Erant congue detracto te nec, at usu ludus
              legimus reformidans. Lorem delicatissimi cum ad, at mandamus
              conceptam disputando vel, sit no aliquam omnesque appetere. Has ad
              bonorum eligendi consectetuer, ut tacimates sapientem eam. Ei nam
              velit reprimique, dictas minimum ea sea. Eos ei diam referrentur,
              cetero ornatus principes ea vix.
            </p>
            <h1 className="h1-responsive teal-text">
              Happiness begins with simple things.
            </h1>
            <p>
              Ad vel laudem doctus, ea mea possim alienum mandamus. Veri quidam
              sea in, id partem docendi his, integre convenire petentium et duo.
              Cibo voluptaria disputando mei ea. At liber maiorum efficiantur
              vix.Lorem delicatissimi cum ad, at mandamus conceptam disputando
              vel, sit no aliquam omnesque appetere. Has ad bonorum eligendi
              consectetuer, ut tacimates sapientem eam.
            </p>
            <h1 className="h1-responsive teal-text">Convenient delivery</h1>
            <p>
              Erant congue detracto te nec, at usu ludus legimus reformidans.
              Lorem delicatissimi cum ad, at mandamus conceptam disputando vel,
              sit no aliquam omnesque appetere. Has ad bonorum eligendi
              consectetuer, ut tacimates sapientem eam. Ei nam velit reprimique,
              dictas minimum ea sea. Eos ei diam referrentur, cetero ornatus
              principes ea vix.
            </p>
            <h1 className="h1-responsive teal-text">Further more</h1>
            <p>
              Et nec doming posidonium vituperatoribus, in est torquatos
              voluptaria. Ius ea quis imperdiet efficiantur. Tibique recteque
              posidonium vim ut, est liber tacimates ut. Erat tantas alterum eu
              ius, pro partem theophrastus eu. Eos fugit alienum erroribus te.
              Eum summo debet regione an, ius ea officiis lucilius.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default About;
