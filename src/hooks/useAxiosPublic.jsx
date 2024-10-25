
import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://192.168.0.112:5000"
});

const useAxiospublic = () => {
  return axiosPublic;
};

export default useAxiospublic;