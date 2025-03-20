import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cart3.svg';
import reloadIcon from '@icons/svgs/arrow-repeat.svg';

function MyHeader() {
    const { containerBoxIcon, containerMenu, containerHeader, containerBox } =
        styles;
    return (
        <div className={containerHeader}>
            <div className={containerBox}>
                <div className={containerBoxIcon}>
                    {dataBoxIcon.map((item) => {
                        return <BoxIcon type={item.type} href={item.href} />;
                    })}
                </div>
                <div className={containerMenu}>
                    {dataMenu.slice(0, 3).map((item) => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
            </div>
            <div>
                <img
                    src={Logo}
                    alt='logo'
                    style={{ width: '153px', height: '53px' }}
                />
            </div>
            <div className={containerBox}>
                <div className={containerMenu}>
                    {dataMenu.slice(3, dataMenu.length).map((item) => {
                        return <Menu content={item.content} href={item.href} />;
                    })}
                </div>
                <div className={containerBoxIcon}>
                    <img style={{ marginLeft: '10px' }} width={30} height={30} src={reloadIcon} alt='reload' />
                    <img style={{ marginLeft: '10px' }} width={23} height={23} src={heartIcon} alt='heart' />
                    <img style={{ marginLeft: '10px' }} width={23} height={23} src={cartIcon} alt='cart' />
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
