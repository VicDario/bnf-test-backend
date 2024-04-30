import styles from './Accordion.module.css';
import { FaChevronDown } from "react-icons/fa";

interface AccordionProps {
  summary: string;
  details: string;
}

function Accordion({ summary, details }: AccordionProps) {
  return (
    <details className={styles['accordion-container']}>
      <summary className={styles['accordion__summary']}>{summary} <FaChevronDown className={styles.chevron} /></summary>
      <main className={styles['accordion__details']} dangerouslySetInnerHTML={{__html: details}}></main>
    </details>
  );
}

export default Accordion;
