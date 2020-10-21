
import React from 'react'

import SectionIndex from './SectionIndex'
import ModelsSection from './Models/Section'
import UserSection from './User/Section'
import TopUserSection from './TopUsers/Section'

export default function TweetCollectionPage() {
    return (
        <span>
            <SectionIndex/>

            <TopUserSection/>
            <UserSection screen_name="SPEAKERPELOSI" />
            <ModelsSection/>
        </span>
    )
}
