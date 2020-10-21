
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

import CommunityTags from './CommunityTags'
import meanOpinionsLR from './mean-opinion-scores-for-top-users-lr.png'
import meanOpinionsNB from './mean-opinion-scores-for-top-users-nb.png'
import meanOpinionsBERT from './mean-opinion-scores-for-top-users-bert.png'

export default function SentimentAnalysis() {
    return (
        <Container fluid>
            <Card>
                <Card.Body>
                    <Card.Title><h3>Opinion Models</h3></Card.Title>
                    <Card.Text>
                        For training our Impeachment opinion models, we used an automated approach suggested by the <a href="/about">previous bot-detection research</a>.
                        {" "}It starts with labeling users, then labeling their tweets, and using those labeled tweets for model training.
                    </Card.Text>

                    <h4>Labeling Users</h4>
                    <Card.Text>
                        For each community we chose a mutually exclusive list of the top <a href="/bot-language">bot profile hashtags</a>, excluding shared topics like <i>'#Impeachment'</i> and <i>'#FactsMatter'</i>, which were used by both communities.
                        {" "} These community hashtags are listed below.
                    </Card.Text>
                    <CommunityTags/>

                    <Card.Text>
                        We then identified the users in our dataset who included any of these community hashtags in their profile description.
                        {" "}Of the original 3.6 million users, 138 thousand (3.8%) had community hashtags.
                        {" "}We removed 541 of these users whose profile description included tags from more than one community, and then assigned each of the remaining users a bot community label of <code>0</code> or <code>1</code>, depending on which community hashtags were present in their profile.
                        {" "}This resulted in a mutually exclusive list of 60 thousand left-leaning and 78 thousand right-leaning users who represent each bot community.
                    </Card.Text>

                    <h4>Labeling Tweets</h4>
                    <Card.Text>
                        For each of these labeled users, we labeled all of their tweets with their respective community label (<code>0</code> or <code>1</code>).
                        {" "} Of these 14 million labeled tweets, 5.6 million were left-leaning and 8.4 million were right-leaning.
                    </Card.Text>

                    <Card.Text>
                        Since many of these labeled tweets were retweets that share the same tweet text as others, for training the binary classifier models we de-duplicated all tweet texts (to prevent over-fitting that can occur when a model scores a tweet that shares the same text as one it has been trained on).
                        {" "}This resulted in a list of 2.8 million unique tweet texts with community labels to use for model training.
                        {" "} Of these 2.8 million labeled tweet texts, 1.38 million were left-leaning and 1.35 million were right-leaning.
                    </Card.Text>


                    <h4>Model Training</h4>
                    <Card.Text>
                        We chose to train three different opinion models and compare their results.
                        {" "}The first two were <a href="https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression">Logistic Regression</a>
                        {" "}  and <a href="https://scikit-learn.org/stable/modules/naive_bayes.html#multinomial-naive-bayes">Naive Bayes</a>
                        {" "}  binary classifier models, which both score tweets as either <code>0</code> or <code>1</code>.

                        {" "}The third, a customized <a href="https://huggingface.co/transformers/model_doc/bert.html">BERT transformer</a>,
                        {""}  scores tweets as a decimal number between <code>0</code> and <code>1</code>.
                    </Card.Text>

                    { /* <h5>Data Splitting</h5> */ }
                    <Card.Text>
                        We used 80% of the labeled data to train the models, and the remaining 20% to evaluate them.
                        For the binary classifier models, we split the training and testing data using stratified random sampling on the community label class.
                    </Card.Text>

                    {/* <h5>Tokenization and Vectorization</h5> */}
                    <Card.Text>
                        To train the binary classifier models, we tokenized the tweet texts (without using stopword removal), producing 1.1 million features,
                        {" "} and converted the tokens to vectors using a standard <a href="https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction">Term-Frequency / Inverse Document-Frequency</a> (TF/IDF) approach.

                        {" "} To train the BERT transformer, we tokenized tweet text using the <a href="https://huggingface.co/transformers/pretrained_models.html">"bert-base-cased" tokenizer</a>.
                    </Card.Text>

                    <h4>Model Evaluation</h4>

                    <Card.Text>
                        <ul>
                            <li>The Logistic Regression scored 88.9% accuracy on the training data and 87.7% accuracy on the test data.</li>
                            <li>The Naive Bayes scored 90.7% accuracy on the training data and 88.2% accuracy on the test data.</li>
                            <li>The BERT Transformer's generalization error on the test data was 96.3%.</li>
                        </ul>
                    </Card.Text>

                    <Card.Text>
                        The fully-trained Logistic Regression is 9 MB, the Naive Bayes is 36 MB, and the BERT Transformer is 413 MB.
                    </Card.Text>

                    <h4>Model Predictions</h4>
                    <Card.Text>
                        We used each binary classifier to assign an opinion score to all tweets in our dataset.
                        {" "}And we used the BERT Transformer to assign an opinion score to all tweets created between 12/20 and 2/15 (our primary collection period).
                    </Card.Text>

                    <Card.Text>
                        The charts below show the overall distribution of mean opinion scores for the top thousand users who have the most followers in our dataset.
                        {" "} Use the <a href="/user-opinions">User Opinions</a> and <a href="top-user-opinions">Top User Opinions</a> dashboards to explore further.
                    </Card.Text>

                    <img src={meanOpinionsLR} className="img-fluid" style={{height:450, marginTop:15, marginBottom:10}} alt="a histogram of mean opinion scores for the Logistic Regression model"/>
                    <img src={meanOpinionsNB} className="img-fluid" style={{height:450, marginTop:15, marginBottom:10}} alt="a histogram of mean opinion scores for the Naive Bayes model"/>
                    <img src={meanOpinionsBERT} className="img-fluid" style={{height:450, marginTop:15, marginBottom:10}} alt="a histogram of mean opinion scores for the BERT Transformer model"/>

                </Card.Body>
            </Card>
        </Container>
    )
}
