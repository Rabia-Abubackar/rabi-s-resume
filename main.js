const progress_bars = document.querySelectorAll('.progress');

progress_bars.forEach( bar => {
    var bar_progress = bar.value;
    const original_bar_value = bar.value;
    const final_bar_progress = bar.value * 10; 
   
    while (bar_progress < final_bar_progress) {
        setTimeout(() => {    
            bar.value = bar_progress;
            }, 1000);
            bar_progress += original_bar_value;
    }
});

