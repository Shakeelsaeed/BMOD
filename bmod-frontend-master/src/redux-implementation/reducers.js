import * as actions from "./actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  error: null,
  user: null,
  loading: false,
  group: {},
  groupsList: [],
  account: {},
  accountsList: [],
  wheatPurchase: {},
  wheatSale: {},
  cottonPurchase: {},
  cottonSale: {},
  product: {},
  generalVoucher: {},
  balanceSheet: [],
  ideas: [],
  idea: {},
  is_entreprenure: true,
  users: [],
  search: [],
  postedidea: null,
  investors: [],
  approved: false,
};

export function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.AUTHENTICATED_START:
      return {
        error: null,
        loading: true,
      };

    case actions.SET_PROFILE_STATUS:
      return {
        ...state,
        loading: false,
        is_entreprenure: payload,
      };
    case actions.GET_INVESTORS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        investors: null,
      };

    case actions.GET_INVESTORS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        investors: payload.data,
      };
    case actions.GET_IDEA_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        ideas: null,
      };

    case actions.GET_IDEA_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        ideas: payload.data,
      };
    case actions.APPROVE_IDEA_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        approved: false,
      };

    case actions.APPROVE_IDEA_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        approved: true,
      };

    case actions.GET_USERS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        users: null,
      };

    case actions.GET_USERS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        users: payload.data,
      };

    case actions.ADDED_IDEA_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        postedidea: null,
      };

    case actions.ADDED_IDEA_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        postedidea: payload,
      };

    case actions.GET_SINGLE_IDEA_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        idea: null,
      };

    case actions.GET_SINGLE_IDEA_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        idea: payload,
      };
    case actions.EDITED_PROFILE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case actions.EDITED_IDEA_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
      };

    case actions.DELETE_IDEA_SUCCESS:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case actions.DELETE_IDEA_FAIL:
      return {
        ...state,
        error: null,
        loading: false,
        idea: payload,
      };
    case actions.GET_SEARCH_SUCCESS:
      return {
        ...state,
        search: payload.data,
        loading: false,
        error: null,
      };
    case actions.GET_SEARCH_FAIL:
      return {
        ...state,
        search: false,
        loading: false,
        error: action.error,
      };
    case actions.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case actions.AUTHENTICATED_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.error,
      };
    case actions.LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      // localStorage.setItem("refresh", payload.refresh_token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
        user: payload.user,
        token: payload.token,
        // refresh: payload.refresh,
      };
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case actions.USER_LOADED_SUCCESS:
      localStorage.setItem("userInformation", JSON.stringify(payload))
      return {
        ...state,
        user: payload,
      };
    case actions.USER_LOADED_FAIL:
      localStorage.removeItem("userInformation")
      return {
        ...state,
        user: null,
      };
    case actions.SIGNUP_FAIL:
    case actions.LOGIN_FAIL:
    case actions.LOGOUT:
      return {
        ...state,
        loading: false,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.error,
      };

    default:
      return state;
  }
}
