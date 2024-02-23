import Header from '@/components/commonComponents/Header'
import SelectmentorComponent from '@/components/mentorselection/SelectmentorComponent'
import SelectSubjectComponent from '@/components/subjectSelection/SelectSubject.Component'
import React from 'react'

function subjectSelection() {
  return (

    <div className='overflow-y-hidden'>
      <Header />
      <SelectSubjectComponent  />
    </div>

  )
}

export default subjectSelection