import React from 'react'
import useStyles from './HomeStyles'
import Typewriter from "typewriter-effect";
import { FileTextIcon, PaperPlaneIcon, RocketIcon, ChatBubbleIcon, CrumpledPaperIcon} from '@modulz/radix-icons';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';

export default function Home() {
    const {classes, cx } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <p className={classes.heading2}>Welcome to </p>
                <p className={classes.heading1}><span className={classes.accent}>{"<"}</span>Elaichi<span className={classes.accent}>{"/>"}</span></p>

                <p className={classes.subText}>

                    <Typewriter
        
                        onInit={(typewriter)=> {
                            typewriter
                            .typeString("Product Manager?")  
                            .pauseFor(500)
                            .deleteAll()
                            .typeString("Agile Developer?")  
                            .pauseFor(500)
                            .deleteAll()
                            .typeString("Student?")  
                            .pauseFor(500)
                            .deleteAll()
                            .typeString("Your Product Management Atlas")
                            .start();
                        }}
                        options={{
                            delay : 25,
                            deleteSpeed : 25
                        }}
                    />
                </p>
                <p className={classes.text}>
                    The perfect tool for agile development. Keep track of multiple lists, assignments, user stories and much more. Easy maintanability, rapid scaling and easy go to market strategies are made with AgileFlow Technology.<br></br><br></br>Hop on, what are you waiting for?
                </p>
            </div>
            <div className={classes.right}>
                    
                <FileTextIcon
                    className={classes.ic1} 
                />
            
                <PaperPlaneIcon
                    className={classes.ic2}
                />
            
                <RocketIcon
                    className={classes.ic3}
                />
            
                <ChatBubbleIcon
                    className={classes.ic4}
                />

                <CrumpledPaperIcon
                    className={classes.ic5}
                />
                    
            </div>
        </div>
    )
}
