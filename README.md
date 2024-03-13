
<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][requirement-home-page]](https://example.com)

This project is my solution to a Stan TV frontend coding challenge.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

The key tech stack used in this project is Node.js, React, TypeScript, Webpack, Babel and Jest.

* [![React][React.js]][React-url]
* Node.js
* TypeScript
* Webpack
* Babel
* Jest


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

It is recommended that you install a later version of node.js. The version I used is v20.11.0 for your reference. If you are new to node.js,
check [Introduction to Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) and [Download Nodejs](https://nodejs.org/en/download) to learn how to install and use nodejs.

I would highly recommend you to use Visual Studio Code as your IDE. You can download [here](https://code.visualstudio.com/).
Besides, you might also want to install React VS Code extension.

Another essential tool you would want to get ready is [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?pli=1). You will find it very useful for debugging. Once installed correctly on Chrome browser, you should see 'Components' and 'Profiler' tabs.


### Installation

Below installation process is not a detailed instruction of how I scaffolded the project from scratch. Every configuration and tooling integration is already configured prior. This should be viewed as a simple step to setup the project locally and start develop in React. 

1. Clone the repo
   ```sh
   git clone https://github.com/JustinHu8/react-js-coding-challenge.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   You could also try using other package management tools, such as pnpm or yarn for practicing purpose.
3. Once all your npm libraries correctly installed in node_modules, you can run
   ```sh
   npm run start
   ```
   to load the project on localhost.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Test and Build

To test the project, you can run 
   ```sh
   npm run test
   ```
Due to time limit, there is no tests yet, but I may do some later :)

To build the project
   ```sh
   npm run build
   ```

<!-- Q & A -->
## Other Notes

### Technical and architectural choices
I would not say I have made some major technical or architectural.
The choices of tech stack is in the requirement. I did think about adding Redux and React Router in the mix, but they doens't seem to as important for the purpose of this project. To save time, I have decided to leave them out. 
The file and folder structure inside /src folder is a common convention I have seem very often and working well, so decided to use it directly.  

### improvements I wish to make
If I have more time I would write more unit tests.
There are a lot of fine tuning improvements can be done on webpack configuration to optimize the scripts, assets and building process.
Clean up CSS structure.
Rethinking and optimize component hierarchy.

### What would you do differently
Haha. There are too many aspect I wish I have time to detailing.
Probably the one that's most interesting is the carousel. 
Certainly, a lot of research and improvement can be made from performance and user experience perspective. Such as how to code it in a way that similiar to infinite scrolling. The first slider should show next once the user get to the very end of the slide. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTACT -->
## Contact

Justin Hu - justinhu-cg@msn.com

Project Link: [https://github.com/JustinHu8/react-js-coding-challenge](https://github.com/JustinHu8/react-js-coding-challenge)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->

[requirement-home-page]: docs/images/home.jpg
[requirement-program-page]: docs/images/program.jpg

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

