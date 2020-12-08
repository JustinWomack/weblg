import { connect } from 'react-redux';
import Template from './component';
import { actions as templateActions, getCounter } from './duck';
import Types from 'Types';

const mapStateToProps = (state: Types.RootState) => ({
    value: getCounter(state),
});

export default connect(mapStateToProps, {
    onIncrement: templateActions.increment,
})(Template);
