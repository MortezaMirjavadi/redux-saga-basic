import axios from "axios";
import * as actionTypes from "../actionTypes";
import { delay, takeLatest, put, all} from "redux-saga/effects";

function* incrementAsync() {
    yield delay(2000);
    yield put(actionTypes.incrementAsync(1));
}
export function* increment() {
    yield takeLatest(actionTypes.INCREMENT, incrementAsync);
}


function* getAllPostAsync() {
    try {
        const json = yield axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data );
        yield put(actionTypes.getPostsSuccess(json));
    }
    catch (error) {
        yield put(actionTypes.getPostFailed());
    }
}
export function* getPosts() {
    yield takeLatest(actionTypes.GETALLPOSTS, getAllPostAsync);
}

export default function* rootSaga() {
    yield all([
        yield takeLatest(actionTypes.GETALLPOSTS, getAllPostAsync),
        yield takeLatest(actionTypes.INCREMENT, incrementAsync)
    ])
}
