import {
    REPO_TEST_REQUEST,
    REPO_TEST_SUCCESS,
    REPO_TEST_FAILURE
} from "./types";
import api from "../../lib/api";

export const fetchingRequest = type => ({ type });

export const fetchingSuccess = (type, json) => ({ type, payload: json });

export const fetchingFailure = (type, error) => ({ type, payload: error });

export const getRepoList = (parameter) => async dispatch => {
    dispatch(fetchingRequest(REPO_TEST_REQUEST));
    try {
        const response = await api.get("repos?page="+parameter);
        const payload = await response;
        dispatch(fetchingSuccess(REPO_TEST_SUCCESS, payload));
    } catch (error) {
        dispatch(fetchingFailure(REPO_TEST_FAILURE, error.response));
    }
};
