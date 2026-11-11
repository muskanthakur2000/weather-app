let searchelement = document.querySelector("#search");
let cityName = document.querySelector("#cityname");
let day = new Date()


let responselmenet = document.querySelector("#respons")
searchelement.addEventListener(
    "submit",
    async (event) => {
        event.preventDefault()
        let city = event.target.city.value
        ///api link//
        let apirespons = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)

        let data = await apirespons.json();
        console.log(data);


        responselmenet.innerHTML = `<section class="py-7 text-center" aria-label="Current weather">
        <p id="cityname" class="mt-2 text-slate-500">${data.name}, ${data.sys.country}</p>
            <p class="mt-1 text-sm text-slate-400">
                <time datetime="2026-09-30">${day.toDateString()}</time> -- ${day.toLocaleTimeString()}
            </p>
     <p class="text-6xl" aria-hidden="true">⛅</p>
            <p class="mt-3 text-6xl font-bold">${data.main.temp}&deg;C</p>
            <p class="mt-2 text-lg text-slate-500">${data.weather[0].description}</p>
            <p class="mt-1 text-sm text-slate-400">high${data.main.temp_max}&deg;C - Low ${data.main.temp_min}&deg;C</p>
        </section>

        <section class="grid grid-cols-2 gap-4 border-t border-slate-200 pt-5 text-center" aria-label="Weather details">
            <div class="rounded-xl bg-sky-50 p-3">
                <p class="text-sm text-slate-500"><span aria-hidden="true">💧</span> Humidity</p>
                <p class="mt-1 font-semibold">${data.main.humidity}%</p>
            </div>
            <div class="rounded-xl bg-sky-50 p-3">
                <p class="text-sm text-slate-500"><span aria-hidden="true">🌧️</span> Chance of rain</p>
                <p class="mt-1 font-semibold">${data.clouds.all}%</p>
            </div>
            <div class="rounded-xl bg-sky-50 p-3">
                <p class="text-sm text-slate-500"><span aria-hidden="true">💨</span> Wind</p>
                <p class="mt-1 font-semibold">${data.wind.speed} km/h</p>
            </div>
            <div class="rounded-xl bg-sky-50 p-3">
                <p class="text-sm text-slate-500"><span aria-hidden="true">🌡️</span> Feels like</p>
                <p class="mt-1 font-semibold">${data.main.feels_like}&deg;C</p>
            </div>
        </section>`


    }
)
