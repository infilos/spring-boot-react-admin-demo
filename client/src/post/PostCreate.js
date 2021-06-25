import React from 'react';
import {Create, ReferenceInput, SelectInput, SimpleForm, TextInput} from 'react-admin';

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id"/>
            </ReferenceInput>
            <TextInput source="id"/>
            <TextInput source="title"/>
            <TextInput source="body"/>
        </SimpleForm>
    </Create>
);