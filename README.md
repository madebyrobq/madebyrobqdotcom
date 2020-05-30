## I see you found my repository :)


## Setup

Create the React app:
    npm init react-app my-app

Setup GitHub pages
    cd my-app
    npm install gh-pages --save-dev

Setup package.json
    Set homepage
        "homepage": ______

    Add to "scripts": 
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    
## Run and deploy

npm start

npm run build

npm run deploy

## Configuring domain

https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain