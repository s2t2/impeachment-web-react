




import React from 'react'

import Card from 'react-bootstrap/Card'

export default function MethodologyCard(){
    return (
        <Card>
            <Card.Body>
                <Card.Title><h3>Methodology</h3></Card.Title>

                <Card.Text>
                    Read about our methodology in rough chronological order by following the outline below:
                </Card.Text>

                {/* todo: make this from the sidebar sitemap. */}
                <ol type="I">
                    <li><a href="/tweet-collection">Tweet Collection</a></li>
                    <li><a href="/bot-detection">Bot Detection</a></li>
                    <li><a href="/bot-similarity">Bot Similarity</a></li>
                    <li><a href="/opinion-models">Opinion Models</a></li>
                    <li><a href="/user-opinions">User Opinions</a></li>
                    <li><a href="/top-user-opinions">Top User Opinions</a></li>
                    <li><a href="/bot-beneficiaries">Bot Beneficiaries</a></li>
                    <li><a href="/bot-language">Bot Language</a></li>
                    <li><a href="/bot-impact">Bot Impact</a></li>
                </ol>
            </Card.Body>
        </Card>
    )
}
