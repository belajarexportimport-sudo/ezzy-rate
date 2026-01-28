// App Logic

document.addEventListener('DOMContentLoaded', () => {
    renderCountryGrid();
});

function renderCountryGrid() {
    const grid = document.getElementById('country-grid');
    grid.innerHTML = '';

    COUNTRIES.forEach(country => {
        const div = document.createElement('div');
        div.className = 'country-card bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center relative';
        div.innerHTML = `
            <div class="text-4xl mb-2">${country.flag}</div>
            <div class="font-bold text-gray-700 text-sm">${country.name}</div>
        `;
        div.onclick = () => selectCountry(country, div);
        grid.appendChild(div);
    });
}

function selectCountry(country, cardElement) {
    // Active State
    document.querySelectorAll('.country-card').forEach(c => c.classList.remove('active', 'border-blue-500', 'ring-2'));
    cardElement.classList.add('active', 'border-blue-500', 'ring-2');

    // Show Section
    document.getElementById('empty-state').classList.add('hidden');
    const section = document.getElementById('price-section');
    section.classList.remove('hidden');

    // Header Info
    const zoneId = COUNTRY_ZONES[country.name] || '?';
    document.getElementById('selected-country-name').textContent = country.name;
    document.getElementById('selected-zone-info').innerHTML = `Zone (B26): <span class="font-bold text-blue-600">Zone ${zoneId}</span>`;

    // Render Table
    const tbody = document.getElementById('rate-table-body');
    tbody.innerHTML = '';

    country.rates.forEach(item => {
        // Calculate UPS Rates
        const saverData = calculateUpsPrice(country.name, item.w, 'saver');
        const expeditedData = calculateUpsPrice(country.name, item.w, 'expedited');

        const ezzyFormatted = typeof item.price === 'number' ?
            new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.price) + ' <span class="text-sm font-normal text-gray-500">/Kg</span>'
            : item.price;

        // Helper to generate price HTML
        function getPriceHtml(data, colorClass) {
            if (!data) return `<span class="text-gray-400 italic text-sm">--</span>`;

            const minFmt = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(data.min);
            const maxFmt = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(data.max);

            let displayPrice = minFmt;
            if (data.min !== data.max) {
                displayPrice = `<div class="flex flex-col"><span class="text-xs text-gray-500">Mulai</span><span>${minFmt}</span><span class="text-xs text-gray-400">s/d ${maxFmt}</span></div>`;
            }
            return `<div class="font-medium ${colorClass} leading-tight">${displayPrice}</div><div class="text-[10px] text-gray-500 mt-1">/Kg++ (Basic)</div>`;
        }

        const saverHtml = getPriceHtml(saverData, 'text-red-700');
        const expeditedHtml = getPriceHtml(expeditedData, 'text-blue-700');

        // Difference (vs Saver)
        let diffHtml = `<span class="text-gray-300">-</span>`;
        if (saverData && typeof item.price === 'number') {
            // Compare with Saver BEST CASE (Max Price of Saver vs Ezzy) -> Savings
            if (item.price < saverData.max) {
                const savings = saverData.max - item.price;
                const percent = Math.round((savings / saverData.max) * 100);
                diffHtml = `<div class="text-green-600 font-bold text-sm">Hemat up to ${percent}%</div>`;
            } else if (item.price > saverData.min) {
                diffHtml = `<span class="text-red-500 text-sm">Mahal</span>`;
            }
        }

        const tr = document.createElement('tr');
        tr.className = "hover:bg-gray-50 transition-colors";

        // Weight Column
        let weightHtml = `
            <span class="font-medium text-gray-800">${item.w}</span>
            ${item.note ? `<div class="text-xs text-gray-500 mt-1">${item.note}</div>` : ''}
        `;

        tr.innerHTML = `
            <td>${weightHtml}</td>
            <td class="rate-ezzy text-lg">${ezzyFormatted}</td>
            <td class="bg-red-50 border-l border-r border-red-100 align-middle">${saverHtml}</td>
            <td class="bg-blue-50 border-r border-blue-100 align-middle">${expeditedHtml}</td>
            <td class="align-middle">${diffHtml}</td>
        `;
        tbody.appendChild(tr);
    });

    // Render Surcharges
    const surchargeList = document.getElementById('surcharges-list');
    if (country.surcharges && country.surcharges.length > 0) {
        surchargeList.innerHTML = country.surcharges.map(s => `
            <div class="flex justify-between items-center py-2 border-b last:border-0 border-gray-100">
                <span class="text-gray-600 text-sm">${s.name}</span>
                <span class="font-bold text-red-600 text-sm">${s.price}</span>
            </div>
        `).join('');
    } else {
        surchargeList.innerHTML = '<div class="text-sm text-gray-400 italic">No specific surcharges listed.</div>';
    }

    // Render T&C
    const tcList = document.getElementById('tc-list');
    tcList.innerHTML = country.tc.map(t => `<li>${t}</li>`).join('');

    // Scroll to section
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
