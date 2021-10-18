import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi'
import { bingNewsApi } from '../services/bingNewsApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [bingNewsApi.reducerPath]: bingNewsApi.reducer,
    }
});