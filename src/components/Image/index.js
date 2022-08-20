import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setfallback] = useState('');
    const onError = () => {
        setfallback(customFallBack);
    };
    console.log(className);
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

export default Image;
