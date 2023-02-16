import pokemonClient from './pokemonClient'

const pokemonApi = {
  getList: (params: any) => {
    const url = '/pokemon'
    return pokemonClient.get(url, { params })
  },

  getDetail: (id: number) => {
    const url = `/pokemon/${id}`
    return pokemonClient.get(url)
  },
}

export default pokemonApi
