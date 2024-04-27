import './PlanCard.css';

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
        <section className='plan-card'>
            <h4>{ name }</h4>
            <p>{ description }</p>

            <div className='price'>
                <span>${ price }</span>
                <span>USD/mo</span>
            </div>
            <div className='plan-card__addon'>
                { aiAddon && <p>Salck AI add-on available</p> }
            </div>
            <a className={`button ${bestValue ? 'button-purple' : 'button-white'} text-uppercase`}>Get Started</a>
            <div>
                <ul>
                    { features.map((feature, index) => 
                        <li key={`${name}-${index}`} className={`${feature.hidden ? 'feature-hidden': ''}`}>
                            { feature.description }
                        </li>)
                    }
                </ul>
            </div>
        </section>
    )
}

export default PlanCard;