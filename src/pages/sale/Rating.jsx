// import React, { Component } from "react";
// import { MDBIcon } from "mdbreact";

// class Rating extends Component {

//   render() {
//     return (
//       <div className="d-flex">
//         <ul className="rating d-flex">
//           <li>
//             <MDBIcon icon="star" className="amber-text" />
//           </li>
//           <li>
//             <MDBIcon icon="star" className="amber-text" />
//           </li>
//           <li>
//             <MDBIcon icon="star" className="amber-text" />
//           </li>
//           <li>
//             <MDBIcon icon="star" className="amber-text" />
//           </li>
//           <li>
//             <MDBIcon far icon="star" className="amber-text pr-3" />
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }
// export default Rating;
import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating || null,
      temp_rating: null
    };
  }

  handleMouseover(rating) {
    this.setState(prev => ({
      rating,
      temp_rating: prev.rating
    }));
  }

  handleMouseout() {
    this.setState(prev => ({
      rating: prev.temp_rating
    }));
  }

  rate(rating) {
    this.setState({
      rating,
      temp_rating: rating
    });
  }

  render() {
    const { rating } = this.state;
    let stars = [];
    for (let i = 0; i < 10; i++) {
      let starClass = "ion-ios-star-outline";
      if (rating >= i && rating !== null) {
        starClass = "ion-ios-star";
      }
      stars.push(
        <MDBIcon
          icon="star"
          size="3x"
          style={{
            display: "inline-block",
            width: "22px",
            fontSize: "33px",
            overflow: "hidden",
            marginRight: "-7px",
            direction: i % 2 === 0 ? "ltr" : "rtl"
          }}
          key={i}
          className={starClass}
          onMouseOver={() => this.handleMouseover(i)}
          onClick={() => this.rate(i)}
          onMouseOut={() => this.handleMouseout()}
        />
      );
    }
    return <div className="d-flex w-50">{stars}</div>;
  }
}

export default Rating;
