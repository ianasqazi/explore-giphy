import React, { useEffect, useState } from 'react';

import { Row, Col, Input, Space, Result, Tabs } from 'antd';
import { GifOutlined } from '@ant-design/icons';

import { Grid, Carousel } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api';

import ResultList from './components/ResultList';
import axios from "axios";
import 'antd/dist/antd.css';
import './App.css'

const TRENDINGURL = "https://api.giphy.com/v1/gifs/trending"

const { Search } = Input;
const { TabPane } = Tabs;

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


  useEffect(() => {
    if (ourGiphys.length <= 0) {
      axios.get(TRENDINGURL, { params })
        // API.trending()
        .then((res) => setOurGiphys(res.data.data))
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ourGiphys]);

  const fetchGifs = (offset) => gf.trending({ offset, limit: 10 })

  const searchGifs = (offset) => gf.search(query, { offset, limit: 10, sort: "trending" })


  return (
    <div className="App">

      {/* Headers  */}
      <Row>
        <Col span={24} align='center'
          style={{ marginTop: '30px' }}>
          <h1>SOAPBOX x GIPHY</h1>
        </Col>
      </Row>


      {/* Tabs  */}
      <Row>
        <Col span={24}  >

          <Tabs defaultActiveKey="1" centered>

            <TabPane tab="Using CSS Library - Ant Design" key="1">
              <Row align={'center'} gutter={20}>

                <Col span={24} align='center'
                  style={{ marginTop: '30px' }}>
                  <h3>Top trending GIPHYS </h3>
                </Col>

                <Col span={20}>
                  <ResultList results={ourGiphys} />
                </Col>
              </Row>
            </TabPane>

            <TabPane tab="Using fetchGiphy and searchGiphy" key="2">
              <Row align='center'>
                {/* SEARCH BOX  */}
                <Col span={8} />
                <Col span={8}>
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
                <Col span={8} />
              </Row>
              <Row align='center'>
                {query.length === 0
                  ?
                  <><br /><br />
                    <Carousel
                      fetchGifs={fetchGifs}
                      gutter={8}
                      gifHeight={150}
                      hideAttribution={true}
                      borderRadius={5}
                    />
                  </>
                  :
                  <><br /><br />
                    <Grid
                      key={query}
                      gutter={8}
                      width={800}
                      columns={3}
                      fetchGifs={() => searchGifs(5)}
                      borderRadius={5}
                      noResultsMessage={<Result
                        status="404"
                        title="No Results found"
                        subTitle="Sorry, No results found for the searched keyword"
                      />}
                    />
                  </>
                }
              </Row>
            </TabPane>

          </Tabs>
        </Col>
      </Row>

      <div class="footer">
        <p><a href='https://linktr.ee/ianasqazi'>Anas Qazi</a></p>
      </div>

    </div>
  );
}

export default App;
