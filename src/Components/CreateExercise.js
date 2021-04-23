import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-date-picker';
// import "react-date-picker/dist/DatePicker.css";

const CreateExercise = () => {
    const [exercise, setExercise] = React.useState({
        username: 'username1',
        description: '',
        duration: 0,
        date: new Date(),
        users: ["user1", "user2"]
    })
    console.log(exercise)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExercise = {
            username: exercise.username,
            description: exercise.description,
            duration: exercise.duration,
            date: exercise.date
        }
        console.log('new exercise', newExercise)
        // window.location = '/'
    }
   
    const handleChange = (e) => {
        const {name, value} = e.target
        setExercise({...exercise, [name]: value})
    }
    const onChangeDate = (date) => {
        setExercise({...exercise, date: date})
    }

    return(
        <div className="section">
            <h1>Create Exercise</h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control as="select" required name="username" value={exercise.username} onChange={handleChange}>
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
                    <Form.Control type="number" rows={1} name="duration" onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <label>Date:</label>
                    <div>
                        <DatePicker 
                            value={exercise.date}
                            onChange={onChangeDate}
                        />
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default CreateExercise;