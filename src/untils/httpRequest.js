import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, // áp dụng môi trường(mặc định process.env) tạo ra url phục vụ khi phát triển, khi build cuối sẽ có thể sửa ...
    timeout: 1000,
});
export const get = async (url, option = {}) => {
    const response = await request.get(url, option);
    return response.data;
};
export default request;
