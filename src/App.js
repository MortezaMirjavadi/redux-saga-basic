import React, {Component} from 'react';
import * as actionTypes from "./store/actionTypes";
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux";

const styles = {
    card: {
        minWidth: 50,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};
class App extends Component {
    render() {
        const {classes} = this.props;
        const posts = this.props.posts.map(post => (
            <Card key={post.id} className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {post.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {post.body}
                    </Typography>
                </CardContent>
            </Card>
        ));

        return (
            <div className="App">
                <button onClick={() => this.props.onIncrement()}> Increment</button>
                <button onClick={() => this.props.onDecrement()}> Decrement</button>
                <button onClick={() => this.props.onGetPosts()}> Get Posts</button>
                <div>
                    <h1> {this.props.age} </h1>
                </div>
                <div>
                    {posts}
                </div>
            </div>
        );
    }
}

const mapsStateToProps = state => {
    return {
        age: state.appData.age,
        posts: state.appData.posts
    }
};
const mapsDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(actionTypes.increment()),
        onDecrement: () => dispatch(actionTypes.decrement()),
        onGetPosts: () => dispatch(actionTypes.getPosts()),
    }
};
export default connect(mapsStateToProps, mapsDispatchToProps)(withStyles(styles)(App));
