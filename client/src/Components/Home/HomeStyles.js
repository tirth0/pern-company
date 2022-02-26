import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
    

    return {
        container : {
            display : 'flex',
            width : '100%',
            fontFamily : theme.fontFamilyMonospace,
            height : '100%',
            // backgroundColor : theme.colorScheme === 'dark'? theme.colors.gray[9]:'white',
        },
        left : {
            textAlign : 'left',
            padding : '4em 4em',
            flex : 1,
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'flex-end',
            gap : '1em',
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                justifyContent : 'flex-start',
                padding : "2em 2em"
            }
        },
        right : {
            flex : 1,
            position : 'relative',
            color : theme.colorScheme!=='dark'?theme.colors.grape[7]:theme.colors.yellow[5],
            overflow : 'hidden',
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                display : 'none',
            }

        },
        heading1 : {
            fontSize : '5em',
            color : theme.colorScheme==='dark'?theme.colors.gray[0]:theme.colors.gray[7],
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                fontSize : '3em',
            }
        },
        heading2 : {
            fontSize : '3em',
            color : theme.colorScheme==='dark'?theme.colors.gray[0]:theme.colors.gray[7],
            marginBottom : "-0.2em",
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                fontSize : '1.5em',
            }

        },
        subText : {
            fontSize : '2em',
            color : theme.colorScheme==='dark'?theme.colors.grape[3]:theme.colors.grape[7],
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                fontSize : '1.2em',
            }
        },
        text : {
            fontSize : '1.5em',
            color : theme.colorScheme==='dark'?theme.colors.gray[0]:theme.colors.gray[7],
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                fontSize : '1em',
                textAlign : 'left'
            }
        },
        accent : {
            color : theme.colorScheme==='dark'?theme.colors.grape[3]:theme.colors.grape[7],
        },
        ic1 : {
            width : '6em',
            height : '10em',
            position : 'absolute',
            top : '8em',
            right : '3em',
            transform : 'rotate(45deg)',

        },
        ic2 :{
            width : '6em',
            position : 'absolute',
            height : '8em',
            top : '7em',
            left : '6em',
            transform : 'rotate(50deg)',
        },
        ic3 : {
            width : '6em',
            height : '9em',
            left : '18em',
            position : 'absolute',
            top : '15em',
            right : '3em',
            transform : 'rotate(-60deg)',
        },
        ic4 : {
            width : '6em',
            height : '8em',
            position : 'absolute',
            bottom : '5em',
            right : '9em',
            transform : 'rotate(-15deg)',
        },
        ic5 : {
            width : '6em',
            height : '8em',
            position : 'absolute',
            bottom : '5em',
            left : '5em',
            transform : 'rotate(32deg)',
        }

    };
});
  

export default useStyles