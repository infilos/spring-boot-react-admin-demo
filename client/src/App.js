import * as React from "react";
import {Admin, Resource, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from "./user/UserList";
import {PostList} from "./post/PostList";
import {PostEdit} from "./post/PostEdit";
import {PostCreate} from "./post/PostCreate";
import {authProvider} from "./auth/AuthProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={UserList}/>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
    </Admin>
);

export default App;