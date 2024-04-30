import styles from './PlanCard.module.css';

interface PlanCardProps {
    name: string;
    description: string;
    price: number;
    features: {description: string, hidden: boolean}[];
    aiAddon: boolean;
    bestValue: boolean;
}

function PlanCard ({ name, description, price, features, aiAddon, bestValue }: PlanCardProps) {
    return (
        <article 
            className={`
                ${styles['card-container']}
                ${bestValue ? styles['card__best-value'] : ''
            }`
        }>
            <div className={styles['card__top']}>
                <div>
                    <h3 className={styles.card__title}>{ name }</h3>
                    <p className={styles.card_description}>{ description }</p>
                </div>

                    { price >= 0 && 
                        <div className={styles['card__price']}>
                            <span>${ price }</span>
                            <span>USD/mo</span>
                       </div> 
                    }
                <div className={`${styles['card__addon']} font-bold`}>
                    { aiAddon && <p>Slack AI add-on available</p> }
                </div>
            <a className={`
                button
                ${bestValue ? 'button-purple' : 'button-white'}
                `}
            >
                Get Started
            </a>
            </div>
            { bestValue &&
                <div className={styles['card__best-value__top']}>
                    <p>Best Value</p>
                </div>
            }
            <ul className={styles['card__features']}>
                { features.map((feature, index) => 
                    <li key={`${name}-${index}`} className={`${feature.hidden ? styles['feature-hidden']: ''}`}>
                        { feature.description }
                    </li>)
                }
            </ul>
        </article>
    )
}

export default PlanCard;