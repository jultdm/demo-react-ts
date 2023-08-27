export interface QuestionInterface {
    label: Array<string>,
    answers: Array<string>,
    rightAnswer: number,
    buttonLabel: string,
}

const questions: Array<QuestionInterface> = [
    {
        label: [
            "Peut-on utiliser xx xxxx xx xxxx",
            "dans les préparations salées et sucrées ?",
        ],
        answers: [
            "oui",
            "non",
        ],
        rightAnswer:0,
        buttonLabel: "QUESTION 2/3 >",
    },
    {
        label: [
            "Les recettes des xxxxx de xxxxx",
            "xxxx xxxxxxx sont-elles Vegan ?",
        ],
        answers: [
            "oui",
            "non",
        ],
        rightAnswer:0,
        buttonLabel: "QUESTION 3/3 >",
    },
    {
        label: [
            "Quel est xxxx xxxxxx",
            "pour le xxxxx xx xxxxxxx xxxx ?",
        ],
        answers: [
            "xxx xxxxx",
            "Bonne réponse",
            "xx xxxxx",
        ],
        rightAnswer: 1,
        buttonLabel: "VALIDER",
    },    
];

export default questions;