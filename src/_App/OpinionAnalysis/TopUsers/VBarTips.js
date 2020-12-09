

import Tooltip from 'react-bootstrap/Tooltip'

const categorySelectTooltip = <Tooltip id="category-select-tooltip">
    Include users in the selected category. NOTE: categories are subjective.
</Tooltip>

const sortSelectTooltip = <Tooltip id="sort-select-tooltip">
    Show at most the top ten users ranked in descending order by the selected metric.
</Tooltip>

const tweetSliderTooltip = <Tooltip id="tweet-slider-tooltip">
    Include users who tweeted about Trump Impeachment at least this many times.
</Tooltip>

const followerSliderTooltip = <Tooltip id="follower-slider-tooltip">
    Include users with at least this many followers who also tweeted about Trump Impeachment.
</Tooltip>

const opinionSliderTooltip = <Tooltip id="opinion-slider-tooltip">
    Include users who have a mean opinion score within the selected range.
</Tooltip>

const modelSelectTooltip = <Tooltip id="model-select-tooltip">
    See opinion scores from different Impeachment opinion models.
</Tooltip>
