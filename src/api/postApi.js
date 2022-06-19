import axios from "axios";
const BASE_URL="http://localhost:4040"
function CallApi(endpoint,method="POST", body) {
  return axios({
    method: method,
    url: `${BASE_URL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}

export default CallApi;