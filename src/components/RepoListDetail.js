import React, {Component} from 'react';
import {connect} from "react-redux";
import {getRepoListDetail} from "../store/actions/RepoListDetailAction";
import Pagination from "./Pagination";
import {Link} from "react-router-dom";

class RepoListDetail extends Component {
    state = {
        repo_count: "",
        parameters:{},
        page:1,
        per_page_data: 10,
        range: [],
    };
    componentDidMount() {
        this.state.parameters = {
           id:this.props.location.state.id,
        };
        this.props.getRepoListDetail(this.state.parameters);
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

                            <b   style={{paddingLeft: 10}}>
                                {item.name}
                            </b>

                    </div>
                );
            });

        }
    }

    render() {
        const {loading, errorMessage, data} = this.props.RepoListDetailReducer;
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
    RepoListDetailReducer: state.RepoListDetailReducer
});
export default connect(
    mapStateToProps,
    {getRepoListDetail}
)(RepoListDetail);

