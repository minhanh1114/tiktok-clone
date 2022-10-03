import classNames from 'classnames/bind';
import styles from './UserVideo.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { MusicIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Video from '~/components/Video';

const cx = classNames.bind(styles);
function UserVideo({ data }) {
    console.log(data);
    return (
        <div className={cx('wrapper')}>
            <Link to={`/@${data.user.nickname}`}>
                <Image src={data.user.avatar} alt={data.user.nickname} className={cx('imgUser')} />
            </Link>
            <div className={cx('info')}>
                <div className={cx('info-user')}>
                    <Link to={`/@${data.user.nickname}`}>
                        <span className={cx('nickname')}>{data.user.nickname}</span>

                        {!data.user.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                        <span className={cx('name')}>{data.user.first_name + ' ' + data.user.last_name}</span>
                    </Link>
                    <p>{data.description}</p>
                    <p className={cx('music-song')}>
                        <MusicIcon width="16px" height="16px" />
                        <span className={cx('name-music')}>
                            {'nhạc nền - ' + data.user.first_name + ' ' + data.user.last_name}
                        </span>
                    </p>
                    <Button outline small className={cx('button-follow')}>
                        Follow
                    </Button>
                    {/* video */}
                    <div>
                        <Video
                            src={data.file_url}
                            likeCount={data.likes_count}
                            commentCount={data.comments_count}
                            shareCount={data.shares_count}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserVideo;
