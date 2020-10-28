import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'


const Home = () => {
    const [message, setMessage] = useState('')

    const submitMessage = (event) => {
        event.preventDefault()

        

        setMessage('')
    }

    return (
        <Container className="p-5">
            <h1 className="header">Channel</h1>
            <Jumbotron>
                <Form onSubmit={submitMessage}>
                    <InputGroup className="mb-3">
                        <FormControl
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                        <InputGroup.Append>
                            <Button
                                variant="primary"
                                type="submit"
                            >
                                Send
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Jumbotron>
        </Container>
    )
}

export default Home
