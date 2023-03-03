## Ceasar Sound and Porodomo
[https://ceasar-pomodoro-sound-salad.netlify.app/](https://ceasar-pomodoro-sound-salad.netlify.app/)
Quick mini projects built with Reactjs. 

## Motivation
Job interview


## Getting Started
These instructions will guild you through the inital setting up process and 
highlight what the apps can do for you to explore on your own.   


## Notable feature
- Ceasar cipher encoding and decrypting
- Pomodoro timer
- Frequency calculation (coming soon)

## Sections
- Ceasar cipher section
- Pomodoro timer section
- Frequency calculation section


## Prerequisite
Nodejs installed for local running purpose    
check out Node installation instruction [here](https://nodejs.org/en/)  

## Installing and Running
Clone the repo
```
$ git clone https://github.com/zahego/ceasar-sound-porodomo.git
```
Run Node command to create node_modules folder from the information in package.json, which hold all the necessary dependencies
```
$ npm install
```
Run Node command for local testing
```
$ npm run start
```

## Technoloies stack
[React](https://reactjs.org/) - framework

## Some interesting issues along the way
- trouble hosting on Netlify. Due to the podoromo handle counter method
- trouble with setInterval in life cycle method useEffect. Issue was I create another setInterval method that override windows.setInterval. This is comedy gold
- unable to figure out the sound frequency part. I have the solution of using p5.FFT, which utilize Fast Fourier Transformation to calculate frequency, but to translate that to rpm, I still have no clues


## Contributors
Minh Tran 

## License
This project is licensed under the MIT License

## Acknowledgments
youtube videos and tutorials
