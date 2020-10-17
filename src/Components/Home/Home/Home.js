import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import CompanyPortfolios from '../CompanyPortfolios/CompanyPortfolios';
import Review from '../Review/Review';
import Company from '../Comapany/Company';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
            <Company></Company>
            <Services></Services>
            <CompanyPortfolios></CompanyPortfolios>
            <Review></Review>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;