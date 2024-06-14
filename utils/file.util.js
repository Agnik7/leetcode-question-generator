import fs from 'fs';
import path from 'path';
import os from 'os';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { exec } from 'child_process';
const execAsync = promisify(exec);
const getQuestionsFilePath = async() => {
    const { stdout } = await execAsync('npm root -g');
    const packageRoot = stdout.trim();
    const questionsFilePath = path.join(packageRoot, 'lc-gen', 'bin', 'questions.json');
    return questionsFilePath;
};

const readQuestionsFile = (filePath, callback) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, JSON.parse(data));
    });
};

const readPackageJson = (callback) => {
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    fs.readFile(packageJsonPath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, JSON.parse(data));
    });
};

export { getQuestionsFilePath, readQuestionsFile, readPackageJson };
