'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { Dialog } from '@headlessui/react'

import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'
import { Filter } from './filter'
import type { Color, Size } from '@/types'

interface MobileFiltersProps {
  sizes: Size[]
  colors: Color[]
}

export const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false)

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)
  return (
    <>
      <Button className="flex items-center gap-x-2 sm:hidden" onClick={onOpen}>
        Filters
        <Plus size={20} />
      </Button>

      <Dialog as="div" open={open} onClose={onClose} className="relative z-40 sm:hidden">
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-4 shadow-xl">
            {/* Close Button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            {/* Reander th filters */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
