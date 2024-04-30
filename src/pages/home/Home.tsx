import { useEffect, useState } from 'react';
import PlanCard from '../../components/PlanCard/PlanCard';

interface Plan {
  ai_addon: boolean;
  description: string;
  best_value: boolean;
  features: { description: string; hidden: boolean }[];
  name: string;
  price: number;
}

function Home() {
  const [plans, setPlans] = useState<Plan[]>([]);
  useEffect(() => {
    getPlans();
  }, []);

  const getPlans = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/plans');
      const data: Plan[] = await response.json();
      setPlans(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1>Make teamwork more productive</h1>
      <main className='cards-container'>
        {plans.map((plan, index) => (
          <PlanCard
            key={`${plan.name}.${index}`}
            name={plan.name}
            description={plan.description}
            price={plan.price}
            aiAddon={plan.ai_addon}
            features={plan.features}
            bestValue={plan.best_value}
          />
        ))}
      </main>
    </>
  );
}

export default Home;
