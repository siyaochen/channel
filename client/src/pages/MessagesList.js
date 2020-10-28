import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

// import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class MessagesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getMessages().then((messages) => {
            console.log(JSON.stringify(messages.data))
            this.setState({
                messages: messages.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { messages, isLoading } = this.state

        const columns = [
            {
                Header: 'User',
                accessor: 'user',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'datetime',
                filterable: true,
            },
            {
                Header: 'Content',
                accessor: 'content',
                filterable: false,
            },
        ]

        let showTable = true
        if (!messages.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={messages}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default MessagesList
