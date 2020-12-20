import React from 'react';
import 'date-fns';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, TextField, Select, MenuItem, Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const DietPlan = props => {

    return (
        <div className="diet-plan">
            <div className="diet-plan-form">
                <FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date"
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        /></MuiPickersUtilsProvider>
                </FormControl>

                <FormControl>
                    <InputLabel id="demo-simple-select-label">Meal Type</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select">
                        <MenuItem value={'breakfast'}>Breakfast</MenuItem>
                        <MenuItem value={'lunch'}>Lunch</MenuItem>
                        <MenuItem value={'dinner'}>Dinner</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <TextField id="standard-basic" label="Item 1" />
                </FormControl>
                
                <FormControl>
                    <TextField id="standard-basic" label="Wt. in g" />
                </FormControl>

                <Fab size="small" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>

                <Fab size="small" aria-label="add">
                    <DeleteIcon />
                </Fab>

                <Button variant="contained" color="secondary">Save</Button>
                <Button variant="outlined" color="secondary">Reset</Button>
            </div>
        </div>
    )
}

export default DietPlan;
