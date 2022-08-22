import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handleDelay = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handleDelay);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
// lần đàu tiền là 1 chuỗi rỗng  sẽ chuỗi rỗng,
//2 là 1 kí tự dc chạy vào hàm useDebounce()  và dc xét initState , chạy xuống useEffect -> callback đợi 500ms sau xét, nhưng nhập tiếp khiến Component bị render nên chạy vào
//ClearTimeout xóa bỏ lần đơi xét trc,
// 3 nhập kí tứ tiếp theo nhưng dừng lại vẫn xét initState='' trước đó, chạy xuống useEffect -> callback đợi 500ms sau sẽ xét lên, gõ kí tự tiếp sẽ k bị render
