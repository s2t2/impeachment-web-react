
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
        "text": "I. Tweet Collection",
        "component": TweetCollectionPage,
        "sections": [
            {"key": "tweet-collection", "text": "Tweet Collection",  "component": TweetCollectionPage},
        ]
    },
    {
        "key": "bot-analysis",
        "text": "II. Bot Analysis",
        "component": BotAnalysisPage,
        "sections": [
            {"key": "bot-classification", "text": "Bot Classification",  "component": BotClassification},
            {"key": "bot-community-clustering", "text": "Bot Community Clustering",  "component": BotCommunityClustering},
            {"key": "bot-community-activity", "text": "Bot Community Activity",  "component": BotCommunityActivity},
            {"key": "bot-community-language", "text": "Bot Community Language",  "component": BotCommunityLanguage},
            {"key": "bot-impact", "text": "Bot Impact",  "component": BotImpact},
        ]
    },
    {
        "key": "opinion-analysis",
        "text": "III. Opinion Analysis",
        "component": OpinionAnalysisPage,
        "sections": [
            {"key": "opinion-models", "text": "Opinion Models",  "component": OpinionModels},
            {"key": "user-opinions", "text": "User Opinions",  "component": UserOpinions},
            {"key": "top-user-opinions", "text": "Top User Opinions",  "component": TopUserOpinions},
        ]
    }
]

export default sidebar
