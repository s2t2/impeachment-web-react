
import React from 'react'

import SectionIndex from './SectionIndex'
import TimelineSection from './Timeline/Section'
import TopicsSection from './Topics/Section'
import ResultsSection from './Results/Section'

export default function TweetCollectionPage() {
    return (
        <span>
            <SectionIndex/>
            <TimelineSection/>
            <TopicsSection/>
            <ResultsSection/>
        </span>
    )
}
