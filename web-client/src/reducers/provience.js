import {
    ADD_REQUEST, ADD_SUCCESS, ADD_FAILURE,
    EDIT_REQUEST, EDIT_SUCCESS, EDIT_FAILURE,
    DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE,
    FIND_REQUEST, FIND_SUCCESS, FIND_FAILURE,
    FINDS_REQUEST, FINDS_SUCCESS, FINDS_FAILURE
} from "../actions/constants";

const defaultState = {data: null, loading: false, error: null};

export function addProvience(previousState = defaultState, action) {
    switch (action.type) {
        case ADD_REQUEST:
            return {
                ...previousState,
                loading: true,
                error: null
            };
        case ADD_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case ADD_FAILURE:
            return {
                ...previousState,
                loading: false,
                error: action.error
            };
        default:
            return previousState;
    }
}

export function editProvience(previousState = defaultState, action) {
    switch (action.type) {
        case EDIT_REQUEST:
            return {
                ...previousState,
                loading: true,
                error: null
            };
        case EDIT_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case EDIT_FAILURE:
            return {
                ...previousState,
                loading: false,
                error: action.error
            };
        default:
            return previousState;
    }
}

export function deleteByIdProvience(previousState = defaultState, action) {
    switch (action.type) {
        case DELETE_REQUEST:
            return {
                ...previousState,
                loading: true,
                error: null
            };
        case DELETE_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case DELETE_FAILURE:
            return {
                ...previousState,
                loading: false,
                error: action.error
            };
        default:
            return previousState;
    }
}

export function findByIdProvience(previousState = defaultState, action) {
    switch (action.type) {
        case FIND_REQUEST:
            return {
                ...previousState,
                loading: true,
                error: null
            };
        case FIND_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case FIND_FAILURE:
            return {
                ...previousState,
                loading: false,
                error: action.error
            };
        default:
            return previousState;
    }
}

export function findsProvience(previousState = defaultState, action) {
    switch (action.type) {
        case FINDS_REQUEST:
            return {
                ...previousState,
                loading: true,
                error: null
            };
        case FINDS_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case FINDS_FAILURE:
            return {
                ...previousState,
                loading: false,
                error: action.error
            };
        default:
            return previousState;
    }
}
