// Defining an interface for MajorCredits with a unique brand property
interface MajorCredits {
  credits: number;  // Number of credits for a major subject
  brand: "major";   // Unique identifier to distinguish from minor credits
}

// Defining an interface for MinorCredits with a unique brand property
interface MinorCredits {
  credits: number;  // Number of credits for a minor subject
  brand: "minor";   // Unique identifier to distinguish from major credits
}

// Function to sum credits for major subjects
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return subject1.credits + subject2.credits;  // Summing the credits of two major subjects
}

// Function to sum credits for minor subjects
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  return subject1.credits + subject2.credits;  // Summing the credits of two minor subjects
}
