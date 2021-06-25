import React from 'react';
import {Edit, ReferenceInput, SelectInput, SimpleForm, TextInput} from 'react-admin';

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id"/>
            </ReferenceInput>
            <TextInput source="id"/>
            <TextInput source="title"/>
            <TextInput source="body"/>
        </SimpleForm>
    </Edit>
);