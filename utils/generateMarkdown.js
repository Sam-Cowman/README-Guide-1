const licenseNotices = {
  'MIT': 'This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/licenses/MIT) file for details.',
  'Apache 2.0': 'This project is licensed under the Apache License 2.0. See the [LICENSE](https://opensource.org/licenses/Apache-2.0) file for details.',
  'GNU General Public License': 'This project is licensed under the GNU General Public License v3.0. See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0) file for details.',
  'BSD 3-Clause License': 'This project is licensed under the BSD 3-Clause License. See the [LICENSE](https://opensource.org/licenses/BSD-3-Clause) file for details.',
  'ISC License': 'This project is licensed under the ISC License. See the [LICENSE](https://opensource.org/licenses/ISC) file for details.',
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // Define a map of license badges with their corresponding URLs
    const licenseBadges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GNU General Public License': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'BSD 3-Clause License': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
      'ISC License': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    };

    // Check if the license badge for the given license exists in the map
    if (licenseBadges[license]) {
      return licenseBadges[license];
    } else {
      return ''; // Return an empty string if badge for the license is not found
    }
  }
  return ''; // Return an empty string if no license is provided
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // Check if the license notice for the given license exists in the map
    if (licenseNotices[license]) {
      return `## License\n\n${licenseNotices[license]}`;
    } else {
      return ''; // Return an empty string if notice for the license is not found
    }
  }
  return ''; // Return an empty string if no license is provided
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${licenseSection ? '- [License](#license)\n' : ''}

## Installation {#installation}

${data.installation}

## Usage {#usage}

${data.usage}

## Credits {#credits}

${data.credits}

${licenseSection}
`;
}

module.exports = generateMarkdown;
