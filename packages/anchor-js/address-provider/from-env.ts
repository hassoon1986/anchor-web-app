import { reactifyEnv } from "../../libs/react-app-prefix"

console.log(process.env)

export class AddressProviderFromEnvVar implements AddressProvider.Provider {
  bAssetReward(denom: string): string {
    return getFromEnv('bAssetReward')
  }
  bAssetGov(denom: string): string {
    return getFromEnv('bLuna')
  }
  bAssetToken(denom: string): string {
    return getFromEnv('bAssetToken')
  }
  bAsset(denom: string): string {
    return getFromEnv('bAsset')
  }
  market(denom: string): string {
    return getFromEnv('mmMarket')
  }
  custody(): string {
    return getFromEnv('mmCustody')
  }
  overseer(): string {
    return getFromEnv('mmOverseer')
  }
  aToken(): string {
    return getFromEnv('aUST')
  }
  oracle(): string {
    return getFromEnv('mmOracle')
  }
}

function getFromEnv(key: string): string {
  const val = process.env[reactifyEnv(key)]
  if(typeof val === 'undefined') {
    throw new Error(`address provider could not resolve key ${key}`)
  }
  return val
}