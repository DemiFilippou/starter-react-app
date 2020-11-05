import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CounterComponent } from "./CounterComponent";

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      incrementCounter: () => {
        return {
          type: "INCREMENT_COUNTER",
        };
      },
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
