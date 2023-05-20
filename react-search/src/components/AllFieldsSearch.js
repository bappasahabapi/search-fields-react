import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../data';


function AllFieldsSearch() {

    // console.log(data)
    const [search, setSearch] = useState('');
    console.log(search)

    return (
        <Container>
            <h1 className='text-center mt-4'>Search by First name / Last name /email /phone no</h1>
            <Form>
                <InputGroup className='my-3'>
                    <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search contacts'
                    />
                </InputGroup>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.filter((searchTextItem) => {
                        {/* return search.toLowerCase() === '' ? searchTextItem
                        : searchTextItem.first_name.toLowerCase().includes(search) */}

                        if (search.toLowerCase() === '') {
                            return searchTextItem;
                        }
                        else {
                            const firstNameMatch = searchTextItem.first_name.toLowerCase().includes(search);
                            const lastNameMatch = searchTextItem.last_name.toLowerCase().includes(search);
                            const emailMatch = searchTextItem.email.toLowerCase().includes(search);
                            const phoneMatch = searchTextItem.phone.includes(search);
                            return firstNameMatch || lastNameMatch || emailMatch || phoneMatch;
                            {/* return searchTextItem.first_name.toLowerCase().includes(search); */}
                        }

                    }).map((item) => (
                        <tr key={item.id}>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))

                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default AllFieldsSearch;