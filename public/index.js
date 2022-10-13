async function main() {
    let url = 'https://api.twelvedata.com/time-series&apikey=cc672c50cb8e40078af70f7e07348a08';
    let stockData = ["GME","MSFT","DIS","BNTX"]
   let result = await fetch(url + stockData)
    .then(()=>{
        console.log(result)
    })
    .catch(error=>{
        console.log(error);
    })

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

main()
//Sorry for this I am still trying to figure this code out. This was all I could do so far.