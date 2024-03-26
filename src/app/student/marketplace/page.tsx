import React from 'react'
import Layout from '../../../components/Layouts/DashboardLayout'; // Adjust this path to the correct location of your layout.tsx file
import Marketplace from '@/components/student/marketplace/Marketplace.component';

function marketplace() {
  return (
    <Layout showSidebar={false}>
        <Marketplace/>
    </Layout>
  )
}

export default marketplace