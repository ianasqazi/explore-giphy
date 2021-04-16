import React from "react";
import { Row, Col, Input, Space, Result, Card } from 'antd';

const { Meta } = Card;

function ResultList(props) {
  console.log('props',  props)
  return (<><div class='site-card-wrapper'><Row gutter={16}>
      {props.results.map((result) => (
           <Col span={8}><Card
          key={result.id}
          title={result.title}
          hoverable
          style={{ width: 240 }}
          cover={<a href={result.url}>
          <img 
          alt={result.title} 
          src={result.images.original.url}
          width={200}
          height={180}
          />
          </a>
          }
          >
          <Meta 
            description={result.source}
          />
        </Card>
        </Col>
      ))}
      </Row>
      </div>
  </>
  );
}

export default ResultList;
