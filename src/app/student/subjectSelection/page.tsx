import Header from '@/components/commonComponents/Header.Component'
import SelectmentorComponent from '@/components/student/mentorselection/Selectmentor.Component'
import SelectSubjectComponent from '@/components/student/subjectSelection/SelectSubject.Component'
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