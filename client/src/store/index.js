import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, combineReducers, applyMiddleware } from "redux";

import userReducer from "@/store/reducers/user/userReducer";
import userIdReducer from "@/store/reducers/user/userIdReducer";
import pageReducer from "@/store/reducers/page/pageReducer";
import groupReducer from "@/store/reducers/group/groupReducer";
import mediaReducer from "@/store/reducers/media/mediaReducer";
import toggleReducer from "@/store/reducers/toggle/toggleReducer";
import userRelationshipReducer from "@/store/reducers/user/userRelationshipReducer";

const rootReducer = combineReducers({
    user: userReducer,
    userId: userIdReducer,
    page: pageReducer,
    group: groupReducer,
    media: mediaReducer,
    toggle: toggleReducer,
    userRelationship: userRelationshipReducer,
})

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persist = persistStore(store);


export { store, persist };