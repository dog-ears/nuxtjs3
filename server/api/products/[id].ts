export default defineEventHandler((event) => {
    const products = [
      {
        id: 1,
        name: 'ぷろだくと01'
      },
      {
        id: 2,
        name: 'ぷろだくと02'
      },
      {
        id: 3,
        name: 'ぷろだくと03'
      }
    ]

    // id取得
    const id = Number(getRouterParam(event, 'id'))

    // 結果返却
    return products.filter((product) => product.id===id )[0]
  })
  