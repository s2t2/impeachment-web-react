
import React from 'react'

import SectionIndex from './SectionIndex'

import BotDetection from './Detection/Section'
import BotActivity from './Activity/Section'
import BotSimilarity from "./Networks/Section"
import BotOpinions from './Opinions/Section'
import BotLanguage from './Language/Section'
import BotBeneficiaries from './Beneficiaries/Section'
//import BotFollowers from './Followers/Section'
import BotImpact from './Impact/Section'

export default function BotAnalysisPage() {
    return (
        <span>
            <SectionIndex/>

            <BotImpact/>
            <BotBeneficiaries/>
            <BotLanguage/>
            <BotOpinions/>
            <BotSimilarity/>
            <BotActivity/>
            <BotDetection/>
        </span>
    )
}
