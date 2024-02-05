import React from 'react'

function StageThree() {
    return (
        <div className='w-5/12 mx-auto mt-10  h-fit flex flex-col  justify-center'>
            <p className='text-center font-semibold text-2xl'>Thanks Nick, what would you like to achieve at MentorLand?
                Inspiration and entertainment
            </p>
            <div className='flex flex-col gap-1 w-2/3 mx-auto py-3 text-[#fefffe]'>
                <div className="flex   bg-[#1c2133] px-8 py-4 rounded-md">
                    <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256]  rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Inspiration and entertainment</label>
                </div>
                <div className="flex   bg-[#1c2133] px-8 py-4 rounded-md">
                    <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256]  rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">To earn something new</label>
                </div>
                <div className="flex   bg-[#1c2133] px-8 py-4 rounded-md">
                    <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256]  rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">To get better at something I do</label>
                </div>
                <div className="flex   bg-[#1c2133] px-8 py-4 rounded-md">
                    <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256]  rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">To level up my team or organization</label>
                </div>
                <div className="flex   bg-[#1c2133] px-8 py-4 rounded-md">
                    <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256]  rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">To browse around</label>
                </div>
                <div className="flex   bg-[#1c2133] px-8 py-4 rounded-md">
                    <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256]  rounded  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">All of the above</label>
                </div>


            </div>

        </div>
    )
}

export default StageThree