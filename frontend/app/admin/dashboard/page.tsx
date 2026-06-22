import RightPanel from '@/components/admin_components/dashboard/RightPanel'
import StatsCards from '@/components/admin_components/dashboard/StatsCards'
import WeeklyReport from '@/components/admin_components/dashboard/WeaklyReport'
import React from 'react'

function page() {
  return (
    <div  className=' w-full'>
      <div className=' px-4 p-4 w-full'>
        <StatsCards/>
      </div>
      <div className='grid grid-col-1 lg:grid-cols-3 px-4 w-full gap-4 h-96'>
        <div className='col-span-1 h-full lg:col-span-2'>
          <WeeklyReport/>
        </div>
        <div className='col-span-1 h-full'>
          <RightPanel/>
        </div>
      </div>
    </div>
  )
}

export default page