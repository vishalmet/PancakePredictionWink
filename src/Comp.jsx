import React, { useEffect,useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { EvmPriceServiceConnection } from '@pythnetwork/pyth-evm-js'

const Comp = () => {

    const [first, setfirst] = useState()
    const { data, refetch } = useQuery({
        queryKey: ['galeto-oracle-price', "0x4CA0AD2620A658a9DC84Eb7453405175477A1A69"],
    
        queryFn: async () => {
          const connection = new EvmPriceServiceConnection('https://hermes.pyth.network', { verbose: true })
console.log("conn",connection);
setfirst(connection)
          const priceIds = ["0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f"]
          const result = (await connection.getLatestPriceFeeds(priceIds )) 
    console.log("reaa",result);
          return result?.[0]?.price?.price ?? 0n
        },
    
        refetchInterval: 5000,
        enabled: Boolean(true),
      })
    
    console.log("data",data);


    useEffect(()=>{
console.log("data",data);

console.log("Asd",first);

    },[first])
  return (
    <div>Comp</div>
  )
}

export default Comp