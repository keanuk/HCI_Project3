The project cannot be hosted due to very recent policy changes in the Facebook API.
The workaround is not ideal, but otherwise we would need Facebook to approve our web app before accessing the API.
There is a hard-coded access token that needs to be periodically refreshed manually.


Prerequisites to running the app:

Browser: Google Chrome or Chromium
--Required for Facebook login--
Go to chrome://flags/#allow-insecure-localhost and enable the flag
In the project root directory run: npm run generate-ssl-certs
If that did not work, cd into scripts and run: ./gnerate-ssl-certs.sh
--Required for MongoDB--
Run mongodb in the background -  the steps involved depend on which OS you are running
  -On Ubuntu: service mongodb start
  -On Fedora: service mongod start


Run the project:

In project root directory: gulp
View it on https://localhost:3000 (the https is required)
