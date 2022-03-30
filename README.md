
# Aloha Push

**Aloha Push** is a real-time aloha pos ncr data collection service. Run minified processes, read dbf files and push data to firebase.


## Features

- 🔧 **Run bats and minified processes**
   Run grind processes minimized to generate dbf files containing all current data on the aloha server.
- 📈 **Read and process dbf files.**
   Reads Aloha files with a .dbf extension and processes the information to obtain: Net sales, gross sales, number of accounts, number of guests, account details, sales by category, sales by products and average ticket.
- ☁️ **Real time data synchronization with Firebase**
   Synchronize data to a non-relational database in real time.
- ⌛ **Customize execution intervals**
   Freely select the synchronization time interval.

   
## Installation

Install aloha-push with git

```
  git clone https://github.com/luisdavidcolina/alohapush
  cd alohapush
  npm install 
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`FIREBASE_APP_STORAGE`
`FIREBASE_API_KEY`
`FIREBASE_APP_ID`
`FIREBASE_APP_AUTH_DOMAIN`
`FIREBASE_APP_MESSAGING_SENDER`
`FIREBASE_APP_PROJECTID`
`FIREBASE_APP_DATABASE_URL`
`LOCALDIR`
`STORE`
`DISK`
`VERSION`

## Usage

```
npm run start

//or create windows service

npm install -g qckwinsvc
qckwinsvc
```


## Contributing

- [Fork](#)
- [Donate](https://paypal.me/luisdapaypal?country.x=PE&locale.x=es_XC)

