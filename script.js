document.getElementById('addForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('itemName').value.trim();
    const amount = parseFloat(document.getElementById('itemAmount').value).toFixed(2);
    const date = document.getElementById('itemDate').value;
    if (!name || isNaN(amount) || !date) return;

    const tbody = document.getElementById('trackerBody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
                <td>${name}</td>
                <td>$${amount}</td>
                <td>${date}</td>
                <td>Pending</td>
            `;
    tbody.appendChild(tr);

    // Reset form
    this.reset();
});