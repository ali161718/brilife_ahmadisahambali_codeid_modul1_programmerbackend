import {addProvience,editProvience, findByIdProvience, deleteByIdProvience, findsProvience} from "./provience";
import {addContraception, editContraception, findByIdContraception, deleteByIdContraception, findsContraception} from "./contraception";
import {addConsumer, editConsumer, findByIdConsumer, deleteByIdConsumer, findsConsumer} from "./consumer";
import {combineReducers} from 'redux';

export default combineReducers({
    addProvience, editProvience, findByIdProvience, deleteByIdProvience, findsProvience,
    addContraception, editContraception, findByIdContraception, deleteByIdContraception, findsContraception,
    addConsumer, editConsumer, findByIdConsumer, deleteByIdConsumer, findsConsumer
});
