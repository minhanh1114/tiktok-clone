import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import styles from '../Video.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
const cx = classNames.bind(styles);
function Volume({ videoRef }) {
    const [inputValue, setInputValue] = useState(100);
    const [volume, setVolume] = useState(1);
    const volumeRange = useRef();

    const handleInput = (e) => {
        setInputValue(e.target.value);
        //ui
        let volume = volumeRange.current.value;
        volumeRange.current.style.backgroundSize = `${volume}% 100%`;
    };
    const handleMute = () => {
        if (inputValue === 0) {
            setInputValue(100);
        } else {
            setInputValue(0);
        }
    };
    useEffect(() => {
        setVolume(inputValue / 100);
        // volumeRange.current.value = inputValue;
        videoRef.current.volume = inputValue / 100;
    }, [inputValue, videoRef]);

    return (
        <Tippy
            visible
            offset={[0, -5]}
            interactive
            render={(attrs) => (
                <div className={cx('volume-container')} tabIndex="-1" {...attrs}>
                    <p className={cx('volume-item')}>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            id="progress"
                            ref={volumeRange}
                            value={inputValue}
                            onInput={handleInput}
                            style={{ backgroundSize: '100% 100%' }}
                        />
                    </p>
                </div>
            )}
        >
            <div className={cx('btn-volume')} onClick={handleMute}>
                <FontAwesomeIcon icon={volume !== 0 ? faVolumeUp : faVolumeMute} />
            </div>
        </Tippy>
    );
}

export default Volume;
