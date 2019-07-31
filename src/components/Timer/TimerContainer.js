import Timer from "../Timer/Timer";
import { connect } from "react-redux";
import * as timerActions from "../../redux/timerActions";

const mapStateToProps = state => ({
  value: state.timer.value,
  step: state.timer.step.value
});

const mapDispatchToProps = dispatch => ({
  onIncrement: step => dispatch(timerActions.increment(step)),
  onDecrement: step => dispatch(timerActions.decrement(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
