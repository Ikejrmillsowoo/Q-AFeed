import React, { Component } from 'react'
import styled from 'styled-component'

const QuestionWrapper = styled.div
`
disply: flex;
justify-content: space-between;
flex-direction: column;
margin: 5%;
`

const Alert = styled.div
`
text-align: center;
`

class Question extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true,
            error: '',
        }
    }

    render() {
        const {data, loading, error} = this.state
        if (loading || error){
            return <Alert>
                {loading ? 'Loading...' : error}
            </Alert>
        }
        return (
            <QuestionWrapper></QuestionWrapper>
        )
    }
}

export default Question
