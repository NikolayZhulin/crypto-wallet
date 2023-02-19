import React from 'react'

import { MainInfo } from '../../components/MainInfo'
import { StatsBlock } from '../../components/StatsBlock'

export const HeadSection = () => {
  // const { account, activateBrowserWallet } = useEthers()
  // const connectToMetamask = () => {
  //   activateBrowserWallet()
  // }

  return (
    <div style={{ marginBottom: '110px' }}>
      <div
        style={{ display: 'flex', justifyContent: 'end', position: 'fixed', marginBottom: '200px' }}
      >
        {/*<PrimaryButton title={account ? account : 'CONNECT METAMASK'} onClick={connectToMetamask} />*/}
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginTop: '200px',
        }}
      >
        <MainInfo />
        <StatsBlock />
      </div>
    </div>
  )
}
