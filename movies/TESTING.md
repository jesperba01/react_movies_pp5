# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

During the development process of the React Movie App, thorough testing was conducted to ensure the functionality, compatibility, and responsiveness of the application across various devices and browsers. Below is a detailed summary of the testing procedures and outcomes:

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| movies | index.html | ![screenshot](documentation/wireframe/vhtml.png) | |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| movies || ![screenshot](documentation/wireframe/vcss.png) | |


## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home | Movies | TV | Favourites | Search | Notes |
| Chrome | ![screenshot](documentation/browsers/chrome-home5.png) | ![screenshot](documentation/browsers/chrome-topm.png) | ![screenshot](documentation/browsers/chrome-toptv.png) | ![screenshot](documentation/browsers/chrome-fav.png)  | ![screenshot](documentation/browsers/chrome-search.png) | Works as expected |
| Edge | ![screenshot](documentation/browsers/edge-home5.png) | ![screenshot](documentation/browsers/edge-mov.png) | ![screenshot](documentation/browsers/edge-fav.png) | ![screenshot](documentation/browsers/edge-fav.png) | ![screenshot](documentation/browsers/edge-search.png) | Works as expected |
| Safari | ![screenshot](documentation/browsers/safari-home5.png) | ![screenshot](documentation/browsers/safari-mov.png) | ![screenshot](documentation/browsers/safari-tv.png) | ![screenshot](documentation/browsers/safari-fav.png) | ![screenshot](documentation/browsers/safari-search.png) | Minor CSS differences |

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
| Home | ![screenshot](documentation/responsive/home-resp.png) | Works as expected |
| Movies | ![screenshot](documentation/responsive/moviepage-resp.png) | Works as expected |
| TV | ![screenshot](documentation/responsive/tvpage-resp.png) | Works as expected |
| Favourites | ![screenshot](documentation/responsive/favourites-resp.png) | Works as expected |
| Search | ![screenshot](documentation/responsive/search-resp.png) | Works as expected |

## Lighthouse Audit

| Page | Mobile | Desktop | Notes |
| Home | ![screenshot](documentation/lighthouse/home-mob5.png) | ![screenshot](documentation/lighthouse/home-desk5.png) | Some minor warnings about large images |
| Movies | ![screenshot](documentation/lighthouse/mov-mob5.png) | ![screenshot](documentation/lighthouse/mov-desk5.png) | Some minor warnings about large images |
| TV | ![screenshot](documentation/lighthouse/tv-mob5.png) | ![screenshot](documentation/lighthouse/tv-desk5.png) | Some minor warnings about large images |
| Favouties | ![screenshot](documentation/lighthouse/fav-mob5.png) | ![screenshot](documentation/lighthouse/fav-desk5.png) | Some minor warnings about large images |
| Search | ![screenshot](documentation/lighthouse/sea-mob5.png) | ![screenshot](documentation/lighthouse/sea-desk5.png) | No warnings |
|


## Bugs

**Fixed Bugs**

[![GitHub issue custom search](https://img.shields.io/github/issues-search?query=repo%3Ajesperba01%2Freact_movies_pp5%20label%3Abug&label=bugs)](https://github.com/jesperba01/react_movies_pp5/issues?q=is%3Aissue+is%3Aclosed+label%3Abug)

All previously closed/fixed bugs can be tracked [here](https://github.com/jesperba01/react_movies_pp5/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status | Solution |
| --- | --- |
| [Local storage showing null](https://github.com/jesperba01/react_movies_pp5/issues/1) | Closed | delete your local data ![screenshot](documentation/wireframe/bugs.png) |


**Open Issues**

[![GitHub issues](https://img.shields.io/github/issues/jesperba01/react_movies_pp5)](https://github.com/jesperba01/react_movies_pp5/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/jesperba01/react_movies_pp5)](https://github.com/jesperba01/react_movies_pp5/issues?q=is%3Aissue+is%3Aclosed)

Any remaining open issues can be tracked [here](https://github.com/jesperba01/react_movies_pp5/issues).


## Unfixed Bugs

> [!NOTE]  
> There are no remaining bugs that I am aware of.
