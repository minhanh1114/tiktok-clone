import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setfallback] = useState('');
    const onError = () => {
        setfallback(customFallBack);
    };
    return (
        <>
            <img
                className={cx('wrapper', className)}
                src={fallBack || src}
                alt={alt}
                ref={ref}
                {...props}
                onError={onError}
            />
        </>
    );
});
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    customFallBack: PropTypes.string,
};

export default Image;
// thêm forwardRef : nếu k có n sẽ warning 'forwardRef' khi Tippy bao bên ngoài 1 component không có Ref. Vậy cần định nghĩa xác định element đó
// cách fix thêm forwardRef như trên
