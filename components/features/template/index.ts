import { connect } from 'react-redux';
import Component from './component';
import { actions as templateActions, getCounter } from './duck';
import Types from 'Types';

const mapStateToProps = (state: Types.RootState) => ({
    value: getCounter(state),
});

export default connect(mapStateToProps, {
    onIncrement: templateActions.increment,
})(Component);
