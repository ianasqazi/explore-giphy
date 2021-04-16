
import { Input, Space } from 'antd';
import { GifOutlined } from '@ant-design/icons';

import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

import './App.css';
import 'antd/dist/antd.css';

const gf = new GiphyFetch('BwLH6EekaraNN4YwsuWCmaVrKkbrrPHz');


const trending = async () => {
  try {
    const result = await gf.trending({ limit: 10, offset: 25, rating: 'g' });
    console.log(`trending`, result);
  } catch (error) {
    console.error(`trending`, error);
  }
};

const searchGifs = async () => {
  try {
    const result = await gf.search("dogs", { limit: 10, sort: "recent" });
    console.log(`search`, result);
  } catch (error) {
    console.error(`search`, error);
  }
};


searchGifs();
trending();

const { Search } = Input;

const suffix = (
  <GifOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => {
  console.log(value)
};


function App() {
  return (
    <div className="App">
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
        allowClear
      />
      <Space />
      <Grid 
      width={800} 
      columns={5} 
      // fetchGifs={trending} 
      />
    </div>
  );
}

export default App;
