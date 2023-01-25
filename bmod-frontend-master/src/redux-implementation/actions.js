import axios from "axios";
import * as actions from "./actionTypes";
import { REQUEST_URL } from "./constatntURLS";

export const checkAuthenticated = () => async (dispatch) => {
  dispatch({
    type: actions.AUTHENTICATED_START,
  });
  const config = {
    headers: {
      Accept: "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(REQUEST_URL + "welcome", config);
    console.log(res);
    dispatch({
      type: actions.AUTHENTICATED_SUCCESS,
    });
    dispatch(load_user());
    dispatch(getideas());
    dispatch(getusers());
  } catch (err) {
    dispatch({
      type: actions.AUTHENTICATED_FAIL,
      payload: err,
    });
    dispatch(getideas());
  }
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: actions.AUTHENTICATED_START,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(REQUEST_URL + `login`, body, config);
    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(load_user(true));
    dispatch(checkAuthenticated());
  } catch (error) {
    console.log(error, "error");
    dispatch({
      error: error.response,
      type: actions.LOGIN_FAIL,
    });
  }
};

export const load_user =
  (sign = false) =>
  async (dispatch) => {
    if (localStorage.getItem("token")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      };
      try {
        await axios.get(REQUEST_URL + `users/me/`, config).then((res) => {
          dispatch({
            type: actions.USER_LOADED_SUCCESS,
            payload: res.data,
          });
          if (sign) dispatch(setprofile(res.data.is_entreprenure));
        });
      } catch (err) {
        console.log(err, "this is error while loading user");
        dispatch({
          type: actions.USER_LOADED_FAIL,
        });
      }
    } else {
      dispatch({
        type: actions.USER_LOADED_FAIL,
      });
    }
  };

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: actions.LOGOUT,
  });
  console.log(localStorage.getItem("token"));
};
export const register =
  (
    first_name,
    last_name,
    profile,
    cnic,
    phone,
    is_entreprenure,
    email,
    password
  ) =>
  async (dispatch) => {
    dispatch({
      type: actions.AUTHENTICATED_START,
    });
    const form = new FormData();
    form.append("first_name", first_name);
    form.append("last_name", last_name);
    form.append("phone", phone);
    form.append("cnic", cnic);
    form.append("is_entreprenure", is_entreprenure);
    form.append("profile", profile);
    form.append("email", email);
    form.append("password", password);

    const config = {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
      },
    };
    await axios
      .post(REQUEST_URL + `register`, form, config)
      .then((res) => {
        dispatch(signin(email, password));
        dispatch({
          type: actions.SIGNUP_SUCCESS,
          payload: res.data,
        });
        // dispatch(load_user());
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.SIGNUP_FAIL,
        });
      });
  };

export const getideas = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": localStorage.getItem("token"),
    },
  };
  try {
    await axios.get(REQUEST_URL + `ideas`, config).then((res) => {
      dispatch({
        type: actions.GET_IDEA_SUCCESS,
        payload: res,
      });
    });
  } catch (err) {
    console.log(err, "this is error while getting user");
    dispatch({
      type: actions.GET_IDEA_FAIL,
    });
  }
};
export const addidea =
  (
    name,
    thumbnail,
    description,
    investment_percentage,
    legal_documentation,
    required_investment,
    video
  ) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const form = new FormData();
    form.append("name", name);
    form.append("description", description);
    form.append("thumbnail", thumbnail);
    form.append("investment_percentage", investment_percentage);
    form.append("legal_documentation", legal_documentation);
    form.append("required_investment", required_investment);
    form.append("video", video);

    const config = {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
        "x-access-token": localStorage.getItem("token"),
      },
    };
    await axios
      .post(REQUEST_URL + `idea`, form, config)
      .then((res) => {
        dispatch({
          type: actions.ADDED_IDEA_SUCCESS,
          payload: res,
        });
        // dispatch(load_user());
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.ADDED_IDEA_FAIL,
        });
      });
  };
export const getidea = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": localStorage.getItem("token"),
    },
  };
  try {
    await axios.get(REQUEST_URL + `ideas/${id}`, config).then((res) => {
      dispatch({
        type: actions.GET_SINGLE_IDEA_SUCCESS,
        payload: res.data,
      });
    });
  } catch (err) {
    console.log(err, "this is error while getting user");
    dispatch({
      type: actions.GET_SINGLE_IDEA_FAIL,
    });
  }
};
export const getinvestors = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": localStorage.getItem("token"),
    },
  };
  try {
    await axios.get(REQUEST_URL + `investors`, config).then((res) => {
      dispatch({
        type: actions.GET_INVESTORS_SUCCESS,
        payload: res.data,
      });
    });
  } catch (err) {
    console.log(err, "this is error while getting user");
    dispatch({
      type: actions.GET_INVESTORS_FAIL,
    });
  }
};

export const deleteidea = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
  };
  try {
    await axios.delete(REQUEST_URL + `deleteidea/${id}`, config).then((res) => {
      dispatch({
        type: actions.DELETE_IDEA_SUCCESS,
        payload: res.data,
      });
      dispatch(getideas());
    });
  } catch (err) {
    console.log(err, "this is error while getting user");
    dispatch({
      type: actions.DELETE_IDEA_FAIL,
    });
  }
};

export const updateprofile =
  (first_name, last_name, profile, cnic, phone, id) => async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    const form = new FormData();
    if (first_name !== "") form.append("first_name", first_name);
    if (last_name !== "") form.append("last_name", last_name);
    if (phone !== "") form.append("phone", phone);
    if (cnic !== "") form.append("cnic", cnic);
    if (profile !== "") form.append("profile", profile);

    const config = {
      headers: {
        "Content-Type": `multiparrt/form-data; boundary=${form._boundary}`,
        "x-access-token": localStorage.getItem("token"),
      },
    };
    await axios
      .patch(REQUEST_URL + `editprofile/${id}`, form, config)
      .then((res) => {
        dispatch({
          type: actions.EDITED_PROFILE_SUCCESS,
          payload: res.data,
        });
        dispatch(load_user());
      })
      .catch((error) => {
        dispatch({
          error: error,
          type: actions.EDITED_IDEA_FAIL,
        });
      });
  };

export const approveidea = (is_approved, id) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const body = JSON.stringify({ is_approved });
  // if (last_name !== "") form.append("last_name", last_name);
  // if (phone !== "") form.append("phone", phone);
  // if (cnic !== "") form.append("cnic", cnic);
  // if (profile !== "") form.append("profile", profile);

  const config = {
    headers: {
      "Content-Type": `application/json`,
      "x-access-token": localStorage.getItem("token"),
    },
  };
  await axios
    .patch(REQUEST_URL + `updateidea/${id}`, body, config)
    .then((res) => {
      dispatch({
        type: actions.EDITED_PROFILE_SUCCESS,
        payload: res.data,
      });
      dispatch(getideas());
      dispatch(getidea(id));
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.EDITED_IDEA_FAIL,
      });
    });
};

export const setprofile = (status) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  try {
    dispatch({ type: actions.SET_PROFILE_STATUS, payload: status });
  } catch (err) {
    console.log(err);
  }
};

export const getusers = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      // "x-access-token": localStorage.getItem("token"),
    },
  };
  try {
    await axios.get(REQUEST_URL + `users`, config).then((res) => {
      dispatch({
        type: actions.GET_USERS_SUCCESS,
        payload: res,
      });
    });
  } catch (err) {
    console.log(err, "this is error while getting users");
    dispatch({
      type: actions.GET_USERS_FAIL,
    });
  }
};

export const invest = (idea, invested) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const body = JSON.stringify({ idea, invested });

  const config = {
    headers: {
      "Content-Type": `application/json`,
      "x-access-token": localStorage.getItem("token"),
    },
  };
  await axios
    .post(REQUEST_URL + `invest`, body, config)
    .then((res) => {
      dispatch({
        type: actions.ADDED_IDEA_SUCCESS,
        payload: res.data,
      });
      // dispatch(load_user());
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.ADDED_IDEA_FAIL,
      });
    });
};

export const search = (name) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });

  const config = {
    headers: {
      "Content-Type": `application/json`,
    },
  };
  await axios
    .get(REQUEST_URL + `search/${name}`, config)
    .then((res) => {
      dispatch({
        type: actions.GET_SEARCH_SUCCESS,
        payload: res.data,
      });
      // dispatch(load_user());
    })
    .catch((error) => {
      dispatch({
        error: error,
        type: actions.GET_SEARCH_FAIL,
      });
    });
};
