import { Connection, Keypair, PublicKey } from "@solana/web3.js"
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor"
import { IDL, WbaPrereq } from "./programs/wba_prereq";
import wallet from "./dev-wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com");


//Register our github user
const github = Buffer.from("fraanfx", "utf8");

const provider = new AnchorProvider(connection, new Wallet(keypair), { commitment: "confirmed" });


//Create anchor program  to interact with program
const program: Program<WbaPrereq> = new Program(IDL, provider);

//Create PDA 
const enrollment_seeds = [Buffer.from("prereq"), keypair.publicKey.toBuffer()];
const [enrollment_key, _bump] = PublicKey.findProgramAddressSync(enrollment_seeds, program.programId);


//Interact with devnet and submit our data
(async () => {
    try {
      const txhash = await program.methods
        .complete(github)
        .accounts({
          signer: keypair.publicKey,
        })
        .signers([
          keypair
        ]).rpc();
      console.log(`Success! Check out your TX here:
  https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch (e) {
      console.error(`Oops, something went wrong: ${e}`)
    }
  })();

  //Success! Check out your TX here: https://explorer.solana.com/tx/qjoqbDg2XVpYcbLFjXAMHbWdCE3vWLwbkNHWyY7GfsKpMZCTPfM5YpBU1MRnHuhb7QgRU4BaZjcPc8bmuCjEsBy?cluster=devnet