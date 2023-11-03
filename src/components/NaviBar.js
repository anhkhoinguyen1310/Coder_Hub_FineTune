import { Container, Nav, Navbar, NavDropdown, Form, Button, Tab, Row, Col } from 'react-bootstrap';
import PaginationBar from './Pagination'
import Card from 'react-bootstrap/Card';
import MarkdownRenderer from 'react-markdown-renderer';

function NaviBar({ onSearchCoderHub, setsearchTerm, setpageNumber, repo, pageNumber, readme, fetchUser, user: users }) {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Github</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Form className="d-flex mt-3" onSubmit={(e) => {
                onSearchCoderHub(e)
                fetchUser()
            }}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setsearchTerm(e.target.value)}
                />
                <Button variant="outline-success" onClick={(e) => {
                    onSearchCoderHub(e)
                    fetchUser()
                }}>Search</Button>
            </Form>
            <Container className='mt-3 border p-3'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Respo</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">User</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mb-3">
                                <Tab.Pane eventKey="second">
                                    {users.length > 0 ? users.map((user) => {
                                        return (
                                            <Card className='mb-3'>
                                                <Card.Img variant="top" src={user.avatar_url} className="w-50 h-50" />
                                                <Card.Body>
                                                    <Card.Title>{user.login}</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the
                                                        bulk of the card's content.
                                                    </Card.Text>
                                                    <Button variant="primary" onClick={() => window.location.href = user.html_url}>Go to {user.login}'s GitHub</Button>
                                                </Card.Body>
                                            </Card>
                                        )
                                    }) :

                                        (<div>No user found.</div>)}

                                </Tab.Pane>
                                <Tab.Pane eventKey="first">
                                    {readme && <MarkdownRenderer markdown={readme} />}
                                    {repo.length > 0 ? repo.map((r) => {
                                        //console.log("hello", r);
                                        return (
                                            <Card className="mb-3">
                                                <Card.Body>
                                                    <Card.Title className="text-left"><a href={r.full_name}>
                                                        {r.full_name}
                                                    </a>
                                                    </Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">⭐ {r.stargazers_count}</Card.Subtitle>

                                                    <Card.Text>
                                                        {r.description}
                                                    </Card.Text>
                                                    <Card.Link href="#">Card Link</Card.Link>
                                                    <Card.Link href="#">Another Link</Card.Link>
                                                </Card.Body>
                                            </Card>)
                                    })
                                        : (<div>No repositories found.</div>)}

                                </Tab.Pane>

                            </Tab.Content >
                            <PaginationBar className="" pageNumber={pageNumber} onSearchCoderHub={onSearchCoderHub} setpageNumber={setpageNumber} />
                        </Col>

                    </Row>

                </Tab.Container>

            </Container>
        </div>
    );
}
export default NaviBar;