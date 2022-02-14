import React from 'react';
import { InputAdornment, 
    TextField, 
    Button, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    makeStyles
} from '@material-ui/core';
import { AddBoxOutlined, LinkIcon } from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    urlInput: {
        margin: theme.spacing(1)
    },
    addSongButton: {
        margin: theme.spacing(1)
    },
    dialog: {
        textAlign: 'center'
    },
    thumbnail: {
        width: '90%'
    }
}))

function AddSong() {
    const classes = useStyles()
    const [dialog, setDialog] = React.useState(false)

    function handleCloseDialog() {
        setDialog(false)
    }

    return (
        <div className={classes.container}>
            <Dialog className={classes.dialog}
                open={dialog}
                onClose={handleCloseDialog}
            >
                <DialogTitle>Edit Song</DialogTitle>
                <DialogContent>
                    <img src="https://i1.sndcdn.com/artworks-000670470790-ej1gvb-t500x500.jpg"
                    alt='Song thumbnail'
                    className={classes.thumbnail}
                    />
                    <TextField 
                        margin='dense'
                        name='title'
                        label='Title'
                        fullWidth
                    />
                    <TextField 
                        margin='dense'
                        name='artist'
                        label='Artist'
                        fullWidth
                    />
                    <TextField 
                        margin='dense'
                        name='thumbnail'
                        label='Thumbnail'
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color='primary'>Cancel</Button>
                    <Button variant='outlined' color='secondary'>Add song</Button>
                </DialogActions>
            </Dialog>
            <TextField 
                className={classes.urlInput}
                placeholder='Add YouTube or Soundcloud URL'
                fullWidth
                margin='normal'
                type='url'
                InputProps={{
                    startAdorment: (
                        <InputAdornment position='start'>
                            <LinkIcon />
                        </InputAdornment>
                    )
                }}
            />
            <Button 
                className={classes.addSongButton}
                onClick={() => setDialog(true)}
                variant='contained'
                color='secondary'
                endIcon={<AddBoxOutlined />}
            >
                Add
            </Button>
        </div>    
    )
}

export default AddSong;