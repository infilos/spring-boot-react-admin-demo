export const CHANGE_THEME = 'CHANGE_THEME';

export const changeTheme = (theme: String) => ({
    type: CHANGE_THEME,
    payload: theme
})