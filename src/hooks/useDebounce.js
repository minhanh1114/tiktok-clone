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

//lần 2 khi giá trị trong input n thay đổi , n sẽ set lại searchText dẫn đến Component bị render, khi render lại
//2 là 1 kí tự dc gõ và xét lại searchText khi searchText bị thay đổi nên value trong bị thay đổi nên clearupFn vào hàm useDebounce()  và dc xét initState , chạy xuống useEffect -> callback đợi 500ms sau xét, nhưng nhập tiếp khiến Component bị render nên chạy vào
//ClearTimeout xóa bỏ lần trc đó đi,
// 3 nhập kí tứ tiếp theo nhưng dừng lại vẫn xét initState='' trước đó, chạy xuống useEffect -> callback đợi 500ms sau sẽ xét lên, nếu k gõ kí tự tiếp sẽ k bị render

//Trong hàm useDebounce, mỗi khi value trong mảng deps thay đổi thì clearnup function được gọi,
// nên sẽ clear timeout trước đó đi (huỷ những lần trước đi). Vì vậy, cho tới khi người dùng ngừng gõ 500ms API mới được gọi
