import axios from "axios";

export const signUp = async (phone_number, firstname, lastname, role, language) => {
  return axios
    .post(`${process.env.FLASK_BACKEND_URL}/signup/phonenum=${phone_number}&firstname=${firstname}&{lastname=${lastname}&role=${role}&language=${language}`)
    .catch((err) => console.log(err));
};

