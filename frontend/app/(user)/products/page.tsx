import Heading from '@/components/common/Heading'
import React from 'react'
import Products from './components/Products'

function page() {
  return (
    <div>
      <div>
        <Heading title='Products'/>
      </div>
      <div>
        <Products/>
      </div>
    </div>
  )
}

export default page