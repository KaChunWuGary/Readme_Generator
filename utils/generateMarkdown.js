// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeAndLink(license) {
  if (license == "none"){
    return "";
  }
  if (license == "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license == "Open Database License"){
    return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
  }
  if (license == "Mozilla Public License 2.0"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (license == "GNU Affero General Public License 3.0"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none"){
    return "";
  }
  if (license == "MIT"){
    return "[![License: MIT](https://opensource.org/licenses/MIT)"
  }
  if (license == "Open Database License"){
    return "[![License: ODbL](https://opendatacommons.org/licenses/odbl/)";
  }
  if (license == "Mozilla Public License 2.0"){
    return "[![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)";
  }
  if (license == "GNU Affero General Public License 3.0"){
    return "[![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const badge = renderLicenseBadgeAndLink(`${answers.license}`);
  return `# ${answers.title} 
          \n${badge}
          \n## Description\n${answers.describe} 
          \n## Table of Contents
          \n[Installation](#l_installation)
          \n[Usage](#l_usage)
          \n[License](#l_license)
          \n[Contribution](#l_contribution)
          \n[Testing](#l_testing)
          \n[Questions](#l_questions)
          \n## Installation <a id='l_installation'></a>\n${answers.installation}
          \n## Usage <a id='l_usage'></a>\n${answers.usage}
          \n## License <a id='l_license'></a>
          \nAll code and assets used are under the ${badge} and open to the public domain unless specified otherwise.
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
  renderLicenseSection,
  renderLicenseBadgeAndLink,
}