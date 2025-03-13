import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

const Login_Bootstrap = () => {
    return (
        <>
            <Container fluid className='d-flex justify-content-center align-items-center vw-100 vh-100' style={{ backgroundColor: "#e6ccff" }}>
                <div className='p-5 rounded bg-white' style={{ width: '30%' }}>
                    <Form>
                        <h3 className='text-center mb-4' style={{ color: "#9933ff" }}>SIGN IN</h3>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address <FontAwesomeIcon icon={faEnvelope} className="ms-1 mt-1" /></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password <FontAwesomeIcon icon={faKey} className="ms-1" /></Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className='d-grid'>
                            <Button variant="primary">Submit</Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </>
    );
};
export default Login_Bootstrap;