import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import moment from 'moment';
import {FontFamily} from '../utils/Fonts';
import {Colors} from '../utils/Colors';
import DateTimePicker from '@react-native-community/datetimepicker';

const HorizontalCalendarTime = ({appointments = []}) => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

  useEffect(() => {
    generateNext14Days();
  }, []);

  const generateNext14Days = () => {
    const today = moment();
    const nextDates = [];

    for (let i = -2; i < 14; i++) {
      const date = moment().add(i, 'days');
      nextDates.push(date);
    }

    setDates(nextDates);
  };

  const isToday = date => date.isSame(moment(), 'day');
  const hasAppointment = date =>
    appointments.includes(date.format('YYYY-MM-DD'));

  const onDatePress = formatted => {
    setSelectedDate(formatted);
    setShowTimePicker(true);
  };

  const onTimeChange = (event, selected) => {
    if (selected) {
      setSelectedTime(selected);
    }
    setShowTimePicker(false);
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}>
        {dates.map((date, index) => {
          const formatted = date.format('YYYY-MM-DD');
          const day = date.format('ddd');
          const dayNumber = date.format('DD');

          const isSelected = selectedDate === formatted;
          const isUpcoming = hasAppointment(date);

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateItem,
                isToday(date) && styles.todayDate,
                isUpcoming && !isToday(date) && styles.upcomingDate,
                isSelected && styles.selectedBorder,
              ]}
              onPress={() => onDatePress(formatted)}>
              <Text
                style={[
                  styles.dayText,
                  isToday(date) || isUpcoming
                    ? styles.whiteText
                    : styles.grayText,
                ]}>
                {day}
              </Text>
              <Text
                style={[
                  styles.dateText,
                  isToday(date) || isUpcoming
                    ? styles.whiteText
                    : styles.grayText,
                ]}>
                {dayNumber}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Time Picker Modal */}
      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          display="spinner"
          onChange={onTimeChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    marginVertical: 10,
  },
  dateItem: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    marginRight: 8,
  },
  todayDate: {
    backgroundColor: '#00AEEF',
  },
  upcomingDate: {
    backgroundColor: '#BEEFFF',
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: '#0078B7',
  },
  dayText: {
    fontSize: 12,
    fontFamily: FontFamily.regular,
  },
  dateText: {
    fontSize: 16,
    fontFamily: FontFamily.semiBold,
  },
  whiteText: {
    color: Colors.black,
  },
  grayText: {
    color: Colors.black,
  },
});

export default HorizontalCalendarTime;
