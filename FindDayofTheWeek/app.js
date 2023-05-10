function getDayofWeek(input) {
  inputArray = input.split("/");
  let dayCheck = new Date(
    `${inputArray[1]}/${inputArray[0]}/${inputArray[2]}`
  ).getDay();
  let weekDayArray = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  console.log(`Ngày đã nhập ${input} là thứ ${weekDayArray[dayCheck]}`);
}

getDayofWeek("20/12/2021");
getDayofWeek("11/5/2023");
