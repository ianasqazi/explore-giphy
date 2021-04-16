
import { DatePicker } from 'antd';

import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import './App.css';
import 'antd/dist/antd.css';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);


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
    </div>
  );
}

export default App;
