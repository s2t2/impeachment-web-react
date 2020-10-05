

import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'

export default function AboutPage(props) {
    return (
        <Container>
            <h2>About</h2>

            <p>
                This project builds upon the research of Tauhid Zaman, Nicolas Guenon Des Mesnards, et. al., as described by the paper: <a href="https://arxiv.org/abs/1810.12398">"Detecting Bots and Assessing Their Impact in Social Networks"</a>.
                Our goal is to detect automated social media accounts known as "bots", and analyze their impact on the conversation
                about a new event: the Trump Impeachment proceedings.
            </p>

            <h3>Team</h3>
            <ul>
                <li><a href="https://www.zlisto.com/">Dr. Tauhid Zaman</a> (Yale University)</li>
                <li><a href="http://data-creative.info/team/">Michael J Rossetti</a> (Georgetown University, New York University)</li>
                <li>Special thanks to <a href="https://github.com/axpart">Mohammad Sami</a> for front-end development contributions!</li>
            </ul>

            <h3>Source Code</h3>
            <ul>
                <li><a href="https://github.com/zaman-lab/tweet-analyzer-py">Tweet Collection and Analysis (Python)</a></li>
                <li><a href="https://github.com/zaman-lab/impeachment-web-react">Tweet Analysis Website (React)</a></li>
            </ul>

            <h3>Methods</h3>

            <section>
                <h4>I. Tweet Collection</h4>
                <p>From December 12, 2019 to March 24, 2020, we collected tweets about the Trump Impeachment process, including any tweet case-insensitively mentioning any of the following terms:</p>
                <table>
                    <thead>
                        <tr><th>Topic</th><th>Date Added</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><code>	#FactsMatter	</code></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><code>	#IGHearing	</code></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><code>	#IGReport	</code></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><code>	#ImpeachAndConvict	</code></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><code>	#ImpeachAndConvictTrump	</code></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><code>	#SenateHearing	</code></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><code>	#TrumpImpeachment	</code></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><code>	impeach	</code></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><code>	impeached	</code></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><code>	impeachment	</code></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><code>	Trump to Pelosi	</code></td>	<td>	2019-12-17	</td></tr>
                        <tr><td><code>	#25thAmendmentNow	</code></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><code>	#ImpeachAndRemove	</code></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><code>	#ImpeachmentEve	</code></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><code>	#ImpeachmentRally	</code></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><code>	#NotAboveTheLaw	</code></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><code>	#trumpletter	</code></td>	<td>	2019-12-18	</td></tr>
                        <tr><td><code>	#GOPCoverup	</code></td>	<td>	2020-01-22	</td></tr>
                        <tr><td><code>	#ShamTrial	</code></td>	<td>	2020-01-22	</td></tr>
                        <tr><td><code>	#AquittedForever	</code></td>	<td>	2020-02-06	</td></tr>
                        <tr><td><code>	#CountryOverParty	</code></td>	<td>	2020-02-06	</td></tr>
                        <tr><td><code>	#CoverUpGOP	</code></td>	<td>	2020-02-06	</td></tr>
                        <tr><td><code>	#MitchMcCoverup	</code></td>	<td>	2020-02-06	</td></tr>
                        <tr><td><code>	#MoscowMitch	</code></td>	<td>	2020-02-06	</td></tr>
                    </tbody>
                </table>
                <p>
                    In total, we collected 67.6 million tweets from 3.6 million unique users.
                    Of these, 55.9 million (82.6%) were retweets, from 2.7 million unique users.
                </p>
                <p>
                    NOTE: despite collecting tweets continuously, the dataset is not comprehensive due to Twitter API rate limits which caused our collector to sleep intermittently when it was being rate-limited.
                </p>
                <p>
                    NOTE: our collector was down for a few hours between 2019-12-18 and 2019-12-19 for maintenance, and did not achieve continuous collection on those days.
                </p>
                {/* TODO: bar graph of tweets per day */ }
                {/* TODO: bar graph of top retweeted users */ }
            </section>

            <section>
                <h4>II. Bot Classification</h4>
                <p></p>
            </section>

            <section>
                <h4>III. Bot Community Clustering</h4>
                <p></p>
            </section>

            <section>
                <h4>IV. Bot Community Analysis</h4>
                <p></p>
            </section>

            <section>
                <h4>V. Sentiment Analysis</h4>
                <p></p>
            </section>

        </Container>
    )
}
