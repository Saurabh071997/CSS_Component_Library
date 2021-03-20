
const slider = document.getElementById('slider')
const selector = document.getElementById('selector')
const selectValueNum = document.getElementById('select-value-num')
const progressbar = document.getElementById('progress-bar')

selectValueNum.innerHTML = slider.value;

slider.oninput = function(){
    selectValueNum.innerHTML = this.value;
    selector.style.left = this.value + "%";
    progressbar.style.width = this.value + "%";
}