import axios from "../axios/axios";

export function fetchAllSocialMedia(payload) {
  return (dispatch) => {
    if (payload) {
      dispatch({ type: "isLoading/socialMedia", payload: true });
      axios(`/aplikasi?pendiri=${payload}`)
        .then(({ data }) => {
          dispatch({ type: "fetchAll/socialMedia", payload: data });
        })
        .catch((err) => {
          dispatch({ type: "error/socialMedia", payload: err });
        })
        .finally((_) => {
          dispatch({ type: "isLoading/socialMedia", payload: false });
        });
    } else {
      dispatch({ type: "isLoading/socialMedia", payload: true });
      axios("/aplikasi")
        .then(({ data }) => {
          dispatch({ type: "fetchAll/socialMedia", payload: data });
        })
        .catch((err) => {
          dispatch({ type: "error/socialMedia", payload: err });
        })
        .finally((_) => {
          dispatch({ type: "isLoading/socialMedia", payload: false });
        });
    }
  };
}

export function addSocialMedia(payload) {
  return (dispatch) => {
    console.log(payload);
    axios
      .post("/aplikasi", payload)
      .then((result) => {
        console.log(result);
        return axios("/aplikasi");
      })
      .then(({ data }) => {
        dispatch({ type: "fetchAll/socialMedia", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "error/socialMedia", payload: err });
      });
  };
}

export function editSocialMedia(_id, payload) {
  return (dispatch) => {
    axios
      .put(`/aplikasi/${_id}`, payload)
      .then((result) => {
        console.log(result);
        return axios("/aplikasi");
      })
      .then(({ data }) => {
        dispatch({ type: "fetchAll/socialMedia", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "error/socialMedia", payload: err });
      });
  };
}

export function deleteSocialMedia(payload) {
  return (dispatch) => {
    axios
      .delete(`/aplikasi/${payload}`)
      .then((result) => {
        console.log(result);
        return axios("/aplikasi");
      })
      .then(({ data }) => {
        dispatch({ type: "fetchAll/socialMedia", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "error/socialMedia", payload: err });
      });
  };
}
