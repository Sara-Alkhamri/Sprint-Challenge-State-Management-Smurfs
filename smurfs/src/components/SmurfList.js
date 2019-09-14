import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfCard from './SmurfCard';


const SmurfList = props => {
    const {getSmurfs, smurfs, isFetching, error} = props;
    useEffect(() => {
        getSmurfs()
    },[getSmurfs])

    if(isFetching) {
        return <h2>Loading...</h2>
    }

    return (
    <div>
        
        {smurfs.map(item => <SmurfCard key={item.id} item={item}/>)}
    </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getSmurfs}) (SmurfList);