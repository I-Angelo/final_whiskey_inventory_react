import { Navbar } from '../Navbar'
import React, { useState } from 'react'
import firebase from 'firebase/app';
import { useAuth,  AuthCheck } from 'reactfire';
import 'firebase/auth';
import { Input } from '../SharedComponents/Input';
import { Container, Button, makeStyles, Typography, Snackbar  } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseBrand, chooseYear, chooseMalt, chooseGrain } from '../../redux/slices/RootSlice';
import { Link } from 'react-router-dom';
import { Drawer as MUIDrawer, 
    ListItem, 
    List, 
    ListItemIcon,
    ListItemText,
    Theme,
    useTheme,
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Divider,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
     } from '@material-ui/core';

import { server_calls } from '../../api';
import { RegisterForm } from '../SignUpForm'
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from "react-router-dom";
import { DataTable } from '../DataTable';
import image from '../../assets/images/Ammunition+Bourbon.jpeg'





const useStyles = makeStyles({
  googleButton:{
      backgroundColor: 'rgb(66,133,244)',
      marginTop: '2em',
      padding: '0',
      color: 'white',
      height: '50px',
      width: '240px',
      border: 'none',
      textAlign: 'center',
      boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
      fontSize: '16px',
      lineHeight: '48px',
      display: 'block',
      borderRadius: '1px',
      fontFamily: 'Roboto, arial, sans-serif',
      cursor: 'pointer'
  },
  googleLogo:{
      width: '48px',
      height: '48px',
      display: 'block'
  },
  typographyStyle: {
      fontFamily: 'Roboto, arial, sans-serif;',
      textAlign: 'center',
      fontSize: '2em'
  },
  containerStyle: {
      marginTop: '2em'
  },
  snackBar: {
      color: 'white',
      backgroundColor: '#4caf50'
  },

  background: {
    backgroundImage: `url(${image})`,
    // bacgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    // backgroundPosition: 'top',
    backGroundSize: 'auto',
    // position: 'fixed',
    // opacity: 0.5,
    zIndex: -1,
    position: 'absolute'
}

});

interface RegisterProps {
    history : RouteComponentProps["history"];
    location : RouteComponentProps['location'];
    match : RouteComponentProps['match'];
}

interface WhiskeyState {
  email: string;
  password: string;

}

interface WhiskeyFormProps {
  id?:string;
  data?:{}
}


  interface WhiskeyState {
    name: string;
    email: string;
    address: string;
    phone_number: string;
  }


export const SignUp = withRouter((props:RegisterProps ) => {

    console.log(props);
    const { history } = props;
    const auth = useAuth();
    const classes = useStyles();

    // const dispatch = useDispatch(); 
    const store = useStore();
    // const name = useSelector<WhiskeyState>(state => state.name);
    // const { register, handleSubmit } = useForm({ })

    // const onSubmit = (data:any, event:any) => { 
    //     server_calls.createUser(store.getState()); 
    //     setTimeout( () => {window.location.reload()}, 1000)
    // };  //This is what was reloading the page and taking me nowhere

    // const [dialogOpen, setDialogOpen] = useState(false);

    // 

    // export const Inventory = withRouter(( props:InventoryProps ) => {
    // console.log(props);
    // const { history } = props;
    // const classes = useStyles();
    // const theme = useTheme();
    // const [open, setOpen] = useState(false);

    const [dialogOpen, setDialogOpen] = useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false)
    // };

    const handleDialogClickOpen = () => {
        setDialogOpen(true)
    };

    const handleDialogClickClose = () => {
        setDialogOpen(false)
    };





    // 
  


      return (
          <div>
              <Navbar />
              <div className={classes.background}>
              <Container maxWidth = 'sm' className={classes.containerStyle}>
                  <Typography className={classes.typographyStyle}>Sign Up Below</Typography>
                  <div className={classes.typographyStyle} > {/*onSubmit = {handleSubmit(onSubmit)}*/}
                        {/* <div>
                          <label htmlFor="email">Email</label>
                          <Input {...register('email')} name="email" placeholder="Place Email Here" />
                        </div>
                        <div >
                            <label htmlFor="first_name">First Name</label>
                            <Input {...register('first_name')}name="email" placeholder="Place First Name Here" />
                        </div>
                        <div >
                            <label htmlFor="last_name">Last Name</label>
                            <Input {...register('last_name')}name="email" placeholder="Place Last Name Here" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Input {...register('password')} name="password" placeholder="Place Password Here" />
                        </div> */}
                        <Button type="submit" variant='contained' color='primary' onClick={handleDialogClickOpen}>Sign Up Form</Button>
                        {/* <Button type="submit" variant='contained' color='primary' >Sign Up! */}
                            {/* <Link to='/SignIn'></Link> */}
                        {/* </Button> */}
                            <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">New User Form</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText></DialogContentText>
                                        <RegisterForm />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleDialogClickClose} color="primary">Cancel</Button>
                                        <Button onClick={handleDialogClickOpen} color="primary">Done</Button>
                                    </DialogActions>
                            </Dialog>
                  </div>
                  <div className={classes.typographyStyle} >Feature Currently Unavailable</div>
              </Container>
              </div>
          </div>
  )
});

//  <Button className={classes.toolbar_button} onClick={handleDialogClickOpen}>Sign Up Form</Button>

                    {/* Dialog Pop Up */}
                    // <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                    //     <DialogTitle id="form-dialog-title">Add New Whiskey Record</DialogTitle>
                    //     <DialogContent>
                    //         <DialogContentText></DialogContentText>
                    //         <WhiskeyForm />
                    //     </DialogContent>
                    //     <DialogActions>
                    //         <Button onClick={handleDialogClickClose} color="primary">Cancel</Button>
                    //         <Button onClick={handleDialogClickOpen} color="primary">Done</Button>
                    //     </DialogActions>
                    // </Dialog>
                    {/* End dialog pop-up */}