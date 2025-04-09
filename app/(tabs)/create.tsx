import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Clock, Dumbbell, Tag } from 'lucide-react-native';

export default function CreateWorkoutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Create Workout</Text>
          <Text style={styles.subtitle}>Share your workout routine</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Workout Title</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., Morning HIIT Routine"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe your workout..."
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>Duration</Text>
              <View style={styles.iconInput}>
                <Clock size={20} color="#666" />
                <TextInput
                  style={styles.iconInputText}
                  placeholder="30"
                  placeholderTextColor="#999"
                  keyboardType="number-pad"
                />
                <Text style={styles.inputSuffix}>min</Text>
              </View>
            </View>

            <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
              <Text style={styles.label}>Exercises</Text>
              <View style={styles.iconInput}>
                <Dumbbell size={20} color="#666" />
                <TextInput
                  style={styles.iconInputText}
                  placeholder="12"
                  placeholderTextColor="#999"
                  keyboardType="number-pad"
                />
                <Text style={styles.inputSuffix}>exercises</Text>
              </View>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tags</Text>
            <View style={styles.iconInput}>
              <Tag size={20} color="#666" />
              <TextInput
                style={styles.iconInputText}
                placeholder="strength, cardio, hiit"
                placeholderTextColor="#999"
              />
            </View>
          </View>

          <View style={styles.difficultySection}>
            <Text style={styles.label}>Difficulty Level</Text>
            <View style={styles.difficultyButtons}>
              {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <TouchableOpacity
                  key={level}
                  style={[
                    styles.difficultyButton,
                    level === 'Intermediate' && styles.difficultyButtonActive,
                  ]}>
                  <Text
                    style={[
                      styles.difficultyButtonText,
                      level === 'Intermediate' && styles.difficultyButtonTextActive,
                    ]}>
                    {level}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Create Workout</Text>
          </TouchableOpacity>
        </View>
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
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#1a1a1a',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconInput: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconInputText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#1a1a1a',
  },
  inputSuffix: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#666',
    marginLeft: 4,
  },
  difficultySection: {
    marginBottom: 24,
  },
  difficultyButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  difficultyButton: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  difficultyButtonActive: {
    backgroundColor: '#007AFF',
  },
  difficultyButtonText: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    color: '#666',
  },
  difficultyButtonTextActive: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#fff',
  },
});