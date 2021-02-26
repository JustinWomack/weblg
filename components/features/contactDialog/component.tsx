import { FunctionComponent, useState } from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    DialogTitle,
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Button,
    OutlinedInput,
} from '@material-ui/core';
import validator from 'validator';

const styles = (theme: Theme) =>
    createStyles({
        form: {
            height: 450,
            width: 400,
            padding: 25,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
        },
        helperText: {
            height: 19,
        },
        requiredText: {
            textAlign: 'right',
        }
    });

interface Props extends WithStyles<typeof styles> {
    open: boolean;
    onClose: () => void;
    onOpen: () => void;
    onToggle: () => void;
}

type tErrMsg = string
type tField = {
    name: string;
    validate: (value: string) => tErrMsg;
    value: string;
    errMsg: tErrMsg;
    multiline: boolean;
}
type tFields = {[key: string]: tField}

const Component: FunctionComponent<Props> = (props: Props) => {
    const { classes, open, onClose, onOpen, onToggle, } = props;

    const initialState: tFields = {
        'entry.818304712': {
            name: 'Name',
            validate: (value: string) => (''),
            value: '',
            errMsg: '',
            multiline: false,
        },
        'entry.2100545406': {
            name: 'Email',
            validate: (value: string) => (validator.isEmail(value) ? '' : 'Please enter a valid email.'),
            value: '',
            errMsg: '',
            multiline: false,
        },
        'entry.1133621811': {
            name: 'Message',
            validate: (value: string) => (validator.isLength(value, {min: 25}) ? '' : 'Please enter a meaningful message.'),
            value: '',
            errMsg: '',
            multiline: true,
        },
    }

    const [ inputValues, setInputValue ] = useState({...initialState});

    const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;

        setInputValue(prevState => {
            return({
                ...prevState,
                [name]: {
                    ...prevState[name],
                    value: value,
                    errMsg: value ? prevState[name].validate(value) : '',
                }
            })
        });
    }

    const onCloseDialog = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setInputValue({...initialState});
        onClose();
    }

    const isValid = Object.values(inputValues).reduce((agg, field) => agg && !!field.value && !field.errMsg, true)

    const generateForm = () => {
        return(
            <form id='contact-form' className={classes.form} action={'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdQLAX9b7LrFRa8J_gMcIo0wA3TBGjJ3Jsc33Eh7h9VDrE1-w/formResponse'}>
                {
                    Object.keys(inputValues).map((key, i) => {
                        const { name, value, errMsg, multiline } = inputValues[key];
                        const hasErr = !!errMsg;

                        return(
                            <FormControl key={i}>
                                <InputLabel htmlFor={`${key}-input`} error={hasErr} required>{name}</InputLabel>
                                {
                                    multiline ?
                                    <OutlinedInput
                                        id={`${key}-input`}
                                        name={key}
                                        value={value}
                                        onChange={onChangeValue}
                                        error={hasErr}
                                        aria-describedby={`${key}-input-text`}
                                        autoComplete='off'
                                        spellCheck={false}
                                        multiline
                                        rows={5}
                                    />
                                    :
                                    <Input
                                        id={`${key}-input`}
                                        name={key}
                                        value={value}
                                        onChange={onChangeValue}
                                        error={hasErr}
                                        aria-describedby={`${key}-input-text`}
                                        autoComplete='off'
                                        spellCheck={false}
                                    />
                                }
                                <FormHelperText id={`${key}-input-text`} className={classes.helperText} error={hasErr}>
                                    {
                                        value && errMsg
                                    }
                                </FormHelperText>
                            </FormControl>
                        )
                    })
                }
            </form>
        )
    }

    return (
        <Dialog open={open} onClose={onCloseDialog}>
            <DialogTitle>
                Contact Form
            </DialogTitle>
            <DialogContent>
                {generateForm()}
                <DialogContentText className={classes.requiredText}>
                    * field is required
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='text' color='secondary' onClick={onCloseDialog}>
                    Cancel
                </Button>
                <Button variant='outlined' color='primary' disabled={!isValid} type={'submit'} form='contact-form'>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default withStyles(styles)(Component);
