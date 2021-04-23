import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateUser = () => {
    const [username, setUsername] = React.useState({username: ''})
    const handleChange = (e) => {
        setUsername({...username,
            username: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username: username.username
        }

        console.log(username)
        setUsername({username: ''})
    }

    return(
        <div className="section">
            <h1>Create User</h1>
            <Form>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Control type="text" required placeholder="Username" name="username" value={username.username} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default CreateUser;