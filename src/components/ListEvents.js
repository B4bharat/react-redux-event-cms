import React from "react";
import { connect } from "react-redux";

const ListEvents = () => {
  return <div>ListEvents</div>;
};

const mapStateToProps = (store) => {
  console.log(store);

  return store.events;
};

export default connect(mapStateToProps)(ListEvents);
