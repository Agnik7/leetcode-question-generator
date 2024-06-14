# Contribution Guidelines

We appreciate your interest in contributing to the "leetCode-question-generator" repository! We welcome contributions from the community to enhance and expand our collection of Arduino code snippets, which can be valuable for your future IoT development projects.

Please take a moment to review these guidelines before you begin:

## Code of Conduct
Before making any contributions, we kindly request that you read and adhere to our [Code of Conduct](https://github.com/Agnik7/leetcode-question-generator/blob/main/CODE_OF_CONDUCT.md). We expect all contributors to follow these guidelines to maintain a positive and inclusive community.

## How to Contribute

1. Start by forking the repository to your personal GitHub account.
  
2. Clone the repository from your account to your local machine using the following command:
```bash
git clone https://github.com/your-username/leetcode-question-generator.git
```

3. Create a new branch for your work:
```bash
git checkout -b your-branch-name
```

4. Ensure that your branch is up-to-date with the `main` branch of the original repository.

5. If you wish to make changes to the existing code, simply move to the folder and change it.

6. If you wish to contribute a new question, follow these steps:
  - Navigate to the `bin/questions.json` file.
  - Insert the question at the very end of the file in the following structure:
    ```bash
        {
            "name": "<Problem Name>",
            "topic": "<Topics associated (separated by comma within a single string)>",
            "difficulty": "<Difficulty Level: 'Easy', 'Medium' or 'Hard'>",
            "link_id": "<The link_id of the problem>"
        }
    ```
    The link id of the problem is the segment of the problem URL that comes after `leetcode.com/` and before the `/description.` For example, if the problem is "Two Sum" and its link is `https://leetcode.com/problems/two-sum/description`, the link_id is `two-sum`.

7. Once you've made your additions, save your changes and run the following commands in your terminal:
    ```bash
    git add <files you wish to add>

    git commit -m "Provide a brief description of your changes here"

    git push -u origin branch_name
    ```

9. After committing your changes, you're ready to create a pull request.

10. Create a pull request from your branch to the `main` branch of the main repository and request the project maintainer to review your changes.

11. Your pull request will be merged once your changes are approved.

## Conclusion

We highly appreciate your contributions to the "leetCode-question-generator" repository. By adhering to these guidelines and collaborating with our community, you're helping us create a valuable resource for developers preparing for technical interviews.

Thank you for your dedication to enhancing this project. Your efforts play a vital role in making "leetCode-question-generator" a valuable resource for the programming community.

Happy coding!!!