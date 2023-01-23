# New Word Scrapper
It's a program that collects data from the new world game. No less, no more, just collects data.
I created it to support the hard word of the small indie gaming studio, Amazon.

## How it works?
Before you can open a scrapper, you must have a game instance open with your character logged. If you want to scrap market information, you must first open the market GUI.

When you start the program, it will load data from the config.yml file and then start scrapping. The program simulates your mouse and keyboard to access the particular game GUI, then takes a screenshot and does an optical character recognition to scrape the data.

## Libs
The script is designed to be run via Node.js, it uses Robot.js to simulate your mouse and keyboard, and the Tesseract OCR for the optical character recognition.

## It is useable now?
This project is in the early development stage, so no it isn't.

## Where is the windows/mac version?
There isn't. Even if I wanted to create on, and I don't, I don't have windows/mac to test it.

## How to use?
1. Install node
<br> arch: `pacman -S nodejs`
<br> debian: `apt-install nodejs`
<br> mac: idk
<br> windows: idk

2. Install tesseract-ocr on your computer 
<br>arch: `pacman -S tesseract-ocr`
<br>debian: `apt-get install tesseract-ocr`
<br>mac: idk
<br>windows: idk

3. Download prebuild version
<br>I don't provide any prebuild version yet, so you need to build one yourself.

4. Create config.yml file
<br> arch: `touch config.yml`
<br> debian: `touch config.yml`
<br> mac: idk
<br> windows: idk

5. Run the scrapper
<br> `node ./main.js`

## Build
1. Install node
<br> arch: `pacman -S nodejs`
<br> debian: `apt-install nodejs`
<br> mac: idk
<br> windows: idk

4. Enable yarn
<br> `corepack enable`

5. Clone this repository <br>
`git clone https://github.com/AmonDeShir/new-world-scrapper` or just download zip package using git. 

7. Open it
<br> `cd new-world-scrapper`

6. Install dependencies
<br> `yarn`

7. Build
<br> `yarn build`

8. Done
<br> Your result files are in the build folder.

## Config
WIP

## Contributions
All contributions are welcomed.

1. Fork and clone the repo to your local machine
2. Create a new branch from `main` with a meaningful name for a new feature or an issue you want to work on: `git checkout -b your-meaningful-branch-name`
3. If you've added a code that should be tested, ensure the test suite still passes. `yarn test`
4. Try to write some unit tests. Your goal is 100% coverage.
5. Push your branch: `git push -u origin your-meaningful-branch-name`
6. Submit a pull request to the upstream animated-router-react repository.
7. Choose a descriptive title and describe your changes briefly.
