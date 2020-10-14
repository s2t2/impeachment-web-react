
//import React from 'react'

import TweetCollection from './TweetCollection/Page'
import CollectionTimeline from './TweetCollection/Timeline/Page'
import CollectionTopics from './TweetCollection/Topics/Page'
import CollectionResults from './TweetCollection/Results/Page'

import BotAnalysis from './BotAnalysis/SectionIndex'
import BotClassification from './BotAnalysis/Classification/Page'
import BotCommunities from "./BotAnalysis/Communities/Page"
import BotCommunityActivity from './BotAnalysis/CommunityActivity/Page'
import BotCommunityLanguage from './BotAnalysis/CommunityLanguage/Page'
import BotImpact from './BotAnalysis/Impact/Page'

import OpinionAnalysis from './OpinionAnalysis/SectionIndex'
import OpinionModels from './OpinionAnalysis/Models/Page'
import UserOpinions from './OpinionAnalysis/User/Page'
import TopUserOpinions from './OpinionAnalysis/TopUsers/Page'

var sidebar = [
    {
        "key": "tweet-collection",
        "title": "I. Tweet Collection",
        "component": TweetCollection,
        "sections": [
            {"key": "collection-timeline", "title": "Collection Timeline",  "component": CollectionTimeline},
            {"key": "collection-topics", "title": "Collection Topics",  "component": CollectionTopics},
            {"key": "collection-results", "title": "Collection Results",  "component": CollectionResults},
        ]
    },
    {
        "key": "bot-analysis",
        "title": "II. Bot Analysis",
        "component": BotAnalysis,
        "sections": [
            {"key": "bot-classification", "title": "Bot Classification",  "component": BotClassification},
            {"key": "bot-communities", "title": "Bot Communities",  "component": BotCommunities},
            {"key": "bot-community-activity", "title": "Bot Community Activity",  "component": BotCommunityActivity},
            {"key": "bot-community-language", "title": "Bot Community Language",  "component": BotCommunityLanguage},
            {"key": "bot-impact", "title": "Bot Impact",  "component": BotImpact},
        ]
    },
    {
        "key": "opinion-analysis",
        "title": "III. Opinion Analysis",
        "component": OpinionAnalysis,
        "sections": [
            {"key": "opinion-models", "title": "Opinion Models",  "component": OpinionModels},
            {"key": "user-opinions", "title": "User Opinions",  "component": UserOpinions},
            {"key": "top-user-opinions", "title": "Top User Opinions",  "component": TopUserOpinions},
        ]
    }
]

export default sidebar
