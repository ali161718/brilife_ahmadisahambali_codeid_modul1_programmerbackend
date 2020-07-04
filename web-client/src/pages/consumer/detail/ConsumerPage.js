import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Page from "../../../components/Page";
import styles from "../../styles";
import {add, edit, findById, findAll} from "../../../actions/action";
import {Button, TextField, CircularProgress} from "@material-ui/core";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import {connect} from 'react-redux';
import Autocomplete from "@material-ui/lab/Autocomplete";

class ConsumerPage extends Component {

    constructor(props) {
        super(props);

        const {match} = this.props;

        this.state = {
            error: null,
            options: [],
            consumer: {
                id: match.params.id,
                province: null,
                amount: null,
                contraception: null
            }
        };
    }

    componentDidMount() {
        const {consumer} = this.state;
        if (consumer.id) {
            this.props.findById(consumer.id, 'consumer');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {findsDataProvience, addData, addError, editError, data, error} = this.props;

        if (prevProps.findsDataProvience !== findsDataProvience) {
            this.setState({options: findsDataProvience.list});
        } else if (error && prevProps.data !== data) {
            this.setState({consumer: data});
        } else if (error && prevProps.addError !== addError) {
            this.setState({error: addError});
        } else if (error && prevProps.editError !== editError) {
            this.setState({error: editError});
        } else if (error && prevProps.error !== error) {
            this.setState({error: error});
        } else if (prevProps.addData !== addData) {
            this.props.history.push('/consumer');
        }
    }

    onChange = (event) => {
        const {value} = event.target;
        const {consumer} = this.state;
        this.setState({
            consumer: {
                ...consumer, amount: value
            }
        });
    };

    onProvienceChange = (event, value) => {
        const {consumer} = this.state;
        this.setState({consumer: {...consumer, province: value}})
    };

    onProvienceOpen = (event) => {
        this.props.findAll({}, 'province');
    };

    onProvienceTextChange = event => {
        const {value} = event.target;

        if (value) {
            this.props.findAll({search: {name: value}}, 'province');
        } else {
            this.setState(this.state.options = []);
        }
    };

    onContraceptionChange = (event, value) => {
        const {consumer} = this.state;
        this.setState({consumer: {...consumer, contraception: value}})
    };

    onContraceptionOpen = (event) => {
        this.props.findAll({}, 'contraception');
    };

    onContraceptionTextChange = event => {
        const {value} = event.target;

        if (value) {
            this.props.findAll({search: {name: value}}, 'contraception');
        } else {
            this.setState(this.state.options = []);
        }
    };

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.consumer.id === undefined) {
            this.props.add(this.state.consumer, 'consumer');
        } else {
            this.props.edit(this.state.consumer, 'consumer');
        }
    };

    render() {
        const {classes, loading, addError, editError, findsLoadingProvience, findsLoadingContraception} = this.props;
        const {consumer, error, options} = this.state;
        const errorData = addError?.data || editError?.data|| {};
        return (
            <Page error={error}>

                <Card className={classes.card}>
                    <form noValidate autoComplete="off" className={classes.form}>
                        {
                            consumer.id && <div className={classes.formField}>
                                <h3>Stock Detail</h3>
                                <TextField
                                    className={classes.text}
                                    variant={"outlined"}
                                    id="id"
                                    name="id"
                                    label="ID"
                                    value={consumer.id}
                                    fullWidth
                                    InputProps={{readOnly: true, disableUnderline: true}}/>
                            </div>
                        }
                        <div className={classes.formField}>
                            <TextField
                                className={classes.text}
                                variant={"outlined"}
                                id="amount"
                                name="amount"
                                label="Amount"
                                type={"number"}
                                value={consumer.amount}
                                error={errorData.amount}
                                helperText={errorData.amount ? errorData.amount[0] : null}
                                fullWidth
                                onChange={this.onChange}/>
                        </div>

                        <Autocomplete
                            className={classes.auto1}
                            options={options ? options : []}
                            autoHighlight
                            value={consumer.province}
                            onChange={this.onProvienceChange}
                            getOptionSelected={(option, value) => option.id === value.id}
                            getOptionLabel={(option) => option.name}
                            loading={findsLoadingProvience}
                            onOpen={this.onProvienceOpen}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Provience"
                                    variant="outlined"
                                    error={errorData.provinceId}
                                    helperText={errorData.provinceId ? errorData.provinceId[0] : null}
                                    onChange={this.onProvienceTextChange}
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password'
                                    }}

                                />
                            )}
                        />
                        <Autocomplete
                            className={classes.auto1}
                            options={options ? options : []}
                            autoHighlight
                            value={consumer.contraception}
                            onChange={this.onContraceptionChange}
                            getOptionSelected={(option, value) => option.id === value.id}
                            getOptionLabel={(option) => option.name}
                            loading={findsLoadingContraception}
                            onOpen={this.onContraceptionOpen}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Contraception"
                                    variant="outlined"
                                    error={errorData.contraceptionId}
                                    helperText={errorData.contraceptionId ? errorData.contraceptionId[0] : null}
                                    onChange={this.onContraceptionTextChange}
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password'
                                    }}

                                />
                            )}
                        />

                    </form>
                </Card>

                <div className={classes.formButton}>
                    <Button
                        onClick={this.onSubmit}
                        className={classes.buttonSave}
                        variant={"contained"}
                        startIcon={<SaveAltIcon/>}
                        type={'onSubmit'}
                        disabled={loading}
                    >
                        Save
                    </Button>
                </div>
                <div className={classes.formButton}>
                    <Button
                        className={classes.buttonBack}
                        variant={"contained"}
                        color={"yellow"}
                        startIcon={<ArrowBackIcon/>}
                        disabled={loading}
                        href={'/consumer'}
                    >
                        Back
                    </Button>

                </div>
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    addData: state.addConsumer.data,
    addError: state.addConsumer.error,
    editData: state.editConsumer.data,
    editError: state.editConsumer.error,
    findsDataProvience: state.findsProvience.data,
    findsErrorProvience: state.findsProvience.error,
    findsDataContraception: state.findsContraception.data,
    findsErrorContraception: state.findsContraception.error,
    data: state.findByIdConsumer.data,
    error: state.findByIdConsumer.error,
    loading: state.findByIdConsumer.loading || state.addConsumer.loading || state.editConsumer.loading
        || state.findsProvience.loading
        || state.findsContraception.loading
});

const mapDispatchToProps = ({
    add, edit, findById, findAll
});

export default withStyles(styles, {withTheme: true})(
    connect(mapStateToProps, mapDispatchToProps)(ConsumerPage)
);
