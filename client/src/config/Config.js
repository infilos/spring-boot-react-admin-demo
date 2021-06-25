import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {useTranslate, useLocale, useSetLocale, Title} from 'react-admin';
import {makeStyles} from '@material-ui/core/styles';
import {changeTheme} from './action';

const useStyles = makeStyles({
    label: {width:"10em", display:"inline-block"},
    button: {margin: "1em"}
})

const Config = () => {
    const translate = useTranslate();
    const local = useLocale();
    const setLocale = uesSetLocale();
    const classes = useStyles();
    const theme = useSelector((state => state.theme))
}