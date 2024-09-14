# Turbin3 Builders Course

## Exercise 1

### Create a solana wallet and get some devnet founds from the faucet.

Create solana wallet public key + secret key with: 

- `yarn keygen`

The wallet created for the exercise:  
6J5hJx5LmCzgNRWRsvreCTCoTtVg3m777QAzMqYDsnb3

 Get some founds with: 

- `yarn airdrop`

The transaction requesting founds created: 
Success! Check out your TX here: [Airdrop proof](https://explorer.solana.com/tx/3Xxi2A9miULvu84PRqovvFbUZKqbCt2JK6YbT4HkohXBiv7FigFpmgqJpD3pY8PfdeQU8vNWxw1TqDy9S1REMcS1?cluster=devnet)

## Exercise 2 

### Create a script to transfer SOL balence from your wallet to another solana address with your wallet.

1. First of all set up the wallet you wallet from dev-wallet.json

2. Set your receiver address here: `const to = new PublicKey("<RECEIVER ADDRESS>");`



3. Run  `yarn transfer`

My transfer: 

Success! Check out your TX here: [Transfer](https://explorer.solana.com/tx/yWRbR2xcRSqhrN5q8nrpnixPwSKswzocb1C1T7xLbdayQuXwmj6aK2rm287tPt7jSApPhGMPt7FVYMtD76YXDvW?cluster=devnet)


## Exercise 3

### Interact with WBA program to "enroll" the course. Interact with WBA devnet solana programa and  include your github username as a participant.

1. Add next packages to work with the project version. The anchor version, web3.js version andrpc-websocket to work with anchor:


```
yarn add @coral-xyz/anchor@0.30.0
yarn add @solana/web3.js@1.91.8
yarn add rpc-websockets@7.11.0
```

2. Set your github username:

```
const github = Buffer.from("<your github account>", "utf8");
```


3. Run `yarn enroll` to complete the enrollment.


---
My enroll with fraanfx github user: 

  Success! Check out your TX here: [Proof enrollment link](https://explorer.solana.com/tx/qjoqbDg2XVpYcbLFjXAMHbWdCE3vWLwbkNHWyY7GfsKpMZCTPfM5YpBU1MRnHuhb7QgRU4BaZjcPc8bmuCjEsBy?cluster=devnet)