# chargeback roundup landing page

dev installation:

1. install Parcel globally: `yarn global add parcel-bundler` or `npm install -g parcel-bundler`
2. `cd` into project folder and run `yarn` or `npm install`
3. run `parcel index.html` (apache must not be running locally) and go to http://localhost:1234 in browser
4. make changes as needed
5. for production build run `parcel build index.html --public-url ./`