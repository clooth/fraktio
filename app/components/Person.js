// External
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';

// Internal
import colors from 'constants/colors';

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.rotateValue = new Animated.Value(0)

    this.state = {
      flipped: false
    }
  }

  rotate = () => {
    const { flipped } = this.state;

    const rotation = flipped ? 0 : 180;

    this.setState({ flipped: !flipped })

    Animated.spring(this.rotateValue, {
      toValue: rotation,
      tension: 1.5,
      friction: 2,
    }).start();
  }

  render() {
    const {
      firstName,
      lastName,
      title,
      image,
    } = this.props;

    const interpolatedRotateAnimation = this.rotateValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });

    const interpolatedRotateAnimationBackwards = this.rotateValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '0deg'],
    });

    return (
      <TouchableOpacity
        onPress={this.rotate}
        style={styles.container}
        activeOpacity={.6}
      >
        <View style={styles.container}>
          <Animated.Image
            source={{ uri: image }}
            style={[
              styles.image,
              {
                transform: [
                  { perspective: 400 },
                  { rotateY: interpolatedRotateAnimation },
                ],
              }
            ]}
          />
          <Animated.View style={[
            styles.face,
            {
              transform: [
                { perspective: 400 },
                { rotateY: interpolatedRotateAnimationBackwards },
              ],
            }
            ]}
          >
            <Text style={[styles.text, styles.textName]}>{firstName} {lastName}</Text>
            <Text style={styles.text}>{title}</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>
    )
  }
}

const { width } = Dimensions.get('window');
const calculatedSize = width / 2;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: calculatedSize,
    height: calculatedSize,
  },
  image: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    width: calculatedSize,
    height: calculatedSize,
  },
  face: {
    backfaceVisibility: 'hidden',
    backgroundColor: '#E80C0C',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: calculatedSize,
    height: calculatedSize
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  textName: {
    fontSize: 20,
    paddingBottom: 8,
  },
})
