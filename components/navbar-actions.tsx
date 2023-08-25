'use client'

import { useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'

export const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false)
  const cart = useCart()
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center  rounded-full bg-black px-4 py-2"
        onClick={() => router.push('/cart')}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-white text-sm font-medium">{cart.items.length}</span>
      </Button>
    </div>
  )
}
