import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
    

    return {
        nav : {
            width : '100%',
            fontFamily : theme.fontFamily,
            display : 'flex',
            justifyContent : 'flex-end',
            backgroundColor : theme.colorScheme === 'dark'? theme.colors.gray[9]:'white',

        },
        navList : {
            display : 'flex',
            gap :'2em',
            alignItems : 'center',
            padding : '0px 1em'
        },
        listItem : {
            listStyle : 'none',
            listStyleType : 'none',
            color : theme.colorScheme === 'dark'? theme.colors.gray[0]:theme.colors.dark[9],
            textDecoration : 'none',
            
        },
        project : {
            height : "100vh",
           
        },
        container : {
            height : "85vh",
            display :"flex",
            padding : "0.5em 4em 1em 0em",
        }

    };
});
  

export default useStyles