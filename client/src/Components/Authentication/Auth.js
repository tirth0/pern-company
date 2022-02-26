import React from 'react'
import { useState } from 'react';
import { TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import useStyles from './AuthStyle'


export default function Auth() {
    const {classes, cx} = useStyles();
    const form1 = useForm({
        initialValues: {
          email: '',
          termsOfService: false,
        },
    
        validationRules: {
          email: (value) => /^\S+@\S+$/.test(value),
        },
    });

    const form2 = useForm({
        initialValues: {
            company: '',
            password: '',
        },

    })

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <form className={classes.formStyle} onSubmit={form1.onSubmit((values) => console.log(values))}>
                    <TextInput
                        label="Company Name"
                        placeholder="Company name"
                        required
                    >
                    </TextInput>
                </form>
            </div>
            <div className={classes.right}>
                <form className={classes.formStyle} onSubmit={form2.onSubmit((values) => console.log(values))}>
                    <TextInput
                        label="Username"
                        placeholder="Username"
                        required
                    >
                    </TextInput>
                </form>
            </div>
        </div>
    )
}
