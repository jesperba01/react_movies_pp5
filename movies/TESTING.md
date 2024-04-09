# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

In this section, you need to convince the assessors that you have conducted enough testing to legitimately believe that the site works well.
Essentially, in this part, you should go over all of your project's features, and ensure that they all work as intended,
with the project providing an easy and straightforward way for the users to achieve their goals.

Feature-by-Feature Testing:

Go through each feature of your portfolio site and detail the testing process for each.

Explain the functionality and demonstrate how it aligns with the intended purpose. This could include:

- Navigation: Ensuring smooth transitions between pages, links directing to the correct destinations.
- Responsive Design: Checking for compatibility across various devices and screen sizes.
- Portfolio Display: Verifying that projects are properly showcased with accurate descriptions, images, and links.
- Contact Form: Testing the form submission process, ensuring the user receives a confirmation, and you receive the message.

User Experience Testing:

- Usability Testing: Have users (or simulated users) interact with the site and provide feedback. Document any issues encountered and the resolutions implemented.
- Accessibility Testing: Confirm compliance with accessibility standards (e.g., screen reader compatibility, proper alt text for images, keyboard navigation).

Compatibility Testing:

- Browser Compatibility: Testing on different browsers (Chrome, Firefox, Safari, Edge, etc.) to ensure consistent performance.
- Device Compatibility: Ensuring functionality across various devices (desktops, laptops, tablets, and mobile phones).
- Performance Testing (optional):
	- Speed and Load Testing: Tools like PageSpeed Insights or GTmetrix to check page load times and optimize where necessary.
	- Scalability Testing: Assess how the site handles increased traffic or usage.

Regression Testing:

After implementing fixes or updates, ensure that previous features and functionalities still work as intended. This prevents new changes from breaking existing features.

Documentation and Logs:

Maintain records of testing procedures, results, and any bugs encountered along with their resolutions. This helps demonstrate a systematic approach to testing and problem-solving.
User Feedback Incorporation:

If applicable, mention how user feedback has been taken into account and implemented to enhance the user experience.

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

## Code Validation

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

Use the space to discuss code validation for any of your own code files (where applicable).
You are not required to validate external libraries/frameworks, such as imported Bootstrap, Materialize, Font Awesome, etc.

**IMPORTANT**: You must provide a screenshot for each file you validate.

**PRO TIP**: Always validate the live site pages, not your local code. There could be subtle/hidden differences.

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| movies | index.html | ![screenshot](documentation/validation/path-to-screenshot.png) | |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| movies || ![screenshot](documentation/validation/path-to-screenshot.png) | |


## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home | Movies | TV | Favourites | Search | Notes |
| --- | --- | --- | --- | --- | --- |
| Chrome | ![screenshot](movies/documentation/browsers/chrome-home5.png) | ![screenshot](movies/documentation/browsers/chrome-topm.png) | ![screenshot](movies/documentation/browsers/chrome-toptv.png) | ![screenshot](movies/documentation/browsers/chrome-fav.png)  | ![screenshot](movies/documentation/browsers/chrome-search.png) | Works as expected |
| Edge | ![screenshot](movies/documentation/browsers/edge-home5.png) | ![screenshot](movies/documentation/browsers/edge-mov.png) | ![screenshot](movies/documentation/browsers/edge-tv.png) | ![screenshot](movies/documentation/browsers/safari-fav.png) | ![screenshot](movies/documentation/browsers/edge-search.png) | Works as expected |
| Safari | ![screenshot](movies/documentation/browsers/safari-home5.png) | ![screenshot](movies/documentation/browsers/safari-mov.png) | ![screenshot](movies/documentation/browsers/safari-tv.png) | ![screenshot](movies/documentation/browsers/safari-fav.png) | ![screenshot](movies/documentation/browsers/safari-search.png) | Minor CSS differences |

## Responsiveness

I've tested my deployed project on multiple devices using [ResponsiveViewer] and [GoFullPage] to check for responsiveness issues.

devices tested are: 
- (iPhone 8 Plus, 7 Plus, 6S Plus 413x736).
- (Galaxy S9, Note 8, S8 360x760).
- (iPad 768x1024) 
- (Nexus 10 800x1280)
- (iPad Pro 834x1112)
- (Laptop 3 1280x950)
- (iPhone XR, XS Max 414x896)
- (iPhone 8, 7, 6S, 6 375x667)
- (iPad Mini 768x1024)
- (Laptop 1 1440x900)

| page | Screenshot | Notes |
| --- | --- | --- |
| Home | ![screenshot](movies/documentation/responsive/home-resp.png) | Works as expected |
| Movies | ![screenshot](movies/documentation/responsive/moviepage-resp.png) | Works as expected |
| TV | ![screenshot](movies/documentation/responsive/tvpage-resp.png) | Works as expected |
| Favourites | ![screenshot](movies/documentation/responsive/favourites-resp.png) | Works as expected |
| Search | ![screenshot](movies/documentation/responsive/search-resp.png) | Works as expected |

## Lighthouse Audit

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](movies/documentation/lighthouse/home-mob5.png) | ![screenshot](movies/documentation/lighthouse/home-desk5.png) | Some minor warnings about large images |
| Movies | ![screenshot](movies/documentation/lighthouse/mov-mob5.png) | ![screenshot](movies/documentation/lighthouse/mov-desk5.png) | Some minor warnings about large images |
| TV | ![screenshot](movies/documentation/lighthouse/tv-mob5.png) | ![screenshot](movies/documentation/lighthouse/tv-desk5.png) | Some minor warnings about large images |
| Favouties | ![screenshot](movies/documentation/lighthouse/fav-mob5.png) | ![screenshot](movies/documentation/lighthouse/fav-desk5.png) | Some minor warnings about large images |
| Search | ![screenshot](movies/documentation/lighthouse/sea-mob5.png) | ![screenshot](movies/documentation/lighthouse/sea-desk5.png) | No warnings |
|

## User Story Testing

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

Testing user stories is actually quite simple, once you've already got the stories defined on your README.

Most of your project's **features** should already align with the **user stories**,
so this should as simple as creating a table with the user story, matching with the re-used screenshot
from the respective feature.

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/features/feature01.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/features/feature02.png) |
| As a new site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/features/feature03.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/features/feature04.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/features/feature05.png) |
| As a returning site user, I would like to ____________, so that I can ____________. | ![screenshot](documentation/features/feature06.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/features/feature07.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/features/feature08.png) |
| As a site administrator, I should be able to ____________, so that I can ____________. | ![screenshot](documentation/features/feature09.png) |
| repeat for all remaining user stories | x |

## Bugs

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

This section is primarily used for JavaScript and Python applications,
but feel free to use this section to document any HTML/CSS bugs you might run into.

It's very important to document any bugs you've discovered while developing the project.
Make sure to include any necessary steps you've implemented to fix the bug(s) as well.

**PRO TIP**: screenshots of bugs are extremely helpful, and go a long way!

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

- JS Uncaught ReferenceError: `foobar` is undefined/not defined

    ![screenshot](documentation/bugs/bug01.png)

    - To fix this, I _____________________.

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bugs/bug02.png)

    - To fix this, I _____________________.

- Python `'ModuleNotFoundError'` when trying to import module from imported package

    ![screenshot](documentation/bugs/bug03.png)

    - To fix this, I _____________________.

- Django `TemplateDoesNotExist` at /appname/path appname/template_name.html

    ![screenshot](documentation/bugs/bug04.png)

    - To fix this, I _____________________.

- Python `E501 line too long` (93 > 79 characters)

    ![screenshot](documentation/bugs/bug04.png)

    - To fix this, I _____________________.

### GitHub **Issues**


**Fixed Bugs**

[![GitHub issue custom search](https://img.shields.io/github/issues-search?query=repo%3Ajesperba01%2Freact_movies_pp5%20label%3Abug&label=bugs)](https://github.com/jesperba01/react_movies_pp5/issues?q=is%3Aissue+is%3Aclosed+label%3Abug)

All previously closed/fixed bugs can be tracked [here](https://github.com/jesperba01/react_movies_pp5/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status |
| --- | --- |
| [JS Uncaught ReferenceError: `foobar` is undefined/not defined](https://github.com/jesperba01/react_movies_pp5/issues/1) | Closed |
| [Python `'ModuleNotFoundError'` when trying to import module from imported package](https://github.com/jesperba01/react_movies_pp5/issues/2) | Closed |
| [Django `TemplateDoesNotExist` at /appname/path appname/template_name.html](https://github.com/jesperba01/react_movies_pp5/issues/3) | Closed |

**Open Issues**

[![GitHub issues](https://img.shields.io/github/issues/jesperba01/react_movies_pp5)](https://github.com/jesperba01/react_movies_pp5/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/jesperba01/react_movies_pp5)](https://github.com/jesperba01/react_movies_pp5/issues?q=is%3Aissue+is%3Aclosed)

Any remaining open issues can be tracked [here](https://github.com/jesperba01/react_movies_pp5/issues).


## Unfixed Bugs

> [!NOTE]  
> There are no remaining bugs that I am aware of.
