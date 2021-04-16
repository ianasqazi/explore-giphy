import React from "react";
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

function ResultList(props) {
  return (<><div class='site-card-wrapper'><Row gutter={40} align={'center'}>
      {props.results.map((result) => (
           <Col><Card
          key={result.id}
          title={result.title}
          hoverable
          style={{ width: 240, height: 350, margin: 10 }}
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
