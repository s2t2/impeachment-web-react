
//import React from 'react'

import TweetCollectionPage from './TweetCollection/Page'

import BotAnalysisPage from './BotAnalysis/Page'
import BotClassification from './BotAnalysis/Classification/Section'
import BotCommunityClustering from "./BotAnalysis/CommunityClustering/Section"
import BotCommunityActivity from './BotAnalysis/CommunityActivity/Section'
import BotCommunityLanguage from './BotAnalysis/CommunityLanguage/Section'
import BotImpact from './BotAnalysis/Impact/Section'

import OpinionAnalysisPage from './OpinionAnalysis/Page'
import OpinionModels from './OpinionAnalysis/Models/Section'
import UserOpinions from './OpinionAnalysis/User/Section'
import TopUserOpinions from './OpinionAnalysis/TopUsers/Section'

var sidebar = [
    {
        "key": "tweet-collection",
        "title": "I. Tweet Collection",
        "component": TweetCollectionPage,
        "sections": [
            {"key": "tweet-collection", "title": "Tweet Collection",  "component": TweetCollectionPage},
        ]
    },
    {
        "key": "bot-analysis",
        "title": "II. Bot Analysis",
        "component": BotAnalysisPage,
        "sections": [
            {"key": "bot-classification", "title": "Bot Classification",  "component": BotClassification},
            {"key": "bot-community-clustering", "title": "Bot Community Clustering",  "component": BotCommunityClustering},
            {"key": "bot-community-activity", "title": "Bot Community Activity",  "component": BotCommunityActivity},
            {"key": "bot-community-language", "title": "Bot Community Language",  "component": BotCommunityLanguage},
            {"key": "bot-impact", "title": "Bot Impact",  "component": BotImpact},
        ]
    },
    {
        "key": "opinion-analysis",
        "title": "III. Opinion Analysis",
        "component": OpinionAnalysisPage,
        "sections": [
            {"key": "opinion-models", "title": "Opinion Models",  "component": OpinionModels},
            {"key": "user-opinions", "title": "User Opinions",  "component": UserOpinions},
            {"key": "top-user-opinions", "title": "Top User Opinions",  "component": TopUserOpinions},
        ]
    }
]

export default sidebar
