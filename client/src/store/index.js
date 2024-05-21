import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, combineReducers, applyMiddleware } from "redux";

import userReducer from "@/store/reducers/user/userReducer";
import pageReducer from "@/store/reducers/page/pageReducer";
import postReducer from "@/store/reducers/post/postReducer";
import groupReducer from "@/store/reducers/group/groupReducer";
import watchReducer from "@/store/reducers/watch/watchReducer";
import mediaReducer from "@/store/reducers/media/mediaReducer";
import userIdReducer from "@/store/reducers/user/userIdReducer";
import toggleReducer from "@/store/reducers/toggle/toggleReducer";
import messageReducer from "@/store/reducers/message/messageReducer";
import eventPageReducer from "@/store/reducers/event/eventPageReducer";
import userRelationshipReducer from "@/store/reducers/user/userRelationshipReducer";

const rootReducer = combineReducers({
    user: userReducer,
    userId: userIdReducer,
    page: pageReducer,
    post: postReducer,
    group: groupReducer,
    watch: watchReducer,
    media: mediaReducer,
    toggle: toggleReducer,
    message: messageReducer,
    eventList: eventPageReducer,
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