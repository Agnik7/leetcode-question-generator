const parseArgs = (args) => {
    const parsedArgs = {};
    args.forEach(arg => {
        if (arg.startsWith('--')) {
            const [key, value] = arg.split('=');
            parsedArgs[key] = value ? value.trim() : true;
        }
    });
    return parsedArgs;
};

const showHelp = () => {
    console.log(`Usage: random-question [options]

Options:
  --easy              Filter questions by easy difficulty
  --medium            Filter questions by medium difficulty
  --hard              Filter questions by hard difficulty
  --version           Show version number
  --help              Show help`);
};

export { parseArgs, showHelp };
