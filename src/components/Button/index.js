import classNames from 'classnames/bind';
import Styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

function Button({
    to,
    href,
    children,
    className,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    medium = false,
    large = false,
    disable = false,
    lefticon = false,
    rightticon = false,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const Props = {
        onClick,
        ...passProps,
    };
    // remove event listeners when button is disable
    if (disable) {
        Object.keys(Props).forEach((key) => {
            if (key.startsWith('on') && typeof Props[key] === 'function') {
                // 1 cais Props (object) có 2 phần :( key, value) -> kiểm tra tên key là event , Props[key] : là value( gọi đến hàm đó )
                delete Props[key]; // xóa hàm đi
            }
        });
    }
    if (to) {
        // kiểm tra props truyền vào là 1 to (Link) thì thêm props to đó vào trong biến Props, thẻ Comp là Link
        Props.to = to;
        Comp = Link;
    } else if (href) {
        // Kiểm tra props truyền vào là 1 href thì chuyển thẻ đó thành thẻ a, và có props là đường dẫn
        Props.href = href;
        Comp = 'a';
    }
    console.log(className);
    return (
        <Comp
            className={cx('wrapper', {
                [className]: className,
                primary: primary,
                outline: outline,
                small: small,
                large: large,
                text: text,
                rounded: rounded,
                disable: disable,
                lefticon: lefticon,
                rightticon: rightticon,
            })}
            {...Props}
        >
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightticon && <span className={cx('icon')}>{rightticon}</span>}
        </Comp>
    );
}

export default Button;

// khi truyền biến vào cx khi thểm class dạng biến : tham số thứ 2 là object chỉ địng giá trí giá trị bên trong là true hoặc false ;
// var styles = {
//     foo: 'abc',
//     bar: 'def',
//     baz: 'xyz'
//   };

//   var cx = classNames.bind(styles);

//   var className = cx('foo', ['bar'], { baz: true }); // => "abc def xyz"
