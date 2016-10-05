import React from 'react';
import { reduxForm, Field }from 'redux-form';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addLodging } from '../../actions/action-creators'
require('../../../stylesheets/components/itinerary.scss');

//
// const addLodging = (values) => {
//   console.log(values)
// }

const renderTextField = ({ input, label, style }) => {
  return (
    <TextField {...input} hintText={label} style={style} />
  )
}

let LodgingInput = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <Field name='stay' component={renderTextField} label='Where are you staying?'
          style={{ display: 'inline-block', marginRight: '10px', width: '50%', fontSize: '12px' }}/>
        <Field name='nights' component={renderTextField} label='How many nights?'
          style={{ display: 'inline-block', marginRight: '10px', width: '25%', fontSize: '12px' }} />
        <RaisedButton type='submit' label='Add'
          style={{minWidth: '20px'}} labelStyle={{fontSize: '10px'}} />
      </form>
    </div>
  )
}

LodgingInput = reduxForm({
  form: 'lodging',
  onSubmit: ({ stay, nights }, dispatch, { dayId }) => {
    dispatch(addLodging(dayId, stay, nights))
  }
})(LodgingInput)
//
// const LodgingSummary = () => {
//   return (
//     <div>
//     </div>
//   )
// }

const getDayId = ({entities: { days }, currentDay}) => {
  return days.byId ? currentDay : ''
}

const mapState = (state) => {
  return { dayId: getDayId(state) }
}
//
// const LodgingInput = () => {
//   return (
//     <div>
//       <LodgingInput />
//       <LodgingSummary />
//     </div>
//   )
// }

module.exports = connect(mapState)(LodgingInput)
