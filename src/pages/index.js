import React from "react"
import { connect } from "react-redux";

import Layout from "../components/layout";

import onClick from './handlers/onClick';

const Home = (props) => (
  <Layout>
    <p>Home</p>
    <div>
      Is Starting: { props.isStarting ? 'Yes' : 'No'}
    </div>
    <button onClick={(props.onClick) }>
      Toggle starting
    </button>
  </Layout>
)

const mapStateToProps = (state) => ({
  isStarting: state.pages.isStarting
});

const actionCreators = {
  onClick
};

export default connect(mapStateToProps,actionCreators)(Home);

