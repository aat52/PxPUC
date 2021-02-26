const toJSON = (resp) => resp.json();
const Api = {
  BASE_PATH: "/PxPUC",
  getLocations: () => {
    return fetch(`${Api.BASE_PATH}/locations`).then(toJSON);
  },
  getLocationQuestions: (lid) => {
    return fetch(`${Api.BASE_PATH}/location/${lid}/questions`).then(toJSON);
  },
  getLocationStages: (lid) => {
    return fetch(`${Api.BASE_PATH}/location/${lid}/stages`).then(toJSON);
  },
};
export default Api;
