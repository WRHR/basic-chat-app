import {useState} from 'react'
import { 
  Paper, 
  Typography, 
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Chip, 
  Button,
  TextField
} from '@material-ui/core';
import { CTX } from './Store'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'
  },
  chatWindow: {
    width: '70%',
    height: '300px',
    padding: '20px'
  },
  chatBox: {
    width:'85%'
  },
  button: {
    width: '15%'
  },
}))

export default function Dashboard() {

  const classes = useStyles()

  const [textValue, changeTextValue] = useState('')

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant='h4' component='h4'>
          Chat App
        </Typography>
        <Typography variant='h5' component='h5'>
          Topic Placeholder
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
                {
                  ['topic'].map(topic => (
                    <ListItem button> 
                      <ListItemText key={topic} primary={topic} />
                    </ListItem>
                  
                  ))
                }
            </List>
          </div>
          <div className={classes.chatWindow}>
            <List>
                {
                  [{from: 'user', msg: 'hello'}].map((chat,i) => (
                    <div className={classes.flex} key={i}>
                      <Chip label={chat.from} className={classes.chip}/>
                      <Typography variant='p'>{chat.msg}</Typography>
                    </div>
                  ))
                }
            </List>
          </div>
        </div>
        <div className={classes.flex}>
          <TextField 
            label='Send a message'
            className={classes.chatBox}
            value={textValue}
            onChange={(e)=> changeTextValue(e.target.value)}

          />
          <Button variant='contained' color='primary'>
            Send
          </Button>
        </div>
      </Paper>
    </div>
  )
}
