import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";


const get_eam_list = async values => {
  let result = await httpClient.get(server.get_data_eam_list, values);
  return result;
};

 const find_emp_withCode = async values => {
  let result  =  await httpClient.post(server.find_emp_withCode,values);
  return result.data
}   


export default {
  get_eam_list,
  find_emp_withCode
};
