(function () {
    const bar = document.getElementById("securityTicker");
    if (!bar) return;

    const text = bar.querySelector(".security-text");
    if (!text) return;

    function startTicker() {
        bar.style.display = "block";
        bar.style.opacity = "1";

        text.style.animation = "none";
        void text.offsetWidth;
        text.style.animation = "tickerMove 50s linear forwards";

        setTimeout(() => {
            bar.style.transition = "opacity 1.5s ease";
            bar.style.opacity = "0";

            setTimeout(() => {
                bar.style.display = "none";
            }, 1500);
        }, 25000); // ✅ نفس مدة الأنيميشن
    }

    startTicker();
})();


