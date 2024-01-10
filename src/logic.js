const subject = {
    english: [100, 200, 300],
    social: [200, 400, 600]
  };
  
  const total = Object.values(subject).map(subArray => subArray.reduce((acc, val) => acc + val, 0));
  
  console.log(total);
  // Output: [600, 1200]
  