import { dataInfo } from '@components/Info/constants';
import styles from '../styles.module.scss';
function InfoCard(item) {
    const { containerInfoCard, contentCard } = styles;
    return (
        <div className={containerInfoCard}>
            <img src={item.src} alt={item.title} />
            <div >
                <span>{item.title}</span>
                <p>{item.description}</p>
            </div>
        </div>
    );
}

export default InfoCard;
