import * as httpRequest from '~/untils/httpRequest';
export const search = async (query, type = 'less') => {
    try {
        const res = await httpRequest.get(`/users/search`, {
            params: {
                q: query,
                type,
            },
        });
        return res.data; // chấm data chấm vào oject mà người cung cấp API định nghĩa ra
    } catch (error) {
        console.log(error);
    }
};
