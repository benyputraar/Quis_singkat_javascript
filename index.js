function cek_jawaban() {
  const presiden = document.querySelector("#presiden");
  const presiden_check = document.querySelector("#presiden_check");
  const bapak_teknologi = document.querySelector("#bapak_teknologi");
  const bapak_teknologi_check = document.querySelector("#bapak_teknologi_check");
  if (presiden.value == "soekarno") {
    presiden_check.innerHTML = "jawaban kamu benar";
    presiden_check.style = "color : green";
  } else {
    presiden_check.innerHTML = "jawaban kamu salah";
    presiden_check.style = "color : red";
  }
  if (bapak_teknologi.value == "habibi") {
    bapak_teknologi_check.innerHTML = "jawaban kamu benar";
    bapak_teknologi_check.style = "color : green";
  } else {
    bapak_teknologi_check.innerHTML = "jawaban kamu salah";
    bapak_teknologi_check.style = "color : red";
  }
}
