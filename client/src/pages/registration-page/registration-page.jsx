import React from "react";
import ErrorBoundary from "../../components/error-boundary";
import PageContainer from "../../modules/page-container";
import PageTitle from "../../components/page-title";
import NavBar from "../../components/nav-bar";
import RegistrationForm from "../../modules/registration-form";

const RegistrationPage = () => {
    return (
        <ErrorBoundary>
            <NavBar/>
            <PageContainer>
                <PageTitle value='Registration'/>
                <RegistrationForm/>
            </PageContainer>
        </ErrorBoundary>
    )
}

export default RegistrationPage