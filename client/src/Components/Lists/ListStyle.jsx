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
        container : {
            
            minWidth : "fit-content",
            height : "100%",
            color : theme.colorScheme !== 'dark'? theme.colors.dark[9]:theme.colors.gray[0],
            backgroundColor : theme.colorScheme !== 'dark'? "rgba(223, 227, 231, 0.5)" : "rgba(92, 95, 102, 0.5)",
            padding : "0.5em",
            margin  : "1em",
            overflow: "scroll !important",
            height : "100%",
            [' &::-webkit-scrollbar'] : {
                width: '0 !important'
            },
            borderRadius: "0.5em",
            display : "inline-block",
            boxSizing : "border-box",
              
        },
        title : {
            padding: "0em 1em"
        }


    };
});
  

export default useStyles