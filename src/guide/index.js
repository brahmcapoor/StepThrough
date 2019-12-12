import { connect } from 'react-redux';
import Guide from './guide';

const mapStateToProps = state => ({
    html: state.navbarReducer.guide.html,
});


export default connect(mapStateToProps)(Guide);