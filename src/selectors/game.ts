import { QuestionInterface } from "../data/questions";

export const areCorrectAnswers = (questions: Array<QuestionInterface>, answers: Array<number>) => {
    let correctAnswers = true;

    questions.forEach(
        (question, index) => {
            if (question.rightAnswer !== answers[index]){
                correctAnswers = false;
            }            
        }        
    );

    return correctAnswers;
}