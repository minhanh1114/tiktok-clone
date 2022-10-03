import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as ListVideoService from '~/Services/videoListService';
import UserVideo from '~/components/UserVideo';

const cx = classNames.bind(styles);
function Home() {
    const bodyRef = useRef();
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchApi = async () => {
            const results = await ListVideoService.getListVideo('for-you', page);
            setVideos((prev) => [...prev, ...results]); // USE SPREAD JS ES6
        };
        fetchApi();
    }, [page]);
    const fetchMoreData = () => {
        setPage((prev) => prev + 1);
    };
    return (
        <div className={cx('wrapper')} ref={bodyRef}>
            <InfiniteScroll dataLength={videos.length} next={fetchMoreData} hasMore={true} loader={<h4>Loading...</h4>}>
                {videos.map((video, index) => (
                    <UserVideo key={index} data={video} />
                ))}
            </InfiniteScroll>
        </div>
    );
}

export default Home;
