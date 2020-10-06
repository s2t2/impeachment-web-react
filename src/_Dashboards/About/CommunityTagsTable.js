
import React from 'react'

export default function CommunityTagsTable(props) {

    var communityTags = [
        {"community_id": 0,	"tag": "#RESIST",               "description": null},
        {"community_id": 0,	"tag": "#THERESISTANCE",        "description": null},
        {"community_id": 0,	"tag": "#RESISTANCE",           "description": null},
        {"community_id": 0,	"tag": "#VOTEBLUENOMATTERWHO", "description": null},
        {"community_id": 0,	"tag": "#VOTEBLUE",             "description": null},
        {"community_id": 0,	"tag": "#BLUEWAVE2020",     "description": null},
        {"community_id": 0,	"tag": "#IMPEACHTRUMP",     "description": null},
        {"community_id": 0,	"tag": "#BIDEN2020",        "description": null},
        {"community_id": 0,	"tag": "#IMPEACHTRUMPNOW",  "description": null},
        {"community_id": 0,	"tag": "#METOO",            "description": null},
        {"community_id": 0,	"tag": "#IMPEACH",          "description": null},
        {"community_id": 0,	"tag": "#BLUEWAVE",         "description": null},
        {"community_id": 0,	"tag": "#VOTEBLUE2020",     "description": null},
        {"community_id": 0,	"tag": "#IMPEACHANDREMOVE", "description": null},
        {"community_id": 0,	"tag": "#RESISTER",         "description": null},
        {"community_id": 0,	"tag": "#NOTMYPRESIDENT",   "description": null},
        {"community_id": 0,	"tag": "#DEMCAST",          "description": "A left-leaning media outlet"},
        {"community_id": 0,	"tag": "#IMPOTUS",          "description": "'Impeached POTUS'"},
        {"community_id": 0,	"tag": "#BLM",              "description": "'Black Lives Matter' - a movement for racial equality"},
        {"community_id": 0,	"tag": "#WTP2020",          "description": "'We The People 2020'"},
        {"community_id": 0,	"tag": "#FBR",              "description": "'Follow Black Resistance'"},
        {"community_id": 1,	"tag": "#MAGA",             "description": "'Make America Great Again' - a Trump campaign slogan"},
        {"community_id": 1,	"tag": "#KAG",              "description": "'Keep America Great' - a Trump campaign slogan"},
        {"community_id": 1,	"tag": "#TRUMP2020",        "description": null},
        {"community_id": 1,	"tag": "#DRAINTHESWAMP",    "description": "A Trump campaign slogan"},
        {"community_id": 1,	"tag": "#DEPLORABLE",       "description": "Refers to a Hillary Clinton quote from the 2016 election"},
        {"community_id": 1,	"tag": "#PATRIOT",          "description": null},
        {"community_id": 1,	"tag": "#AMERICAFIRST",     "description": "A Trump campaign slogan"},
        {"community_id": 1,	"tag": "#CONSERVATIVE",     "description": null},
        {"community_id": 1,	"tag": "#TRUMPTRAIN",       "description": null},
        {"community_id": 1,	"tag": "#VETERAN",          "description": null},
        {"community_id": 1,	"tag": "#TRUMP",            "description": null},
        {"community_id": 1,	"tag": "#BUILDTHEWALL",     "description": "A Trump campaign slogan"},
        {"community_id": 1,	"tag": "#WALKAWAY",         "description": null},
        {"community_id": 1,	"tag": "#BUILDKATESWALL",   "description": null},
        {"community_id": 1,	"tag": "#CODEOFVETS",       "description": null},
        {"community_id": 1,	"tag": "#1A",               "description": "The First Amendment"},
        {"community_id": 1,	"tag": "#2A",               "description": "The Second Amendment"},
        {"community_id": 1,	"tag": "#WWG1WGA",          "description": "Related to Q-Anon conspiracy theory"},
        {"community_id": 1,	"tag": "#THEGREATAWAKENING", "description": "Related to Q-Anon conspiracy theory"},
        {"community_id": 1,	"tag": "#QANON",            "description": "Related to Q-Anon conspiracy theory"},
        {"community_id": 1,	"tag": "#POTUS45",          "description": "45th President (Trump)"},
        {"community_id": 1,	"tag": "#NRA",              "description": "The National Rifle Association"}
    ]

    var rows = communityTags.map(function(tag){
        return (
            <tr>
                <td>{tag["community_id"]}</td>
                <td><i>{tag["tag"]}</i></td>
                <td>{tag["description"]}</td>
            </tr>
        )
    })

    return (
        <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">Bot Community</th>
                <th scope="col">Hashtag</th>
                <th scope="col">Description / Explanation</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
        </div>
    )
}
