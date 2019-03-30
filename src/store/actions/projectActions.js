export const deleteProjectAction = (id) => {
    return (dispatch, getState) => {
        //... async code here
        dispatch({
            type: "DELETE_PROJECT",
            id
        })
    }
} 