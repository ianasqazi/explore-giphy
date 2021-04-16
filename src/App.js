import React, { useState } from 'react';

import { Input, Space } from 'antd';
import { GifOutlined } from '@ant-design/icons';

import { Grid, Carousel } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

import 'antd/dist/antd.css';

const { Search } = Input;

const gf = new GiphyFetch('BwLH6EekaraNN4YwsuWCmaVrKkbrrPHz');

const suffix = (
  <GifOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => {
  gf.search(value, { limit: 10, sort: "recent" })
};

function App() {

const [query, setQuery] = useState('')
  
const fetchGifs = (offset) => gf.trending({ offset, limit: 10 })

const searchGifs = (offset) => gf.search(query, { offset, limit: 10, sort: "trending" })

  return (
    <div className="App">

      {/* Search Box Input Field*/}
      <Search
        placeholder="Search SOAPBOX Giphys"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
        onChange={(e) => setQuery(e.target.value)}
        allowClear
      />
      <Space />
      {/* On Page Load show Carousel */}
      {
        query.length == 0 
        ? 
        <Carousel
        fetchGifs={fetchGifs}
        gutter={8}
        gifHeight={150}
        hideAttribution={true}
        borderRadius={5}
        />
        : ''
      }

      {/* Search Box Results  */}
      <Grid 
      key={query}
      gutter={8}
      width={800} 
      columns={3} 
      fetchGifs={() =>  searchGifs(5)}
      borderRadius={5}
      />
    </div>
  );
}

export default App;
