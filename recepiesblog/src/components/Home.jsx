import React from 'react'
import { Link, Route } from "react-router-dom";
import MenuCard from './MenuCard'
import Container from '@mui/material/Container';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';

const Home = ({ colorPrimary, colorSecondary }) => {
  return (
    <Container className="home" maxWidth="md">
      <h1 className="home__title">Recpies Blog <br /> from Micha & Georgii</h1>
      <div className="row">
        <MenuCard
          color={colorSecondary}
          text={"Articles"}
          icon={<ArticleOutlinedIcon />}
        >
        </MenuCard>
        <MenuCard
          color={colorSecondary}
          text={"Backend"}
          icon={<ApiOutlinedIcon />}

        />

      </div>
    </Container>
  )
}

export default Home;
