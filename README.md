# Ethereum-Arbitrum-Bridge

This repository contains a proof of concept (**POC**) for a simple bridge between **Ethereum's Layer 1** and **Arbitrum's Layer 2 blockchains**. It is designed for testing purposes and should be first tried on a testnet. The code is functional but not production-ready.

Once the application is started, it will initiate the transaction from Layer 1 to Layer 2 Blockchain.

The code is written in **TypeScrypt** and translated to **JavaScript** using **TypeScript Compiler**.

## Prerequisites
To work with this POC, you'll need:

 - The URLs for both Ethereum and Arbitrum Nodes. These nodes can be either private or public.
 - A private key of an Ethereum wallet that contains some coins for testing purposes.

## Getting Started

### Install Dependencies
Firstly, you'll need to install the following dependency:
```
yarn add @arbitrum/sdk
```

### Start the Application
You can start the application by running:

```
node main.js
```

## License
This project is open-source and available under the MIT License. See the LICENSE file for more info.
