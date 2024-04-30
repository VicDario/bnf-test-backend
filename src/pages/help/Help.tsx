import { useEffect, useState } from 'react';
import styles from './Help.module.css'
import Accordion from '../../components/Accordion/Accordion';

interface Question {
    question: string;
    answer: string;
}

function Help () {
    const [questions, setQuestions] = useState<Question[]>([]);
    useEffect(() => {
        getQuestions();
    }, [])

    const getQuestions = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/help');
            const data: Question[] = await response.json();
            setQuestions(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <h1 className='text-center'>Frequently asked questions</h1>
        <section className={styles['questions-container']}>
            {questions.map((question, index) =>
                <Accordion summary={question.question} details={question.answer} key={`${question.question}-${index}`} />
            )}
        </section>
        </>
    )
}

export default Help;