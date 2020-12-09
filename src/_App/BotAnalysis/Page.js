
import React from 'react'

import SectionIndex from './SectionIndex'
//mport ActivitySection from './Activity/Section'
import BeneficiariesSection from './Beneficiaries/Section'
import LanguageSection from './Language/Section'
import ImpactSection from './Impact/Section'
import NetworksSection from './Networks/Section'
import ClassificationSection from './Detection/Section'

export default function BotAnalysisPage() {
    return (
        <span>
            <SectionIndex/>

            <ImpactSection/>
            <BeneficiariesSection/>
            <LanguageSection/>
            <NetworksSection/>
            <ClassificationSection/>
        </span>
    )
}
