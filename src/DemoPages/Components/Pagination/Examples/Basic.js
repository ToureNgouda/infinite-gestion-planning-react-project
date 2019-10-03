import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Card, CardBody,
    CardTitle,
    Pagination, PaginationItem, PaginationLink
} from 'reactstrap';

const BasicPagination = (props) => {
    return (
        <Fragment>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row>
                    <Col lg="6">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Basic</CardTitle>
                                <Pagination aria-label="Page navigation example">
                                    <PaginationItem>
                                        <PaginationLink previous />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink >
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            4
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            5
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next />
                                    </PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Rounded</CardTitle>
                                <Pagination className="pagination-rounded" aria-label="Page navigation example">
                                    <PaginationItem>
                                        <PaginationLink previous />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink >
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            4
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            5
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next />
                                    </PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Sizing</CardTitle>
                                <Pagination size="sm" aria-label="Page navigation example">
                                    <PaginationItem>
                                        <PaginationLink previous />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            4
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            5
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next />
                                    </PaginationItem>
                                </Pagination>
                                <div className="divider"/>
                                <Pagination aria-label="Page navigation example">
                                    <PaginationItem>
                                        <PaginationLink previous />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next />
                                    </PaginationItem>
                                </Pagination>
                                <div className="divider"/>
                                <Pagination size="lg" aria-label="Page navigation example">
                                    <PaginationItem>
                                        <PaginationLink previous />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink >
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next />
                                    </PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
};

export default BasicPagination;
