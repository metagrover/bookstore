import React, { Component } from 'react';
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
  SelectedFilters,
  // RangeSlider,
} from '@appbaseio/reactivesearch';

import BookCard from './BookCard';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="good-books-ds"
        credentials="nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d"
        theme={{
          typography: {
            fontFamily: 'Varela Round',
          },
          colors: {
            primaryColor: '#a18cd1',
          }
        }}
      >
        <div className="container">
          <header>
            <h2>The Book Store <span role="img" aria-label="books">📚</span></h2>

            <DataSearch
              dataField={['original_title', 'original_title.search']}
              componentId="bookSensor"
              autosuggest={false}
              iconPosition="right"
              placeholder="Search books..."
              style={{
                maxWidth: '400px',
                margin: '0 auto',
              }}
            />
          </header>

          <div>
            <SelectedFilters style={{ margin: '30px 0', textAlign: 'center' }} />

            {/* <RangeSlider
              componentId="year"
              dataField="original_publication_year"
              range={{
                start: 1970,
                end: 2017
              }}
              rangeLabels={{
                start: "1970",
                end: "2017"
              }}
              style={{
                width: 250,
                margin: '0 auto',
              }}
              react={{
                and: ['bookSensor'],
              }}
            /> */}

            <ReactiveList
              componentId="searchResult"
              dataField="original_title"
              size={10}
              onData={result => <BookCard key={result._id} data={result} />}
              pagination
              showResultStats={false}
              innerClass={{
                list: 'books-wrapper',
              }}
              react={{
                and: ['bookSensor'],
              }}
            />
          </div>
        </div>
      </ReactiveBase>
    );
  }
}
