const tableBody = document.getElementById('currenciesTable')

fetch(
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1'
)
  .then((response) => response.json())
  .then((data) => {
    data.slice(0, 5).forEach((currency) => {
      const row = document.createElement('tr')
      row.setAttribute('data-symbol', currency.symbol)

      const idCell = document.createElement('td')
      idCell.textContent = currency.id
      row.appendChild(idCell)

      const symbolCell = document.createElement('td')
      symbolCell.textContent = currency.symbol
      row.appendChild(symbolCell)

      const nameCell = document.createElement('td')
      nameCell.textContent = currency.name
      row.appendChild(nameCell)

      tableBody.appendChild(row)
    })
  })
  .catch((error) => console.error('Error fetching data:', error))
