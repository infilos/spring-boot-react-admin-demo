import React from 'react';
import {List, Datagrid, ReferenceField, TextField, EmailField, EditButton} from 'react-admin';

export const PostList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="id"/>
            <TextField source="title"/>
            <TextField source="body"/>
            <EditButton/>
        </Datagrid>
    </List>
);