<h2 align="center">Aloha Push</h2>

**Aloha Push** is a real-time aloha ncr data collection service. Run minified processes, read dbf files and push data to firebase.

## Features:

- 🔧 **Run bats and minified processes**
  - Run grind processes minimized to generate dbf files containing all current data on the aloha server.
- 📈 **Read and process dbf files.**
  - Reads Aloha files with a .dbf extension and processes the information to obtain: Net sales, gross sales, number of accounts, number of guests, account details, sales by category, sales by products and average ticket.
- ☁️ **Real time data synchronization with Firebase**
  - Synchronize data to a non-relational database in real time.
- ⌛ **Customize execution intervals**
  - Freely select the synchronization time interval.


## Installation
```
git clone https://github.com/luisdavidcolina/alohapush
cd alohapush
npm install  

//create .env file with .env.example template

```

## Usage
```
npm run start

//or create windows service

npm install -g qckwinsvc
qckwinsvc

```

## Contribute

- [Fork](#)
- [Patreon](#)



## License

- See [LICENSE](#)

---