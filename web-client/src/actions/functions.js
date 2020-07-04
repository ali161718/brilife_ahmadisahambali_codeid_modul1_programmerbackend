import {
    ADD_SUCCESS, ADD_FAILURE,
    EDIT_SUCCESS, EDIT_FAILURE,
    DELETE_SUCCESS, DELETE_FAILURE,
    FIND_SUCCESS, FIND_FAILURE,
    FINDS_SUCCESS, FINDS_FAILURE
} from "./constants";

export function addSuccess(data) {
    return {
        type: ADD_SUCCESS,
        data: data
    };
}

export function addFailure(error) {
    return {
        type: ADD_FAILURE,
        error: error
    };
}

export function editSuccess(data) {
    return {
        type: EDIT_SUCCESS,
        data: data
    };
}

export function editFailure(error) {
    return {
        type: EDIT_FAILURE,
        error: error
    };
}

export function deleteSuccess(data) {
    return {
        type: DELETE_SUCCESS,
        data: data
    };
}

export function deleteFailure(error) {
    return {
        type: DELETE_FAILURE,
        error: error
    };
}

export function findSuccess(data) {
    return {
        type: FIND_SUCCESS,
        data: data
    };
}

export function findFailure(error) {
    return {
        type: FIND_FAILURE,
        error: error
    };
}

export function findsSuccess(data) {
    return {
        type: FINDS_SUCCESS,
        data: data
    };
}

export function findsFailure(error) {
    return {
        type: FINDS_FAILURE,
        error: error
    };
}
