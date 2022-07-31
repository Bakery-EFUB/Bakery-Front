import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { GetRecommendShop } from "../../api/home";
//axios 적용 전 임시
import orderList from "../../_mock/orderList";
import {
  CardDisplayContainer,
  Header,
  Menu,
  Body,
  MoreInfoIcon,
  SeeAll,
} from "./style";

const OrderDisplay = ({ title }) => {
  const [allOrderInfo, setAllOrderInfo] = useState([]);

  useEffect(() => {
    console.log(orderList);
    setAllOrderInfo(orderList["sheetResponseDTOs"]);

    /* GetRecommend()
      .then(data => {
        console.log(data);
        console.log(recommend);
        setAllorderInfo();
      }) 
      .catch(e => {
        console.log(e);
      });*/
  }, []);

  return (
    <CardDisplayContainer>
      <Header>
        <Menu>{title}</Menu>
        <Link to="/allproposal">
          <SeeAll>
            전체보기<MoreInfoIcon></MoreInfoIcon>
          </SeeAll>
        </Link>
      </Header>
      <Body>
        {allOrderInfo.map(order => {
          return (
            <Card
              key={order.sheetId}
              title={order.locationDong}
              image={order.imageUrl}
              subtitle={order.hashtag}
            ></Card>
          );
        })}
      </Body>
    </CardDisplayContainer>
  );
};

export default OrderDisplay;
