import axios from "axios";


const axoisPublic = axios.create({
  baseURL: 'https://radiance-education-server.vercel.app'
})

const useAxoisPublic = () => {
  return axoisPublic;
};

export default useAxoisPublic;