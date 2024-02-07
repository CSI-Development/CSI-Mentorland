import React, { useState } from 'react'

function StageThree() {

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    // Function to handle option selection
    const handleOptionSelect = (option: string) => {
        // Toggle selection for the clicked option
        setSelectedOptions(prevOptions => {
            if (prevOptions.includes(option)) {
                // Remove the option if already selected
                return prevOptions.filter(item => item !== option);
            } else {
                // Add the option if not already selected
                return [...prevOptions, option];
            }
        });
    };

    return (
        <div className='w-5/12 mx-auto mt-10  h-fit flex flex-col  justify-center'>
            <p className='text-center font-semibold text-2xl'>Thanks Nick, what would you like to achieve at MentorLand?
                Inspiration and entertainment
            </p>
            <div className='flex flex-col gap-1 w-2/3 mx-auto py-3 text-[#fefffe]'>
                <div className={`flex bg-[#1c2133] px-8 py-4 rounded-md ${selectedOptions.includes('Inspiration and entertainment') ? 'bg-gray-700' : ''}`} onClick={() => handleOptionSelect('Inspiration and entertainment')}>
                <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256] rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" checked={selectedOptions.includes('Inspiration and entertainment')} />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">Inspiration and entertainment</label>
                </div>
                <div className={`flex bg-[#1c2133] px-8 py-4 rounded-md ${selectedOptions.includes('To earn something new') ? 'bg-gray-700' : ''}`} onClick={() => handleOptionSelect('To earn something new')}>
                <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256] rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" checked={selectedOptions.includes('To earn something new')} />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">To earn something new</label>
                </div>
                <div className={`flex bg-[#1c2133] px-8 py-4 rounded-md ${selectedOptions.includes('To get better at something I do') ? 'bg-gray-700' : ''}`} onClick={() => handleOptionSelect('To get better at something I do')}>
                <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256] rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" checked={selectedOptions.includes('To get better at something I do')} />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">To get better at something I do</label>
                </div>
                <div className={`flex bg-[#1c2133] px-8 py-4 rounded-md ${selectedOptions.includes('To level up my team or organization') ? 'bg-gray-700' : ''}`} onClick={() => handleOptionSelect('To level up my team or organization')}>
                <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256] rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" checked={selectedOptions.includes('To level up my team or organization')} />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">To level up my team or organization</label>
                </div>
                <div className={`flex bg-[#1c2133] px-8 py-4 rounded-md ${selectedOptions.includes('To browse around') ? 'bg-gray-700' : ''}`} onClick={() => handleOptionSelect('To browse around')}>
                <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256] rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" checked={selectedOptions.includes('To browse around')} />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">To browse around</label>
                </div>
                <div className={`flex bg-[#1c2133] px-8 py-4 rounded-md ${selectedOptions.includes('All of the above') ? 'bg-gray-700' : ''}`} onClick={() => handleOptionSelect('All of the above')}>
                <input type="checkbox" value="" className="w-4 mr-1 h-4 my-auto text-blue-600 bg-[#384256] rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" checked={selectedOptions.includes('All of the above')} />
                    <label className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">All of the above</label>
                </div>


            </div>

        </div>
    )
}

export default StageThree