import { connect } from 'react-redux';
import NavBar from './navbar';
import { nextStage, prevStage } from './actions';
import stagesArray from '../stages';

const mapStateToProps = state => ({
    stage: state.navbarReducer.stage,
    numStages: stagesArray.length
});

const mapDispatchToProps = dispatch => ({
    nextStage: () => dispatch(nextStage()),
    prevStage: () => dispatch(prevStage())
});


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);