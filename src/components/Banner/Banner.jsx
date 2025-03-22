import Button from '@components/Button/Button';
import styles from './styles.module.scss';
function Banner() {
    const { container, containerContent, content, contentH1, contentDescription, contentBtn } = styles;
    return (
        <div className={container}>
            <div className={containerContent}>
                <div className={content}>
                    <h1 class={contentH1}>XStore Marseille04 Demo</h1>
                    <div className={contentDescription}>Make yours celebrations even more special this years with beautiful.</div>
                    <Button content='Go to shop' className={contentBtn} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
