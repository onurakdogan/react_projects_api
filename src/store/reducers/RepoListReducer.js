import {
    REPO_TEST_REQUEST,
    REPO_TEST_SUCCESS,
    REPO_TEST_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
    loading: false,
    errorMessage: null,
    data: null
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case REPO_TEST_REQUEST:
            return { ...state, loading: true, errorMessage: null, data: null };
        case REPO_TEST_SUCCESS:
            return { ...state, loading: false, data: payload };
        case REPO_TEST_FAILURE:
            return { ...state, loading: false, errorMessage: payload };
        default:
            return state;
    }
};
