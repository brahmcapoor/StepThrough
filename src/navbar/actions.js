export const nextStage = () => dispatch => {
    dispatch({
        type: 'NEXT_STAGE',
    });
}

export const prevStage = () => dispatch => {
    dispatch({
        type: 'PREV_STAGE',
    });
}