async function main() {
    const CoinbayNFT = await ethers.getContractFactory("coinbayNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const coinbayNFT = await CoinbayNFT.deploy()
    await coinbayNFT.deployed()
    console.log("Contract deployed to address:", coinbayNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  