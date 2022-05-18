import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BlackSwanFoundry',
  description:
    'A decentralized blockchain management platform for assets and utilities. Mint BSF20 & BSF721 Tokens on many blockchains supported by the platform. Earn BSF for participating in the platform mechanisms for managing assets and utilities.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('BSF')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('BSF')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('BSF')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('BSF')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('BSF')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('BSF')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('BSF')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('BSF')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('BSF')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('BSF')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('BSF')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('BSF')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('BSF')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('BSF')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('BSF')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('BSF')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('BSF')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('BSF')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('BlackSwanFoundry Info & Analytics')}`,
        description: 'View statistics for BlackSwanFoundry exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('BlackSwanFoundry Info & Analytics')}`,
        description: 'View statistics for BlackSwanFoundry exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('BlackSwanFoundry Info & Analytics')}`,
        description: 'View statistics for BlackSwanFoundry exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('BlackSwanFoundry')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('BlackSwanFoundry')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('BlackSwanFoundry')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('BlackSwanFoundry')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('BlackSwanFoundry')}`,
      }
    default:
      return null
  }
}
