<h1>Dexplore</h1>
<p>This website is an attempt at creating a website out of my UI project of Dexplore from Vision.Figma Link:
  https://www.figma.com/design/5x9NgUdOKhEJN5FZ69b0rH/Dexplore?node-id=0-1&t=NJhTfU7NJvhzFND3-1
</p>
<p>
  It is a platform which acts as a Pokedex for your real world explorations and builds a online gamified profile of discoveries, more rare the discovery more experience you gain and can boast about your player tag or level amongst your friends.
  Just whenever you explore and find a new scene or specie just capture that discovery and upload on Dexplore and you unlock that discovery. Yayy!!!
</p>
<h3>
  Resources that were used to build this project:
</h3>
<p>
  Reactjs tutorial: https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3
</p>
  <p>HTML W3school : https://www.w3schools.com/html/</p>
 <p> JS W3school : https://www.w3schools.com/js/default.asp</p>
 <p> CSS W3school : https://www.w3schools.com/css/default.asp
</p>
<p>
  Claude AI for coding doubts, Chatgpt for image generation
</p>
<h3>
  Structure of Files and Folders:
</h3>
<p>
  So i started by creating a folder named SARCweb locally on my pc to contain all the files of this project 
</p>
<p>I then downloaded node.js from https://nodejs.org/en and installed it on my pc.This helps us to create and program Web projects using React</p>
<p>Now i opened the folder in the vscode and opened it in integrated terminal and then i gave the prompt</p>

```
npx create-react-app web
cd web
npm start
```
<p>After these set of commands we will get a template of React project within that web folder. And the website will be opened on the web browser.
</p>
<p>
  So currently the files looks like this:
</p>

```
SARCweb/
└── web/
    ├── public/
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── src/
    │   ├── assets/
    │   │   └── fonts/
    │   │       ├── dexplorelogo.png
    │   │       └── dexplorelogopng.png
    │   ├── components/
    │   │   ├── DiscoveryTile.css
    │   │   ├── DiscoveryTile.js
    │   │   ├── Navbar.css
    │   │   ├── Navbar.js
    │   │   ├── RarityBar.css
    │   │   └── RarityBar.js
    │   ├── data/
    │   │   ├── images/
    │   │   │   └── animals/
    │   │   │       ├── ashgif.gif
    │   │   │       ├── bg.jpg
    │   │   │       ├── bg2.png
    │   │   │       └── lock.png
    │   │   └── animals.js
    │   ├── pages/
    │   │   ├── Comingsoon.css
    │   │   ├── Comingsoon.js
    │   │   ├── Home.css
    │   │   ├── Home.js
    │   │   ├── Profile.css
    │   │   ├── Profile.js
    │   │   ├── Species.css
    │   │   └── Species.js
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── boiler.js
    │   ├── index.css
    │   ├── index.js
    │   ├── logo.svg
    │   ├── reportWebVitals.js
    │   └── setupTests.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```

<p>
  Here the package.json gives info about the dependencies.
</p>
<p>
  But the main folder is the src (source) folder. It contains all the code blocks files and other data.
</p>
<p>Inside it we originally have the App and index js and css files with some other things </p>
<p>
  But to make this project in a structured I created new folders for different purposes, which are : assets,components,data,pages.
</p>
<p>
  assets and data mostly contained the visual media such as logos, images & fonts.
</p>
<p>components and pages are the heart of the project. React helps us to create components and thus improves code reusability.</p>
<p>Pages contains the different sections of the websites which can be accessed from the navbar or from other buttons.
  Whereas Components contains Discovery Tile and Rarity Bar which was repeatedly used in Species page and Navbar just to distinguish it from other parts of the website as it stays permanent throughout the website.
</p>
<p>Altogether it was fun and productive building this website.</p>
