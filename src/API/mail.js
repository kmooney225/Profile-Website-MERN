// import axios from 'axios';

// export const SendEmail = async ({
//     name,
//     email,
//     message,
//     setSend,
//   }) => {
//     try {
//       const datas = { name, email, message };
//       let res = await axios.post(`http://localhost:5000`, datas);
//       if (res) {
//         setSend(res.data);
//       }
//     } catch (error) {
//       alert(error.response.data.message + " not working");
//     }
//   };