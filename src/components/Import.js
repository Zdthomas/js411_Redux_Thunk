import React from 'react'
import { Button, Container, Table,TableBody, TableHead, TableRow, TableCell } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Import = (props) => {

    const options = ['Delete'];
    const ITEM_HEIGHT = 48;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    // fill out this component
    // console.log(props)

    return (
        

        <Container maxWidth="lg" className="car-container">
            
            <div className="flex-container">

            {/* <button onClick={props.fetchMakes}>Import</button> */}
            <Button onClick={props.fetchMakes}

                variant="contained">Import</Button>
                        
                        <h1>Count:</h1>
            
                        <h1>{props.makes.length}</h1>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.makes.map((makes, idx) => (
                    <TableRow key={makes.id}>

                        <TableCell component="th" scope="row">
                            {makes["MakeId"]}
                        </TableCell>

                        <TableCell>{makes["MakeName"]}</TableCell>
                        
                        <TableCell>

                            <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={open ? 'long-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon />

                            </IconButton>
                            
                        </TableCell>
                        
                    </TableRow>
                ))}
                </TableBody>
            </Table>

            

            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                
                {options.map((option,idx) => (
                    <MenuItem key={option} selected={option === 'Delete'} onClick={(event) => {
                        props.deleteMake(idx);
                        handleClose();}}>
                      
                        {option}
                    </MenuItem>
                ))}
            </Menu>

        </Container>
    )
}

export default Import