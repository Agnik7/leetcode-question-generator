import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getQuestionsFilePath = () => {
    if (process.platform === 'win32') {
        const username = os.userInfo().username;
        return path.join(`C:\\Users\\${username}\\AppData\\Roaming\\npm\\node_modules\\random-question\\bin\\questions.json`);
    } else {
        return path.join(`/usr/local/lib/node_modules/random-question/bin/questions.json`);
    }
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
