import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-date-picker';
// import "react-date-picker/dist/DatePicker.css";
// import {Link} from 'react-router-dom';

const CreateExercise = () => {
    const [exercise, setExercise] = React.useState({
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: ["user1", "user2"]
    })
    console.log(exercise)

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const onChangeUsername = () => {

    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setExercise({...exercise, [name]: value})
    }
    const onChangeDate = (e) => {
        console.log('selected', e)

    }

    return(
        <div className="section">
            <h1>Create Exercise</h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control as="select" required value={exercise.username} onChange={onChangeUsername}>
                        {exercise.users.map((user, index) => {
                            return <option key={index}>{user}</option>
                        })}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={1} name="description" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Duration (in minutes)</Form.Label>
                    <Form.Control as="textarea" rows={1} name="duration" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <label>Date:</label>
                    <div>
                        <DatePicker 
                            selected={exercise.date}
                            onClick={onChangeDate}
                        />
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default CreateExercise;