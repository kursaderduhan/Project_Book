# Near-Project-Book

This project is a simple projectstore on Near blockchain. Users can post their ideas, review ideas and donate to the owner if they want. <br/>

You can watch this video for use. [loom video](https://www.loom.com/share/f279ccd9fe6d4022b80cb66c85ce7980)


## Installation 

```bash
git clone https://github.com/kursaderduhan/Project_Book.git
cd Project_Book
yarn
```

## How to Use Projectbook Smart Contract

First login to your account using near cli.

```bash
near login
```

Build and deploy the smart contract.

```bash
yarn build:release
near dev-deploy ./build/release/singleton.wasm
````

Export the development account to the $CONTRACT

```bash
export CONTRACT=<YOUR_DEV_ACCOUNT_HERE>
```
---

Create a Idea.

```bash
near call $CONTRACT addIdea '{"idea": "Car_Rental"}' --accountId <Your_Testnet_Account_Here>
```

List All Ideas.

```bash
near view $CONTRACT getIdeas
```

Call Idea With Id.

```bash
near view $CONTRACT getIdea '{"id": "<Project_ID_here>"}'
```

Donate To The Owner Of The Idea.

```bash
near call $CONTRACT donation '{"idea": "<project_id_here>"}' --accountId <your_testnet_account_here> --amount 2


