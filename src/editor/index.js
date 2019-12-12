import { connect } from 'react-redux';
import Editor from './editor';

const mapStateToProps = state => ({
    ...state.navbarReducer.editor
});


export default connect(mapStateToProps)(Editor);