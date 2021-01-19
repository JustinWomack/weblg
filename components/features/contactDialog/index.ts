import { connect } from 'react-redux';
import Component from './component';
import { actions as contactDialogActions, getOpen } from './duck';
import Types from 'Types';

const mapStateToProps = (state: Types.RootState) => ({
    open: getOpen(state),
});

export default connect(mapStateToProps, {
    onOpen: contactDialogActions.open,
    onClose: contactDialogActions.close,
    onToggle: contactDialogActions.toggle,
})(Component);
