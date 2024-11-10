const initialState = {
    data: [''],
}
export const accountReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'AddAccount':
            return {
                ...state,
                data: [action.payload]
            }
        default:
            return state;
    }
}