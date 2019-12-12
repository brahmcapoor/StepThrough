import { connect } from 'react-redux';
import Terminal from './terminal';

const mapStateToProps = state => ({
    ...state.navbarReducer.terminal
});


export default connect(mapStateToProps)(Terminal);