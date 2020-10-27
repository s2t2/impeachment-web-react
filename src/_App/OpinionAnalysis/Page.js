
import React from 'react'

import SectionIndex from './SectionIndex'
import ModelsSection from './Models/Section'
import UserSection from './User/Section'
import TopUserSection from './TopUsers/Section'

export default function OpinionAnalysisPage() {
    return (
        <span>
            <SectionIndex/>

            <TopUserSection/>
            <UserSection screen_name="SENATEMAJLDR" />
            <ModelsSection/>
        </span>
    )
}
