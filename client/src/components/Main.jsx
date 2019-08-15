import React, { Component } from "react";
import { connect } from 'react-redux';
import LeftColumn from "../pages/LeftColumn";
import RightColumn from "../pages/RightColumn";
import SpinnerPage from '../pages/loader/SpinnerPage';

const mapState = state => ({
  cards: state.cards,
  loading: state.async.loading
});

class Main extends Component {
  
  render() {
    const { cards, loading } = this.props;
    if (loading) return <SpinnerPage inverted={true}/>

    return (
      <div className="block">
        <div className="section">
          <div className="left-column">
            <LeftColumn />
          </div>
          <div className="right-column">
            <RightColumn cards={cards} />
          </div>
        </div>
      </div>
    );
  }
};

export default connect(mapState)(Main);
