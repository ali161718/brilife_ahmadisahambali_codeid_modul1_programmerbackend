import React, {Component} from "react";
import Page from "../../components/Page";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../styles";
import MUIDataTable from "mui-datatables";
import {deleteById, findAll} from '../../actions/action';
import {Button, CircularProgress} from "@material-ui/core";
import {
    AddCircle as AddIcon,
    Refresh as RefreshIcon,
    Assessment as Summary
} from "@material-ui/icons";
import {connect} from 'react-redux';

class ConsumersPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            total: 0,
            params: {
                search: {name: ''},
                sort: 'asc',
                page: 0,
                size: 5,
            },
            error: null
        };
    }

    componentDidMount() {
        this.reload()
    }

    componentDidUpdate(prevProps, prevState) {
        const {deleteData, deleteError, data, error} = this.props;
        const {params} = this.state;

        if (prevProps.data !== data) {
            this.setState({data: data.list, total: data.total});
        } else if (prevState.params !== params ||
            prevProps.deleteData !== deleteData) {
            this.reload();
        } else if (deleteError && prevProps.deleteError !== deleteError) {
            this.setState({error: deleteError});
        } else if (error && prevProps.error !== error) {
            this.setState({error: error});
        }
    }

    reload() {
        this.props.findAll(this.state.params, 'consumer');
    }

    onReload = () => {
        this.reload();
    };

    onAdd = () => {
        this.props.history.push('/consumer/add');
    };

    onRowsDeleted = (rowsDeleted) => {
        const {list} = this.props.data;
        const e = list[rowsDeleted.data[0].index];

        this.props.deleteById(e.id, 'consumer');

        return false
    };

    onChangePage = (currentPage) => {
        const {params} = this.state;
        this.setState({params: {...params, page: currentPage}});
    };

    onChangeRowsPerPage = (numberOfRows) => {
        const {params} = this.state;
        this.setState({params: {...params, size: numberOfRows}});
    };

    onColumnSortChange = (changedColumn, direction) => {
        const {params} = this.state;
        const sort = direction === 'descending' ? 'desc' : 'asc';
        this.setState({params: {...params, sort}});
    };

    render() {
        const {classes, loading} = this.props;
        const {data, total, params, error} = this.state;

        const columns = [
            {
                name: "id",
                label: "Id_List",
                options: {
                    sortDirection: params.sort
                }
            },
            {
                name: "province.id",
                label: "Id_Propinsi",
                options: {
                    sort: false
                }
            },
            {
                name: "contraception.id",
                label: "Id_Kontrasepsi",
                options: {
                    sort: false
                }
            },
            {
                name: "amount",
                label: "Jumlah_Pemakai",
                options: {
                    sort: false
                }
            }
        ];
        const option = {
            serverSide: true,
            filter: false,
            download: true,
            print: true,
            search: false,
            page: params.page,
            count: total,
            selectableRows: 'none',
            rowsPerPage: params.size,
            rowsPerPageOptions: [2, 5, 10, 50],
            onColumnSortChange: this.onColumnSortChange,
            onChangePage: this.onChangePage,
            onChangeRowsPerPage: this.onChangeRowsPerPage,
            textLabels: {
                body: {
                    noMatch: loading ? <CircularProgress/> : 'Data not found'
                }
            }
        };
        return (
            <Page error={error}>
                <div className={classes.buttonContainer}>
                    <Button
                        className={classes.button}
                        variant={"contained"}
                        startIcon={<AddIcon/>}
                        onClick={this.onAdd}>
                        New Consumer Contraception
                    </Button>
                </div>
                <MUIDataTable
                    className={classes.table}
                    title={"Consumer Contraception List"}
                    data={!loading ? data : []}
                    columns={columns}
                    options={option}
                />
                <div className={classes.buttonContainer}>
                    <Button
                        className={classes.button}
                        variant={"contained"}
                        startIcon={<RefreshIcon/>}
                        disabled={loading}
                        onClick={this.onReload}>
                        Reload
                    </Button>
                </div>

            </Page>
        );
    }
}

const mapStateToProps = state => ({
    deleteData: state.deleteByIdConsumer.data,
    deleteError: state.deleteByIdConsumer.error,
    data: state.findsConsumer.data,
    error: state.findsConsumer.error,
    loading: state.findsConsumer.loading || state.deleteByIdConsumer.loading
});

const mapDispatchToProps = ({
    deleteById, findAll,
});

export default withStyles(styles, {withTheme: true})(
    connect(mapStateToProps, mapDispatchToProps)(ConsumersPage)
);
