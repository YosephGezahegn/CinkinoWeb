import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { loadState, saveState } from './localStorage'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const persistedState = loadState()
const store =
    createStoreWithMiddleware(
        reducers,
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()

    )
store.subscribe(() => {
    saveState(store.getState())
})


export default store;