# KanjiGuesser

KanjiGuesser is a simple application to test your kanji skills. The project is still in it's early stages, which means that a lot of things lack perfection.

I allow any individual/organization the permission to fork the project. 
If a fork is made, a reference to me would be appreciated, but not a must. 

This is just a personal project, which means that updates/changes may occur spontaneously, and the project may reach a permanent standstill at any point.


## Instructions

### Debian based Linux distributions
For this section, run commands without the " ". <br>
Prior to beginning the first step, please update your repositories. On Debian based distributions, this can be done with either:
"sudo apt update", or "sudo apt-get update".


The application is built using NodeJS and Electron, first we need to install the latest version of NodeJS(3 steps): <br>
1: "sudo apt install curl" <br>
2: "curl -sL https://deb.nodesource.com/setup_17.x | sudo -E bash -"<br>
3: "sudo apt-get install -y nodejs"


If you do not already have the latest npm version installed, install it with:
"sudo npm install npm@latest -g"


Then we need to intall electron with the following command(root of program(path/to/KanjiGuesser)):
"npm install electron"


If the compiler complains about libgconf-2.so.4, type: "sudo apt-get install libgconf-2-4"


Once the npm packages have been installed, locate the root directory of the project (Path/To/KanjiGuesser/), 
and type the following to start the program: "npm start". 

## Appreciations to

davidluzgouveia [https://github.com/davidluzgouveia] for providing the Kanji JSON API (kanji-data [https://github.com/davidluzgouveia/kanji-data])


## MIT License

    Copyright © 2022 RobbanGit

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
    documentation files (the “Software”), to deal in the Software without restriction, including without limitation the
    rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of
    the Software.

    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
    THE USE OR OTHER DEALINGS IN THE SOFTWARE.
