import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xfbA910E92cF33578C73aC04Eb5e1c3C87DC601fC",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'Fellowship of the Ring Membership',
        description: 'A DAO for supporting the ring bearers.',
        image: readFileSync("scripts/assets/ring.gif"),
      }
    ]);
    console.log('NFT created in the drop!!')
  } catch(error) {
    console.error('Failed to create the new NFT', error)
  }
})()