const deg = 6;
        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#mn');
        const sn = document.querySelector('#sn');

        setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sn.style.transform = `rotateZ(${ss}deg)`;
        })