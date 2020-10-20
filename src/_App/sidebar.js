
//import React from 'react'

import TweetCollection from './TweetCollection/Page'
import CollectionTimeline from './TweetCollection/Timeline/Section'
import CollectionTopics from './TweetCollection/Topics/Section'
import CollectionResults from './TweetCollection/Results/Section'

//import BotAnalysis from './BotAnalysis/Page' // SectionIndex
import BotClassification from './BotAnalysis/Classification/Section'
import BotCommunities from "./BotAnalysis/Communities/Section"
import BotActivity from './BotAnalysis/Activity/Section'
import BotLanguage from './BotAnalysis/Language/Section'
import BotImpact from './BotAnalysis/Impact/Section'

//import OpinionAnalysis from './OpinionAnalysis/Page' // SectionIndex
import OpinionModels from './OpinionAnalysis/Models/Section'
import UserOpinions from './OpinionAnalysis/User/Section'
import TopUserOpinions from './OpinionAnalysis/TopUsers/Section'

var sidebar = [
    {
        "key": "opinion-analysis",
        "title": "Opinion Analysis",
        "component": TopUserOpinions,
        "sections": [
            {"key": "top-user-opinions",    "title": "Top User Opinions",  "component": TopUserOpinions},
            {"key": "user-opinions",        "title": "User Opinions",  "component": UserOpinions},
            {"key": "opinion-models",       "title": "Opinion Models",  "component": OpinionModels},
        ]
    },
    {
        "key": "bot-analysis",
        "title": "Bot Analysis",
        "component": BotActivity,
        "sections": [
            {"key": "bot-activity",         "title": "Bot Activity",  "component": BotActivity},
            {"key": "bot-language",         "title": "Bot Language",  "component": BotLanguage},
            {"key": "bot-impact",           "title": "Bot Impact",  "component": BotImpact},
            {"key": "bot-communities",       "title": "Bot Communities",  "component": BotCommunities},
            {"key": "bot-classification",    "title": "Bot Classification",  "component": BotClassification}
        ]
    },
    {
        "key": "tweet-collection",
        "title": "Tweet Collection",
        "component": TweetCollection,
        "sections": [
            {"key": "collection-results",       "title": "Collection Results",  "component": CollectionResults},
            {"key": "collection-timeline",      "title": "Collection Timeline",  "component": CollectionTimeline},
            {"key": "collection-topics",        "title": "Collection Topics",  "component": CollectionTopics},
        ]
    },

]

export default sidebar
