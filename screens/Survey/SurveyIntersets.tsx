import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import InterestButton from '../../components/Survey/InterestButton';
import ProgressBar from '../../components/Survey/ProgressBar';
// import QuestionCard from '../../components/Survey/QuestionCard';

interface InterestCategory {
  name: string;
  interests: string[];
}

const interestCategories: InterestCategory[] = [
  { name: 'Programming', interests: ['Python', 'C++', 'CSS'] },
  { name: 'Social Media', interests: ['Content Creator'] },
  { name: 'Business', interests: ['Product Manager', 'Logistics', 'HR', 'Operations', 'Sales', 'Promotions', 'B2B'] },
  { name: 'Technology', interests: ['Software Engineering', 'AI & Machine Learning', 'Robotics', 'Web Development'] },
  { name: 'Creative', interests: ['Photography', 'Art', 'Graphic Design', 'Music'] },
  { name: 'Professional', interests: ['Law', 'Accounting', 'Engineering', 'Market Analysis'] },
  { name: 'Other', interests: ['Sports', 'Design'] },
];

const InterestsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.interestsSection}>
          <ProgressBar progress={0.4} />
          <View style={styles.header}>
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/df5041409bd54b50ac7f1e7503165f15/cc6b638976fa798b9e056c865a838595ccdf47a49dad2729c0adbe56c9fe2d4f?apiKey=df5041409bd54b50ac7f1e7503165f15&" }}
              style={styles.backIcon}
            />
            <Text style={styles.skipText}>SKIP</Text>
          </View>
          <Text style={styles.title}>Interests</Text>
          <Text style={styles.subtitle}>
            Let AI know what you're interested in will suggest matching companies.
          </Text>
          <View style={styles.interestButtonsContainer}>
            {interestCategories.map((category, index) => (
              <View key={index} style={styles.categoryContainer}>
                {category.interests.map((interest, interestIndex) => (
                  <InterestButton key={interestIndex} label={interest} />
                ))}
              </View>
            ))}
          </View>
        </View>
        {/* <QuestionCard
          questionNumber={2}
          totalQuestions={5}
          question="Is mental health support in the workplace for you?"
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flexDirection: 'row',
    padding: 20,
  },
  interestsSection: {
    flex: 1,
    marginRight: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 20,
  },
  backIcon: {
    width: 15,
    height: 24,
  },
  skipText: {
    fontSize: 19,
    color: 'rgba(198, 197, 199, 0.5)',
    fontWeight: '400',
  },
  title: {
    fontSize: 38,
    fontWeight: '600',
    color: '#010001',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 13,
    color: '#C6C5C7',
    marginBottom: 27,
  },
  interestButtonsContainer: {
    flexDirection: 'column',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
});

export default InterestsScreen;