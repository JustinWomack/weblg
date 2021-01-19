import { connect } from 'react-redux';
import Component from './component';
import { actions as navActions, getOpen as getNavOpen } from './duck';
import { actions as slideActions, getPosition } from '../slideshow/duck';
import { actions as contactDialogActions } from '../contactDialog/duck';
import Types from 'Types';

const mapStateToProps = (state: Types.RootState) => ({
    open: getNavOpen(state),
    position: getPosition(state),
});

export default connect(mapStateToProps, {
    onOpen: navActions.open,
    onClose: navActions.close,
    onToggle: navActions.toggle,
    setPosition: slideActions.setPosition,
    onOpenContactDialog: contactDialogActions.open,
})(Component);
