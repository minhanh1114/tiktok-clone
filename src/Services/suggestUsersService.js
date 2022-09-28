import * as httpRequest from '~/untils/httpRequest';
//search request
export const suggestUser = async (numPage, numPer_page) => {
    try {
        const res = await httpRequest.get(`/users/suggested`, {
            params: {
                page: numPage,
                per_page: numPer_page,
            },
        });
        return res.data; // chấm data chấm vào oject mà người cung cấp API định nghĩa ra
    } catch (error) {
        console.log(error);
    }
};
