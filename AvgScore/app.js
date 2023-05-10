let studentList = [
  {
    name: "Ha",
    gender: "female",
    point: 8,
  },
  {
    name: "Huy",
    gender: "male",
    point: 9,
  },
  {
    name: "Hung",
    gender: "male",
    point: 7,
  },
  {
    name: "Phuong",
    gender: "female",
    point: 6,
  },
  {
    name: "Huyen",
    gender: "female",
    point: 10,
  },
  {
    name: "Long",
    gender: "male",
    point: 5,
  },
  {
    name: "Luan",
    gender: "male",
    point: 10,
  },
  {
    name: "Linh",
    gender: "female",
    point: 8,
  },
];

function avgStudentScore(array) {
  let femaleCounter = 0;
  let totalFemaleScore = 0;
  let maleCounter = 0;
  let totalMaleScore = 0;
  array.forEach((item) => {
    if (item.gender === "female") {
      totalFemaleScore += item.point;
      femaleCounter++;
    } else {
      totalMaleScore += item.point;
      maleCounter++;
    }
  });
  console.log(`Có ${femaleCounter} bạn nữ với điểm số trung bình là ${
    totalFemaleScore / femaleCounter
  }
   & có ${maleCounter} bạn nam với điểm số trung bình là ${
    totalMaleScore / maleCounter
  }`);
}

avgStudentScore(studentList);
