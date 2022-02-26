import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
    

    return {
        
        container : {
            width : "100%",
            height : "100%",
            display : 'flex',
        },
        left : {
            flex : 1,
            padding : "2em",
            justifyContent : "center"
        },
        right : {
            flex : 1,
            padding : "2em",
            justifyContent : "center"

        },
        

    };
});
  

export default useStyles