import React from 'react'
import Navbar from '../../../components/student/dashboardStudentComponents/Navbar.Component'
import Sidebar from '../../../components/student/dashboardStudentComponents/Sidebar.Component'

function layout(
    { children }: { children: React.ReactNode }
) {
    return (
        <div className="h-screen bg-[#fffefe]">
            <Navbar />
            <div className="flex h-full">
                <Sidebar /> 
                {children}
                {/* <Temp /> */}
            </div>
        </div>
    )
}

// export default Layout;

export default layout