import { produce } from 'immer';

const counterReducer = (state = { value: 0 }, action) => produce(state, draft  => {
    switch (action.type) {
        case 'INCREMENT':
            draft.value += 1;
            break;

        case 'DECREMENT':
            draft.value -= 1;
            break;
    
        default:
            return draft;
    }
});

export default counterReducer;
