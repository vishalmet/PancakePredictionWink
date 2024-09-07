import { ChainId } from '@pancakeswap/chains'
import { useReadContract } from '@pancakeswap/wagmi'
import { chainlinkOracleABI } from '../abis/oracleabi.js'
import { useMemo } from 'react'
import { Address } from 'viem'
import { useGaletoOraclePrice } from './useGaletoOraclePrice.js'



const usePollOraclePrice = ({ chainlinkOracleAddress, galetoOracleAddress }) => {
  const  chainId  = ChainId.BSC

  const shouldFetchGaletoPrice = useMemo(
    () => Boolean(galetoOracleAddress && chainId === ChainId.BSC),
    [galetoOracleAddress, chainId],
  )

  const { data: chainlinkOraclePrice = 0n, refetch: refetchChainlinkOraclePrice } = useReadContract({
    abi: chainlinkOracleABI,
    address: chainlinkOracleAddress,
    functionName: 'latestAnswer',
    chainId,
    query: {
      enabled: !shouldFetchGaletoPrice,
    },
    watch: !shouldFetchGaletoPrice,
  })

  const { galetoOraclePrice, refetchGaletoOraclePrice } = useGaletoOraclePrice({
    address: galetoOracleAddress,
    enabled: shouldFetchGaletoPrice,
  })

  return {
    price: shouldFetchGaletoPrice ? galetoOraclePrice : chainlinkOraclePrice,
    refresh: shouldFetchGaletoPrice ? refetchGaletoOraclePrice : refetchChainlinkOraclePrice,
  }
}

export default usePollOraclePrice
