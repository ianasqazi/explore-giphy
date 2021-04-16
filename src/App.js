import React, { useEffect, useState } from 'react';

import { Row, Col, Input, Space, Result, Card, Tabs} from 'antd';
import { GifOutlined } from '@ant-design/icons';

import { Grid, Carousel } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api';

import ResultList from './components/ResultList';
import axios from "axios";
import API from "./utils/API";
import 'antd/dist/antd.css';

const TRENDINGURL = "https://api.giphy.com/v1/gifs/trending"	

const { Search } = Input;
const { Meta } = Card;

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

  const [ourGiphys, setOurGiphys] = useState([]);

  const [query, setQuery] = useState('')

  const params = {
    api_key: 'BwLH6EekaraNN4YwsuWCmaVrKkbrrPHz',
  };


  useEffect(() =>{
    if (ourGiphys.length <= 0) {
      axios.get(TRENDINGURL, { params})
      // API.trending()
      .then((res) => setOurGiphys(res.data.data))
        .catch((err) => console.log(err));
        
    }
    },[ourGiphys]);

  const fetchGifs = (offset) => gf.trending({ offset, limit: 10 })

  const searchGifs = (offset) => gf.search(query, { offset, limit: 10, sort: "trending" })


  return (
    <div className="App">
      <h1>
        Anas
      </h1>
      <Row> 
      <Col span={8} />
        <Col span={8}>
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
        </Col>
        <Col span={8}/>
      </Row>
<Row align={'center'} gutter={40}>
  <Col span={12}>
  <ResultList results={ourGiphys} />
  </Col>
</Row>
      

      {/* On Page Load show Carousel */}
      {/* { query.length === 0 
        ? 
        <Carousel
        fetchGifs={fetchGifs}
        gutter={8}
        gifHeight={150}
        hideAttribution={true}
        borderRadius={5}
        />
        : '' } */}

      {/* Search Box Results  */}
      {/* <Grid 
        key={query}
        gutter={8}
        width={800} 
        columns={3} 
        fetchGifs={() => searchGifs(5)}
        borderRadius={5}
        noResultsMessage={<Result
          status="404"
          title="No Results found"
          subTitle="Sorry, the page you visited does not exist."
        />}
      /> */}


    </div>
  );
}

export default App;
