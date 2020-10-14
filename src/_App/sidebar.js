
//import React from 'react'

import TweetCollection from './TweetCollection/Page'

import BotAnalysis from './BotAnalysis/SectionIndex'
import BotClassification from './BotAnalysis/Classification/Page'
import BotClustering from "./BotAnalysis/Clustering/Page"
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
            {"key": "tweet-collection", "title": "Tweet Collection",  "component": TweetCollection},
        ]
    },
    {
        "key": "bot-analysis",
        "title": "II. Bot Analysis",
        "component": BotAnalysis,
        "sections": [
            {"key": "bot-classification", "title": "Bot Classification",  "component": BotClassification},
            {"key": "bot-community-clustering", "title": "Bot Community Clustering",  "component": BotClustering},
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
