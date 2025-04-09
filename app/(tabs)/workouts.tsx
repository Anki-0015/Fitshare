import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Play, Clock, Dumbbell } from 'lucide-react-native';

export default function WorkoutsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Workouts</Text>
          <Text style={styles.subtitle}>Choose your workout for today</Text>
        </View>

        {[
          {
            id: 1,
            title: 'Full Body HIIT',
            duration: '30 min',
            difficulty: 'Intermediate',
            exercises: 12,
          },
          {
            id: 2,
            title: 'Upper Body Strength',
            duration: '45 min',
            difficulty: 'Advanced',
            exercises: 15,
          },
          {
            id: 3,
            title: 'Core Crusher',
            duration: '20 min',
            difficulty: 'Beginner',
            exercises: 8,
          },
        ].map(workout => (
          <TouchableOpacity key={workout.id} style={styles.workoutCard}>
            <View style={styles.workoutHeader}>
              <Text style={styles.workoutTitle}>{workout.title}</Text>
              <View style={styles.playButton}>
                <Play size={20} color="#007AFF" />
              </View>
            </View>
            
            <View style={styles.workoutDetails}>
              <View style={styles.detailItem}>
                <Clock size={16} color="#666" />
                <Text style={styles.detailText}>{workout.duration}</Text>
              </View>
              <View style={styles.detailItem}>
                <Dumbbell size={16} color="#666" />
                <Text style={styles.detailText}>{workout.exercises} exercises</Text>
              </View>
            </View>
            
            <View style={styles.difficultyBadge}>
              <Text style={styles.difficultyText}>{workout.difficulty}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  workoutCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutTitle: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  workoutDetails: {
    flexDirection: 'row',
    marginTop: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    marginLeft: 6,
    color: '#666',
    fontFamily: 'Inter_400Regular',
  },
  difficultyBadge: {
    position: 'absolute',
    top: 16,
    right: 70,
    backgroundColor: '#f0f9ff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    color: '#007AFF',
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
  },
});