import React from 'react';
import Autosuggest from 'react-autosuggest';

import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';

import cachedData from './data.js'


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return cachedData.filter(cachedData => regex.test(cachedData.screen_name));
}

function getSuggestionValue(suggestion) {
    return suggestion.screen_name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.screen_name}</span>
    );
}

class TypeAheadSearchForm extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionSelected = (event, { suggestion, suggestionValue, index, method }) => {
        event.preventDefault();
        console.log('Selected Value ', suggestion.screen_name)
    
        
    }

   
    

    render() {

        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Type Twitter User Name",
            value,
            onChange: this.onChange,
            name: 'textboxvalue', textboxvalue: this.state.value
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                onSuggestionSelected={this.onSuggestionSelected}
                inputProps={inputProps}
                
            />
        );
    }
}


export default TypeAheadSearchForm;


