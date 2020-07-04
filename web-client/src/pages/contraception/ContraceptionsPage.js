import React, {Component} from "react";
import Page from "../../components/Page";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../styles";
import MUIDataTable from "mui-datatables";
import {findAll} from '../../actions/action';
import {Button, CircularProgress} from "@material-ui/core";
import {
    AddCircle as AddIcon,
    Refresh as RefreshIcon
} from "@material-ui/icons";
import {connect} from 'react-redux';

class ContraceptionsPage extends Component {

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
        this.props.findAll(this.state.params, 'contraception');
    }

    onReload = () => {
        this.reload();
    };

    onChangePage = (currentPage) => {
        const {params} = this.state;
        this.setState({params: {...params, page: currentPage}});
    };

    onChangeRowsPerPage = (numberOfRows) => {
        const {params} = this.state;
        this.setState({params: {...params, size: numberOfRows}});
    };

    onSearchChange = (searchText) => {
        const {params} = this.state;
        this.setState({params: {...params, search: {name: searchText}}});
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
                label: "ID",
                options: {
                    sortDirection: params.sort
                }
            },
            {
                name: "name",
                label: "Name",
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
            page: params.page,
            count: total,
            selectableRows: 'none',
            rowsPerPage: params.size,
            rowsPerPageOptions: [2, 5, 10, 50],
            searchText: params.search.name,
            onSearchChange: this.onSearchChange,
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

                <MUIDataTable
                    className={classes.table}
                    title={"Contraception List"}
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
    data: state.findsContraception.data,
    loading: state.findsContraception.loading,
    error: state.findsContraception.error
});

const mapDispatchToProps = ({
     findAll
});

export default withStyles(styles, {withTheme: true})(
    connect(mapStateToProps, mapDispatchToProps)(ContraceptionsPage)
);
