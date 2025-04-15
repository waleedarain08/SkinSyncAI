import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import { Colors } from '../../utils/Colors'; // adjust path if needed
import moment from 'moment';
import {FontFamily} from '../utils/Fonts';
import {Colors} from '../utils/Colors';

const HorizontalCalendar = ({appointments = []}) => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );

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

  return (
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
            onPress={() => setSelectedDate(formatted)}>
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
    backgroundColor: '#00AEEF', // dark blue
  },
  upcomingDate: {
    backgroundColor: '#BEEFFF', // light blue
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

export default HorizontalCalendar;
