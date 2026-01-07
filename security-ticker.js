
document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById("securityTicker");
    const text = bar.querySelector(".security-text");

    function startTicker() {
        bar.style.display = "block";

        text.style.animation = "none";
        void text.offsetWidth;
        text.style.animation = "tickerMove 50s linear forwards";

        // اختفاء مباشر بعد انتهاء الحركة
        setTimeout(() => {
            bar.style.transition = "opacity 1.5s ease";
            bar.style.opacity = "0";

            setTimeout(() => {
                bar.style.display = "none";
            }, 1500); // مدة الفيد
        }, 25000); // نفس مدة الأنيميشن
    }

    startTicker();
});
