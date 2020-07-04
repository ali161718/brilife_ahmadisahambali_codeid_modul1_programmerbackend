import {
    ADD_REQUEST,
    EDIT_REQUEST,
    DELETE_REQUEST,
    FIND_REQUEST,
    FINDS_REQUEST
} from "./constants";
import {
    addSuccess, addFailure,
    editSuccess, editFailure,
    deleteSuccess, deleteFailure,
    findSuccess, findFailure,
    findsSuccess, findsFailure
} from "./functions";
import {commonAxios} from "../utils/apiUtil";

export const add = (model, path) =>
    (dispatch) => {
        dispatch({type: ADD_REQUEST});

        console.log("actionModel", model);

        const request = (path === 'consumer') ?
            commonAxios.post(`${path}`, {
                "province": {"id": model.province.id},
                "contraception": {"id": model.contraception.id},
                "amount": model.amount
            })
            :
            commonAxios.post(`${path}`, model);

        request
            .then(data => {
                dispatch(addSuccess(data));
            })
            .catch(error => {
                dispatch(addFailure(error));
            });
    };

export const edit = (model, path) =>
    (dispatch) => {
        dispatch({type: EDIT_REQUEST});

        const request = (path === 'stocks') ?
            commonAxios.put(`${path}/${model.id}`, {
                "province": {"id": model.province?.id},
                "amount": model.quantity,
                "contraception": {"id": model.contraception?.id}
            })
            :
            commonAxios.put(`${path}/${model.id}`, model);

        request
            .then(data => {
                dispatch(editSuccess(data));
            })
            .catch(error => {
                dispatch(editFailure(error));
            });
    };

export const deleteById = (id, path) =>
    (dispatch) => {
        dispatch({type: DELETE_REQUEST});

        commonAxios.delete(`${path}/${id}`)
            .then(data => {
                dispatch(deleteSuccess(data));
            })
            .catch(error => {
                dispatch(deleteFailure(error));
            });
    };

export const findById = (id, path) =>
    (dispatch) => {
        dispatch({type: FIND_REQUEST});

        commonAxios.get(`${path}/${id}`)
            .then(data => {
                dispatch(findSuccess(data));
            })
            .catch(error => {
                dispatch(findFailure(error));
            });
    };

export const findAll = ({search = {}, sort = 'asc', page = 0, size = 10} = {}, path) =>
    (dispatch) => {
        dispatch({type: FINDS_REQUEST});

        commonAxios.get(`${path}`, {
            params: {...search, sort, page, size}
        })
            .then(data => {
                dispatch(findsSuccess(data));
            })
            .catch(error => {
                dispatch(findsFailure(error));
            });
    };

