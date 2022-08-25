import * as httpRequest from '~/untils/httpRequest';
export const search = async (query, type = 'less') => {
    try {
        const res = await httpRequest.get(`/users/search`, {
            // khi await xong mới chạy xuống
            params: {
                q: query,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
