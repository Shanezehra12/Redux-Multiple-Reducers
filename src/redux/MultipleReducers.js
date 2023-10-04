import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme} from '../redux/action/Actions';

const MultipleReducers = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.ThemeReducer);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme === 'DARK' ? '#fff' : '#000'
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: theme === 'DARK' ? '#000' : '#fff',
          width: 200,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
        onPress={() => {
          if (theme === 'DARK') {
            dispatch(changeTheme('LIGHT'));
          } else {
            dispatch(changeTheme('DARK'));
          }
        }}>
        <Text style={{color: theme === 'DARK' ? '#fff' : '#000', fontSize: 20}}>
          Change Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MultipleReducers;
