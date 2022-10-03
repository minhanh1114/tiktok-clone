import * as httpRequest from '~/untils/httpRequest';
//search request
export const getListVideo = async (type, page) => {
    try {
        const res = await httpRequest.get(`/videos`, {
            params: {
                type: type,
                page: page,
            },
        });
        return res.data; // chấm data chấm vào oject mà người cung cấp API định nghĩa ra
    } catch (error) {
        console.log(error);
    }
};
