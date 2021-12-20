import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x267e3555546f925AEDb17df702E5CF4F5A6c884e");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule(
      {
        name: 'Fellowship of the Ring Governance Token',
        symbol: 'MITHRIL'
      }
    );
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch(error) {
    console.error('Failed to deploy token module', error)
  }
})()