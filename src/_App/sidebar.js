
//import React from 'react'

import TweetCollection from './TweetCollection/Page'
import CollectionTimeline from './TweetCollection/Timeline/Section'
import CollectionTopics from './TweetCollection/Topics/Section'
import CollectionResults from './TweetCollection/Results/Section'

import BotAnalysis from './BotAnalysis/Page' // SectionIndex
import BotDetection from './BotAnalysis/Detection/Section'
import BotActivity from './BotAnalysis/Activity/Section'
import BotSimilarity from "./BotAnalysis/Networks/Section"
import BotBeneficiaries from './BotAnalysis/Beneficiaries/Section'
import BotLanguage from './BotAnalysis/Language/Section'
import BotOpinions from './BotAnalysis/Opinions/Section'
//import BotFollowers from './BotAnalysis/Followers/Section'
import BotImpact from './BotAnalysis/Impact/Section'

import OpinionAnalysis from './OpinionAnalysis/Page' // SectionIndex
import OpinionModels from './OpinionAnalysis/Models/Section'
import UserOpinions from './OpinionAnalysis/User/Section'
import TopUserOpinions from './OpinionAnalysis/TopUsers/Section'

var sidebar = [
    {
        "key": "bot-analysis",
        "title": "Bot Analysis",
        "component": BotAnalysis,
        "sections": [
            {"key": "bot-impact",           "title": "Bot Impact",          "component": BotImpact},
            {"key": "bot-beneficiaries",    "title": "Bot Beneficiaries",   "component": BotBeneficiaries},
            {"key": "bot-language",         "title": "Bot Language",        "component": BotLanguage},
            //{"key": "bot-followers",        "title": "Bot Followers",       "component": BotFollowers},
            {"key": "bot-opinions",         "title": "Bot Opinions",        "component": BotOpinions},
            {"key": "bot-similarity",       "title": "Bot Similarity",        "component": BotSimilarity},
            {"key": "bot-activity",        "title": "Bot Activity",         "component": BotActivity},
            {"key": "bot-detection",        "title": "Bot Detection",      "component": BotDetection}
        ]
    },
    {
        "key": "opinion-analysis",
        "title": "Opinion Analysis",
        "component": OpinionAnalysis,
        "sections": [
            {"key": "top-user-opinions",    "title": "Top Users",   "component": TopUserOpinions},
            {"key": "user-opinions",        "title": "User Opinions",       "component": UserOpinions},
            {"key": "opinion-models",       "title": "Opinion Models",      "component": OpinionModels},
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
