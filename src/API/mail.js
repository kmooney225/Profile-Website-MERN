import axios from 'axios';

export const SendEmail = async ({
    name,
    email,
    message,
    setSend,
  }) => {
    try {
      const datas = { name, email, message };
      let res = await axios.post(`https://kev-portfolio-website.herokuapp.com/`, datas);
      if (res) {
        setSend(res.data);
      }
    } catch (error) {
      alert(error.response.data.message + " not working");
    }
  };