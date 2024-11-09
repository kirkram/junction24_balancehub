import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar';

interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  question: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ questionNumber, totalQuestions, question }) => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={questionNumber / totalQuestions} />
      <Text style={styles.questionNumber}>Question {questionNumber}/{totalQuestions}</Text>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  questionNumber: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  question: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#5E8D83',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '45%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#5E8D83',
    paddingVertical: 15,
    borderRadius: 30,
    marginTop: 20,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default QuestionCard;