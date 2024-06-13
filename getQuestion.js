import chalk from 'chalk';
import boxen from 'boxen';
import { getQuestionsFilePath, readQuestionsFile, readPackageJson } from './utils/file.util.js';
import { parseArgs, showHelp } from './utils/arg.util.js';

const getRandomQuestionLink = () => {
    const filePath = getQuestionsFilePath();
    const args = process.argv.slice(2);
    const parsedArgs = parseArgs(args);

    if (parsedArgs['--help']) {
        showHelp();
        return;
    }

    if (parsedArgs['--version']) {
        readPackageJson((err, packageJson) => {
            if (err) {
                console.error('Error reading package.json:', err);
                return;
            }
            console.log(`${packageJson.version}`);
        });
        return;
    }

    readQuestionsFile(filePath, (err, questions) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        if (parsedArgs['--easy']) {
            questions = questions.filter(question => question.difficulty === 'Easy');
        }

        if (parsedArgs['--medium']) {
            questions = questions.filter(question => question.difficulty === 'Medium');
        }

        if (parsedArgs['--hard']) {
            questions = questions.filter(question => question.difficulty === 'Hard');
        }

        if (questions.length === 0) {
            console.error('No questions found for the specified criteria.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];
        const questionName = randomQuestion.name;
        const questionTopic = randomQuestion.topic;
        const questionDifficulty = randomQuestion.difficulty;
        const questionLink = `https://leetcode.com/problems/${randomQuestion.link_id}/description`;

        const header = 'Here\'s your random question:';
        const name = `${chalk.bold('Name:')} ${questionName}`;
        const topic = `${chalk.bold('Topic:')} ${questionTopic}`;
        const difficulty = `${chalk.bold('Difficulty:')} ${questionDifficulty}`;
        const link = `${chalk.bold('Question Link:')} ${questionLink}`;
        const boxedOutput = boxen(`${header}\n\n${name}\n\n${topic}\n\n${difficulty}\n\n${link}`, { margin: 1, padding: 1 });

        console.log(boxedOutput);
    });
};

export default getRandomQuestionLink;
