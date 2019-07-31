import StepSelector from "./StepSelector";
import * as timerActions from "../../redux/timerActions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  value: state.timer.step
});

const mapDispatchToProps = dispatch => ({
  onChange: step => dispatch(timerActions.changeStep(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepSelector);
