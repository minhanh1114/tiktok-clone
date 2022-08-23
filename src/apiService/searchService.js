import * as request from '~/untils/request';
export const search = async (query, type = 'less') => {
    try {
        const res = await request.get(`/users/search`, {
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
