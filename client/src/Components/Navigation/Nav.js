import React from 'react'
import useStyles from './NavStyle'
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import {Link} from 'react-router-dom'

export default function Nav() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const {classes, cx} = useStyles();
    const dark = colorScheme === 'dark';
    return (
        <>
        <div>
            <nav className={classes.nav}>
                <ul className={classes.navList}>
                    <li >
                        <Link className={classes.listItem} to="/project">Home</Link>
                    </li>
                    <li >
                        <Link className={classes.listItem} to="/login">Join</Link>
                    </li>
                    
                    <ActionIcon
                        variant="outline"
                        color={dark ? 'yellow' : 'blue'}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? (
                            <SunIcon style={{ width: 18, height: 18 }} />
                        ) : (
                            <MoonIcon style={{ width: 18, height: 18 }} />
                        )}
                    </ActionIcon>
                </ul>
            </nav>
            <nav className={classes.nav2}>
                
            </nav>
            
        </div>
        
        </>
    )
}
