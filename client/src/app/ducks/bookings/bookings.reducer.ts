import { Action } from '@ngrx/store';
import { types } from './bookings.types';

// Initial State values
export const initialState: any = {
    isLoading: false,
    lastUpdated: Date.now(),
    id: null,
    data: [],
    form: null,
    view: null
};

/**
 * [bookingsReducer description]
 * @method  bookingsReducer
 * @author jackfiallos
 * @version [version]
 * @date    2017-10-28
 * @param   {any = initialState} state [description]
 * @param   {any} action [description]
 * @return  {[type]} [description]
 */
export function bookingsReducer(state: any = initialState, action: any) {
    switch (action.type) {
        // LIST_BOOKINGS
        case types.LIST_BOOKINGS:
            return Object.assign({}, state, {
                ...state,
                isLoading: true,
                lastUpdated: Date.now(),
                data: []
            });
        case types.LIST_BOOKINGS_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                lastUpdated: Date.now(),
                data: action.payload
            });
        case types.LIST_BOOKINGS_FAILURE:
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                lastUpdated: Date.now(),
                data: [],
                error: action.error
            });
        // GET_BOOKINGS
        case types.GET_BOOKINGS:
            return Object.assign({}, state, {
                ...state,
                isLoading: true,
                lastUpdated: Date.now(),
                id: action.uid
            });
        case types.GET_BOOKINGS_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                lastUpdated: Date.now(),
                view: action.payload
            });
        case types.GET_BOOKINGS_FAILURE:
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                lastUpdated: Date.now(),
                view: {},
                error: action.error
            });
        // CREATE BOOKINGS
        case types.CREATE_BOOKINGS:
            return Object.assign({}, state, {
                ...state,
                isLoading: true,
                lastUpdated: Date.now(),
                form: action.payload
            });
        case types.CREATE_BOOKINGS_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                lastUpdated: Date.now(),
                saved: action.payload
            });
        case types.CREATE_BOOKINGS_FAILURE:
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                lastUpdated: Date.now(),
                saved: null,
                error: action.error
            });
        // UPDATE BOOKINGS
        case types.UPDATE_BOOKINGS:
            return Object.assign({}, state, {
                ...state,
                isLoading: true,
                lastUpdated: Date.now()
            });
        case types.UPDATE_BOOKINGS_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                lastUpdated: Date.now()
            });
        case types.UPDATE_BOOKINGS_FAILURE:
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                lastUpdated: Date.now()
            });
        default:
            return state;
    }
}
