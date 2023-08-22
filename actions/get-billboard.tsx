import { Billboard } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

export const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`)
  const billboards = await res.json()

  return billboards
}
