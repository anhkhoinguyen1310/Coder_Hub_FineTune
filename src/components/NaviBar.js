import { Container, Nav, Navbar, Form, Button, Tab, Row, Col } from 'react-bootstrap';
import PaginationBar from './Pagination'
import Card from 'react-bootstrap/Card';
import MarkdownRenderer from 'react-markdown-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import DarkMode from './DarkMode';
function NaviBar({ onSearchCoderHub, setsearchTerm, setpageNumber, repo, pageNumber, readme, fetchUser, user: users }) {

    return (
        <div>

            <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon icon={faGithub} style={{ marginLeft: '1rem' }} size="lg" />
                        {" "} GitHub

                    </Navbar.Brand>
                    <DarkMode />
                </Container>
            </Navbar>

            <Container>

                <Form className="d-flex mt-3" onSubmit={(e) => {
                    onSearchCoderHub(e)
                    fetchUser()
                }}>
                    <Form.Control
                        type="search"
                        placeholder="Search Username / Repository"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => setsearchTerm(e.target.value)}
                    />
                    <Button variant="outline-success" onClick={(e) => {
                        onSearchCoderHub(e)
                        fetchUser()
                    }}>Search</Button>
                </Form>
            </Container>
            <Container className='mt-3 border p-3'>
                <PaginationBar pageNumber={pageNumber} onSearchCoderHub={onSearchCoderHub} setpageNumber={setpageNumber} />
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
                                                    <Card.Subtitle className="mb-2">⭐ {r.stargazers_count}</Card.Subtitle>

                                                    <Card.Text>
                                                        {r.description}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>)
                                    })
                                        : (<div>No repositories found.</div>)}

                                </Tab.Pane>

                            </Tab.Content >

                        </Col>

                    </Row>

                </Tab.Container>

            </Container>
        </div>
    );
}
export default NaviBar;