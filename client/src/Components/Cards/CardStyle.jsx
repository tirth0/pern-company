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
        card : {
            display : 'flex',
            flexDirection : 'column',
            width : "100%",
            height : "fit-content",
            maxWidth : "20em",
            padding : "1em",
            backgroundColor : theme.colorScheme !== 'dark'? theme.colors.gray[0]:theme.colors.dark[5],
            color : theme.colorScheme !== 'dark'? theme.colors.dark[9]:theme.colors.gray[0],
            margin : "1em 1em",
            borderRadius: "0.3em",
        }
        

    };
});
  

export default useStyles