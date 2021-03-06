import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
    

    return {
        nav : {
            width : '100vw',
            position : 'fixed',
            fontFamily : theme.fontFamily,
            display : 'flex',
            justifyContent : 'flex-end',
            // backgroundColor : theme.colorScheme === 'dark'? theme.colors.gray[9]:theme.colors.blue[0],

        },
        nav2: {
            width : '100%',
            height : "3.7em",
            fontFamily : theme.fontFamily,
            display : 'flex',
            justifyContent : 'flex-end',
            backgroundColor : 'transparent',
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
        

    };
});
  

export default useStyles