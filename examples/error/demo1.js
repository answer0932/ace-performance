function ace() {
  console.log(index);
}
document.getElementById('js-btn-error').addEventListener('click', () => {
  //故意输出未赋值的变量
  ace();
});

document.getElementById('js-img').setAttribute('src', '404.png');
