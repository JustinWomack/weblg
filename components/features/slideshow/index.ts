import { connect } from 'react-redux';
import Component from './component';
import { actions as slideshowActions, getPosition } from './duck';
import Types from 'Types';

const mapStateToProps = (state: Types.RootState) => ({
    position: getPosition(state),
});

export default connect(mapStateToProps, {
    onIncrement: slideshowActions.increment,
    onDecrement: slideshowActions.decrement,
    setPosition: slideshowActions.setPosition,
})(Component);
