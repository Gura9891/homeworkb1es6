
let math = document.querySelector("#inpToan");
let physic = document.querySelector("#inpLy");
let chemistry = document.querySelector("#inpHoa");
let literature = document.querySelector("#inpVan");
let history = document.querySelector("#inpSu");
let geography = document.querySelector("#inpDia");
let eng = document.querySelector("#inpEnglish");


function avgScore(...ipNumber) {
  let sum = 0;
  let avg = 0;
  ipNumber.forEach((score) => {
    sum += score;
  });
  return (avg = sum / ipNumber.length);
}
// khối 1
document.querySelector("#btnKhoi1").onclick = function () {
  let index = validationLeft();
  if (index == 1) {
    return;
  }
  let mathScore = Number(math.value);
  let physicScore = Number(physic.value);
  let chemistryScore = Number(chemistry.value);
  document.querySelector("#tbKhoi1").innerHTML = avgScore(
    mathScore,
    physicScore,
    chemistryScore
  ).toFixed(2);
};

// khối 2
document.querySelector("#btnKhoi2").onclick = function () {
  let index = validationRight();
  if (index == 1) {
    return;
  }
  let literatureScore = Number(literature.value);
  let historyScore = Number(history.value);
  let geographyScore = Number(geography.value);
  let engScore = Number(eng.value);
  document.querySelector("#tbKhoi2").innerHTML = avgScore(
    literatureScore,
    historyScore,
    geographyScore,
    engScore
  ).toFixed(2);
};
//validation
export const validationLeft = () => {
  if (!math.value || Number(math.value) < 0 || Number(math.value) > 10 || !Number(math.value)) {
    alert("Điểm Toán không hợp lệ");
    return 1;
  }

  if (!physic.value || Number(physic.value) < 0 || Number(physic.value) > 10 || !Number(physic.value)) {
    alert("Điểm Lý không hợp lệ");
    return 1;
  }

  if (
    !chemistry.value ||
    Number(chemistry.value) < 0 || Number(chemistry.value) > 10 ||
    !Number(chemistry.value)
  ) {
    alert("Điểm Hóa không hợp lệ");
    return 1;
  }
};

export const validationRight = () => {
  if (
    !literature.value ||
    Number(literature.value) < 0 || Number(literature.value) > 10 ||
    !Number(literature.value)
  ) {
    alert("Điểm Văn không hợp lệ");
    return 1;
  }

  if (!history.value ||Number(history.value) < 0 ||  Number(history.value) > 10 || !Number(history.value)) {
    alert("Điểm Sử không hợp lệ");
    return 1;
  }

  if (
    !geography.value ||
    Number(geography.value) < 0 || Number(geography.value) > 10 ||
    !Number(geography.value)
  ) {
    alert("Điểm Địa không hợp lệ");
    return 1;
  }

  if (!eng.value ||Number(eng.value) < 0|| Number(eng.value) > 10 || !Number(eng.value)) {
    alert("Điểm Anh Văn không hợp lệ");
    return 1;
  }
};



