import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useElementOnScreen } from '~/hooks';
import { useRef, useState, useEffect, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCommentDots, faShare, faPlay, faVolumeUp, faPause } from '@fortawesome/free-solid-svg-icons';
import Volume from './Volume';
const cx = classNames.bind(styles);
function Video({ src, likeCount, commentCount, shareCount }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef();
    const handleClickPlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();

            setIsPlaying(true);
        }
    };
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
    };
    const isVisible = useElementOnScreen(options, videoRef);

    useEffect(() => {
        if (isVisible) {
            if (!isPlaying) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        } else {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    }, [isVisible]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video-container')}>
                <video className={cx('video')} ref={videoRef} loop>
                    <source src={src} />
                </video>
                <div className={cx('btn-play')} onClick={handleClickPlay}>
                    {!isPlaying ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
                </div>
                <Volume videoRef={videoRef} />
            </div>
            <div className={cx('action')}>
                <button className={cx('btn-action')}>
                    <span className={cx('icon-container')}>
                        <FontAwesomeIcon className={cx('icon-action')} icon={faHeart}></FontAwesomeIcon>
                    </span>
                    <strong>{likeCount}</strong>
                </button>
                <button className={cx('btn-action')}>
                    <span className={cx('icon-container')}>
                        <FontAwesomeIcon className={cx('icon-action')} icon={faCommentDots}></FontAwesomeIcon>
                    </span>
                    <strong>{shareCount}</strong>
                </button>
                <button className={cx('btn-action')}>
                    <span className={cx('icon-container')}>
                        <FontAwesomeIcon className={cx('icon-action')} icon={faShare}></FontAwesomeIcon>
                    </span>
                    <strong>{commentCount}</strong>
                </button>
            </div>
        </div>
    );
}

export default Video;
