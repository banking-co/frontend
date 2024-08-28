# Banking Game Frontend

## Warning
1. Currently, all work with the WebSocket API is adapted for development with a static IP address. It is necessary to show the service to people!
2. You will not be able to launch the service without vk-sign key!

## Requirements
1. Node 20.13.x 
2. Usage npm

## Install
1. Set ```.env```
2. Run ```npm i```
3. Run ```npm run dev```
4. Set backend URL in ```apiUrl``` ```ws://localhost:3000```
5. Set in ```devtools > application > localStorage```: ```app-dev-sign: <your-vk-sign>```

### CI/CD
In the future, production will move to Docker + GitHub Pages. Currently, CI/CD provides timeweb.cloud