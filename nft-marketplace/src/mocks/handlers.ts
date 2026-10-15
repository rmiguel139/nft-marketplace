import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/nfts', () =>
    HttpResponse.json({ items: [{ id: '1', name: 'NFT de teste', price: '0.5' }] }),
  ),
]