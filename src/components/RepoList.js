import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getRepoList} from "../store/actions/RepoListAction";
import Pagination from "./Pagination";

class RepoList extends Component {

    state = {
        repo_count: "",
        parameters:{},
        page:1,
        per_page_data: 10,
        range: [],
    };

    componentDidMount() {

        this.state.parameters = {
            per_page:this.state.per_page_data,
            page:this.state.page,
        };
        this.props.getRepoList(this.state.parameters);
    }

    getprojects = (val) =>{
        this.props.getRepoList(val);
    };

    renderData = (loading, errorMessage, data) => {

        if (loading) {
            return <div>Loading ...</div>;
        }
        if (errorMessage) {
            return <div>Error</div>;
        }
        if (data) {
            this.state.repo_count = data.data.length;
            for (let i = 1; i <= Math.ceil(this.state.repo_count / this.state.per_page_data); ++i) {
                this.state.range.push(i);
            }
            return data.data.slice(0, this.state.per_page_data).map((item, index) => {
                return (
                    <div key={`item_${index}`} style={{padding: "10px", cursor: "pointer"}}>

                            <Link  to={{ pathname: '/RepoListDetail', state: { id: item.id.toString()} }}>
                                <b   style={{paddingLeft: 10}}>
                                    {item.name}
                                </b>
                            </Link>

                    </div>
                );
            });

        }
    };

    render() {
        const {loading, errorMessage, data} = this.props.RepoListReducer;

        return (
            <div>
                {this.renderData(loading, errorMessage, data)}
                <Pagination
                    postsPerPage={this.state.per_page_data}
                    totalPosts={this.state.repo_count}
                    getprojects={this.getprojects}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    RepoListReducer: state.RepoListReducer
});
export default connect(
    mapStateToProps,
    {getRepoList}
)(RepoList);
