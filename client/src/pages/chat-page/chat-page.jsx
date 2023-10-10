import React from "react";
import ErrorBoundary from "../../components/error-boundary";
import NavBar from "../../components/nav-bar";
import PageContainer from "../../modules/page-container";
import PageTitle from "../../components/page-title";
import Messenger from "../../modules/messenger";

const ChatPage = () => {
    return (
        <ErrorBoundary>
            <NavBar/>
            <PageContainer>
                <PageTitle value='Messenger'/>
                <div className="row">
                    <div className="col-3">
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action active">Room #1</a>
                            <a href="#" className="list-group-item list-group-item-action">Room #2</a>
                        </div>
                    </div>
                    <div className="col">
                        <Messenger/>
                    </div>
                </div>
            </PageContainer>
        </ErrorBoundary>
    )
}

export default ChatPage