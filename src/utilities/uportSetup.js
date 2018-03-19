import { Connect, SimpleSigner } from 'uport-connect'

const uport = new Connect('AIT',{
  clientId: '2ozo1SznXHTQTvf1RhgLGegpx6w5LVXsRQ9',
  signer: SimpleSigner('734dfdf5582fd3583a3d38857e05a66913ef46cc5dedb2dc84a404e6b8817148')
})

const web3 = uport.getWeb3()
export { web3, uport }
