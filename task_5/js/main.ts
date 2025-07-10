// Interfaces
interface MajorCredits {
  credits: number;
  // brand property to uniquely identify
  __brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  // brand property to uniquely identify
  __brand: 'MinorCredits';
}

// Functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits'
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits'
  };
}

