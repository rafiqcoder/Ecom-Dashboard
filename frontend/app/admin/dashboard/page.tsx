import RightPanel from '@/components/admin_components/dashboard/RightPanel'
import StatsCards from '@/components/admin_components/dashboard/StatsCards'
import TopProducts from '@/components/admin_components/dashboard/TopProducts'
import Transaction from '@/components/admin_components/dashboard/Transaction'
import WeeklyReport from '@/components/admin_components/dashboard/WeaklyReport'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div  className=' w-full'>
      <div className=' px-4 p-4 w-full'>
        <StatsCards/>
      </div>
      <div className='grid grid-col-1 lg:grid-cols-3 px-4 w-full gap-4 '>
        <div className='col-span-1 h-full lg:col-span-2'>
          <WeeklyReport/>
        </div>
        <div className='col-span-1 h-full'>
          <RightPanel/>
        </div>

      </div>
      <div className=' mt-6 max-md:mt-4 max-sm:mt-2 px-4'>
        <div className=' grid lg:grid-cols-3 grid-cols-3 gap-4 max-md:grid-cols-1'>
          <div className=' col-span-3 lg:col-span-2'>
            <Transaction/>
          </div>
          <div className='col-span-1 h-full '>
            <TopProducts/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page