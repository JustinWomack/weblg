import { connect } from 'react-redux';
import Component from './component';
import { actions as contactDialogActions } from '../contactDialog/duck';
import Types from 'Types';

const mapStateToProps = (state: Types.RootState) => ({

});

export default connect(mapStateToProps, {
    onOpenContactDialog: contactDialogActions.open,
})(Component);
