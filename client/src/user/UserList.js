import * as React from "react";
import {Datagrid, List, TextField} from 'react-admin';
import CustomEmailField from "../coms/CustomEmailField";

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="username"/>
            <CustomEmailField source="email"/>
            <TextField source="address.street" label="Street Address"/>
            <TextField source="phone" sortable={false}/>
            <TextField source="website"/>
            <TextField source="company.name" label="Company Name"/>
        </Datagrid>
    </List>
);