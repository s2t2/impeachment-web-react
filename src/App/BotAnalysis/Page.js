
import React from 'react'

import SectionIndex from './SectionIndex'
import ActivitySection from './Activity/Section'
import LanguageSection from './Language/Section'
import ImpactSection from './Impact/Section'
import CommunitiesSection from './Communities/Section'
import ClassificationSection from './Classification/Section'

export default function TweetCollectionPage() {
    return (
        <span>
            <SectionIndex/>

            <ActivitySection/>
            <LanguageSection/>
            <ImpactSection/>
            <CommunitiesSection/>
            <ClassificationSection/>
        </span>
    )
}
