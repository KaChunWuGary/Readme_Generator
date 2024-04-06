// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseSectionLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title} 
          \n## Description\n${answers.describe} 
          \n## Table of Contents
            [Installation] (l_installation)
            [Usage] (l_usage)
            [License] (l_license)
            [Contribution] (l_contribution)
            [Testing] (l_testing)
            [Questions] (l_questions)
          \n## Installation <a id='l_installation'></a>\n${answers.installation}
          \n## Usage <a id='l_usage'></a>\n${answers.usage}
          \n## license <a id='l_license'></a>*****************NEED TO CHANGE\n${answers.license} 
          \n## Contribution <a id='l_contribution'></a>\n${answers.contribution}
          \n## Testing <a id='l_testing'></a>\n${answers.testing}

          \n## Questions <a id='l_questions'></a>
          \nUsername:${answers.username}
          \n[Link to Github](https://github.com/${answers.username})
          \nIf you have any questions, please email ${answers.email}
          
          `;
}

module.exports = {
  generateMarkdown,
  renderLicenseSectionLink,
  renderLicenseSection,
  renderLicenseBadge,
}