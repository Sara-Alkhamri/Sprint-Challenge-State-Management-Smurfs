import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const SumrfForm = props => {
    const {addSmurf, smurfs, error} = props;
    const [smurf, setSmurf] = useState({name:'', age:'', height:''});

    const handleChange = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addSmurf(smurf);
        setSmurf({name:'', age:'', height:''});
    }

    return (
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name="name"
        placeholder="Add Name"
        value={smurf.name}
        onChange={handleChange}
        />
        <input 
        type="number"
        name="age"
        placeholder="Add Age"
        value={smurf.age}
        onChange={handleChange}
        />
        <input 
        type="text"
        name="height"
        placeholder="Add Height"
        value={smurf.height}
        onChange={handleChange}
        />
        <button type='submit'>Add Smurf!</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error,
    }
}

export default connect(mapStateToProps, {addSmurf}) (SumrfForm);