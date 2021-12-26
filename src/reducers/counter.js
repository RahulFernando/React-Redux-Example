import { produce } from 'immer';

const counterReducer = produce((draft = { value: 0 }, action)  => {
    switch (action.type) {
        case 'INCREMENT':
            draft.value += 1;
            return draft;

        case 'DECREMENT':
            draft.value -= 1;
            return draft;
    
        default:
            return draft;
    }
});

export default counterReducer;
