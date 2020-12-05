import axios from "axios";
const BASEURL = "https://randomuser.me/api/?nat=us&inc=name,email,picture,phone&results=";

export default {
  getUsers: async function (resultsQty) {
    return await axios.get(BASEURL + resultsQty);
  },
};
