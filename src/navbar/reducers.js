import stagesArray from '../stages';

const readFromStagesArray = stageIdx => {
  return {
    stage: stageIdx,
    ...stagesArray[stageIdx]
  };
};

const initialState = readFromStagesArray(0);

export const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'NEXT_STAGE':
        return readFromStagesArray(state.stage + 1);
      case 'PREV_STAGE':
        return readFromStagesArray(state.stage - 1);
     default:
        return state;
    }
}